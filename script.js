const PASSWORD = "LOL";

function checkPassword() {
    let input = prompt("Enter password:");

    if (input !== PASSWORD) {
        document.body.innerHTML = "<h1>Access Denied</h1>";
        throw new Error("Blocked by password");
    }
}

const STORAGE_KEY = "flashcard_decks";

let decks = {
    Spanish: spanishDecks,
    French: frenchDecks,
    Japanese: japaneseDecks
};


let currentLanguage = null;
let currentLesson = null;
let currentLessonName = null;
let currentIndex = 0;
let currentNode = null;
let isFlipped = false;
let globalStep = 0;
let studyMode = "full"; // or "breakdown"
let nodeHistory = [];
let darkMode = false;
let startX = 0;
let endX = 0;

function toggleDarkMode() {
    darkMode = !darkMode;

    document.body.classList.toggle("dark", darkMode);

    localStorage.setItem("darkMode", darkMode);
}

// ---------------- DASHBOARD ----------------

function selectLanguage(lang) {
    currentLanguage = lang;
    currentNode = decks[lang];

    nodeHistory = [];

    document.getElementById("dashboard").style.display = "none";
    document.getElementById("lessonSelect").style.display = "block";
    document.getElementById("studyMode").style.display = "none";

    document.getElementById("languageTitle").innerText = lang + " Lessons";

    showNode(currentNode);
}

function getLessonProgress(lang, lesson) {
    let cards = decks[lang]?.children?.[lesson]?.cards;

    if (!cards) return 0;

    let total = cards.length;
    let done = cards.filter(c => (c.nextReview || 0) <= globalStep).length;

    return total === 0 ? 0 : (done / total) * 100;
}

function getAllCards(node) {
    let cards = [];

    if (node.type === "deck") {
        return node.cards;
    }

    if (node.children) {
        for (let key in node.children) {
            cards = cards.concat(getAllCards(node.children[key]));
        }
    }


    return cards;
}

// back button
function goBack() {
    if (document.getElementById("studyMode").style.display === "block") {
        document.getElementById("studyMode").style.display = "none";
        document.getElementById("lessonSelect").style.display = "block";
        return;
    }

    if (nodeHistory.length > 0) {
        currentNode = nodeHistory.pop();
        showNode(currentNode);
        return;
    }

    document.getElementById("lessonSelect").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
}

function showNode(node) {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("lessonSelect").style.display = "block";
    document.getElementById("studyMode").style.display = "none";

    let html = "";

    if (!node.children) return;

    for (let key in node.children) {
        let child = node.children[key];


        if (child.type === "folder") {
            html += `
                <div class="lesson" onclick="openNode('${key}')">
                    <h3>📁 ${key}</h3>
                </div>
            `;
        } else if (child.type === "deck") {
            html += `
                <div class="lesson">
                    <h3>📘 ${key}</h3>

                    <button onclick="event.stopPropagation(); startDeck('${key}', 'full')">Full</button>
                    <button onclick="event.stopPropagation(); startDeck('${key}', 'breakdown')">Breakdown</button>
                </div>
            `;
        }
    }

    document.getElementById("lessonList").innerHTML = html;
}

function openNode(name) {
    nodeHistory.push(currentNode);
    currentNode = currentNode.children[name];
    showNode(currentNode);
}

function startDeck(name, mode) {
    studyMode = mode;

    currentLesson = currentNode.children[name].cards;
    currentLessonName = name;


    document.getElementById("lessonSelect").style.display = "none";
    document.getElementById("studyMode").style.display = "block";

    currentIndex = 0;

    showCard();

    setTimeout(() => {
        setupCardControls();
    }, 100);


}

// ---------------- CARDS ----------------
function safeCards() {
    return currentLesson || [];
}

function showCard() {
    const cards = safeCards();

    if (cards.length === 0) {
        document.getElementById("cardFront").innerText = "No cards found";
        document.getElementById("cardBack").innerText = "";
        return;
    }

    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }

    const card = cards[currentIndex];

    document.getElementById("deckTitle").innerText =
        `${currentLanguage} - ${currentLessonName}`;


    if (studyMode === "breakdown") {
        document.getElementById("cardFront").innerText = card.front;
        document.getElementById("cardBack").innerText =
            card.back + "\n\nWords: " + card.front.split(" ").join(" | ");
    } else {
        document.getElementById("cardFront").innerText = card.front;
        document.getElementById("cardBack").innerText = card.back;
    }

    document.getElementById("cardInner").classList.remove("flipped");
}

function flipCard() {
    document.getElementById("cardInner").classList.toggle("flipped");
}

function nextCard() {
    currentIndex = (currentIndex + 1) % safeCards().length;
    showCard();
}

function speakCard() {
    const card = safeCards()[currentIndex];

    if (!card) return;

    let text = card.front; // usually you want the foreign word (front side)

    let utterance = new SpeechSynthesisUtterance(text);

    if (currentLanguage === "Spanish") {
        utterance.lang = "es-ES";
    } else if (currentLanguage === "French") {
        utterance.lang = "fr-FR";
    } else if (currentLanguage === "Japanese") {
        utterance.lang = "ja-JP";
    }

    utterance.rate = 0.9; // speed (0.1 - 10)
    utterance.pitch = 1;  // voice pitch

    speechSynthesis.speak(utterance);
}

function stopSpeaking() {
    speechSynthesis.cancel();
}

function handleSwipe() {
    let diff = endX - startX;

    const card = document.querySelector(".card");

    if (diff > 0) {
        card.style.transform = "translateX(100px)";
    } else {
        card.style.transform = "translateX(-100px)";
    }

    setTimeout(() => {
        card.style.transform = "translateX(0)";
    }, 200);

    if (Math.abs(diff) < 50) return; // ignore tiny swipes

    if (diff > 0) {
        // swipe right = EASY
        markEasy();
    } else {
        // swipe left = HARD
        markHard();
    }
}

function setupCardControls() {
    const card = document.querySelector(".card");

    if (!card) return;

    // prevent duplicate listeners
    card.replaceWith(card.cloneNode(true));

    const newCard = document.querySelector(".card");

    let isDragging = false;

    newCard.addEventListener("mousedown", (e) => {
        startX = e.clientX;
        isDragging = false;
    });

    newCard.addEventListener("mousemove", (e) => {
        if (Math.abs(e.clientX - startX) > 10) {
            isDragging = true;
        }
    });

    newCard.addEventListener("mouseup", (e) => {
        endX = e.clientX;

        if (isDragging) {
            handleSwipe();
        } else {
            flipCard();
        }
    });

    newCard.addEventListener("touchend", () => {
        flipCard();
    });
}

// ---------------- SPACED REPETITION ----------------

function markEasy() {
    let card = safeCards()[currentIndex];

    card.interval = card.interval === 0 ? 2 : card.interval * 2;
    card.nextReview = globalStep + card.interval;

    globalStep++;

    saveDecks(); 
    nextCard();
}

function markHard() {
    let card = safeCards()[currentIndex];

    card.interval = 1;
    card.nextReview = globalStep + 1;

    globalStep++;
    saveDecks(); 
    nextCard();
}

// reset session
function resetSession() {
    globalStep = 0;

    let cards = safeCards();

    cards.forEach(card => {
        card.interval = 0;
        card.nextReview = 0;
    });

    saveDecks();

    currentIndex = 0;
    showCard();
}


// ---------------- DASHBOARD PROGRESS ----------------

function updateDashboardProgress() {
    for (let lang in decks) {

        let allCards = getAllCards(decks[lang]);

        let total = allCards.length;
        let due = allCards.filter(c => (c.nextReview || 0) <= globalStep).length;

        let percent = total === 0 ? 0 : ((total - due) / total) * 100;

        let base = lang.toLowerCase();

        let text = document.getElementById(base + "Progress");
        let bar = document.getElementById(base + "Bar");

        if (text) {
            text.innerText = `Progress: ${Math.round(percent)}%`;
        }

        if (bar) {
            bar.style.width = percent + "%";
        }
    }
}

// save progress
function saveDecks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
}

function startApp() {
    updateDashboardProgress();

    setInterval(updateDashboardProgress, 2000);
}

function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

window.onload = function () {
    startApp();

    if (isMobile()) {
        document.body.style.transform = "scale(1.1)";
        document.body.style.transformOrigin = "top center";
    }

    if (localStorage.getItem("darkMode") === "true") {
        darkMode = true;
        document.body.classList.add("dark");
    }
};



