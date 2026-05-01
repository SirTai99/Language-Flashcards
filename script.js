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
    let node = decks[lang]?.children?.[lesson];

    if (!node) return 0;

    let cards = getAllCards(node);

    let learned = cards.filter(c => c.repetitions > 0).length;

    return cards.length === 0 ? 0 : (learned / cards.length) * 100;
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

                    <button onclick="event.stopPropagation(); startDeck('${key}', 'breakdown')">
                        Breakdown
                    </button>

                    <button onclick="event.stopPropagation(); startDeck('${key}', 'typing')">
                        Typing
                    </button>

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

function shuffleArray(array) {
    let newArr = [...array];

    for (let i = newArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }

    return newArr;
}

function startDeck(name, mode) {
    studyMode = mode;

    let originalCards = currentNode.children[name].cards;
    currentLessonName = name;

    currentLesson = shuffleArray([...originalCards]);

    initializeCards(currentLesson);

    document.getElementById("lessonSelect").style.display = "none";
    document.getElementById("studyMode").style.display = "block";

    currentIndex = 0;

    showCard();

    setTimeout(() => {
        setupCardControls();
    }, 100);


}

function initializeCards(cards) {
    cards.forEach(card => {
        if (!card.easeFactor) card.easeFactor = 2.5;
        if (!card.interval) card.interval = 0;
        if (!card.repetitions) card.repetitions = 0;
        if (!card.due) card.due = Date.now();
    });
}

function initializeAllDecks() {
    for (let lang in decks) {
        let allCards = getAllCards(decks[lang]);

        allCards.forEach(card => {
            if (!card.easeFactor) card.easeFactor = 2.5;
            if (!card.interval) card.interval = 0;
            if (!card.repetitions) card.repetitions = 0;
            if (!card.due) card.due = Date.now();
        });
    }
}

// ---------------- CARDS ----------------
function safeCards() {
    return (currentLesson || []).filter(card => {
        return !card.due || card.due <= Date.now();
    });
}

function showCard() {
    const cards = safeCards();

    if (cards.length === 0) {
        document.getElementById("cardFront").innerText = "No cards due 🎉";
        document.getElementById("cardBack").innerText = "Come back later!";
        return;
    }

    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }

    const card = cards[currentIndex];

    document.getElementById("deckTitle").innerText =
        `${currentLanguage} - ${currentLessonName}`;


    if (studyMode === "typing") {

        document.getElementById("typingModeArea").style.display = "block";

        document.getElementById("flipButton").style.display = "none";

        document.getElementById("cardFront").innerText = card.back;

        document.getElementById("cardBack").innerText = "Type the answer below";

        document.getElementById("typingInput").value = "";

        document.getElementById("typingResult").innerText = "";

    } else {

        document.getElementById("typingModeArea").style.display = "none";

        document.getElementById("flipButton").style.display = "inline-block";

        if (studyMode === "breakdown") {

            document.getElementById("cardFront").innerText = card.front;

            document.getElementById("cardBack").innerText =
                card.back +
                (card.break
                    ? "\n\n/ " + card.break.split(" ").join(" | ") + " /"
                    : "");

        } else {

            document.getElementById("cardFront").innerText = card.front;
            document.getElementById("cardBack").innerText = card.back;
        }
    }

    document.getElementById("cardInner").classList.remove("flipped");
}

function checkTypedAnswer() {

    const card = safeCards()[currentIndex];

    const input = document
        .getElementById("typingInput")
        .value
        .trim()
        .toLowerCase();

    const correct = card.front
        .trim()
        .toLowerCase();

    const result = document.getElementById("typingResult");

    if (input === correct) {

        result.innerText = "✅ Correct!";

        markEasy();

    } else {

        result.innerText =
            `❌ Correct Answer: ${card.front}`;

        markHard();
    }
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
    } else if (currentLanguage === "Mixteco") {
        utterance.lang = "es-MX";
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

            if (studyMode !== "typing") {
                flipCard();
            }
        }
    });

    newCard.addEventListener("touchend", () => {

        if (studyMode !== "typing") {
            flipCard();
        }
    });

}

// ---------------- SPACED REPETITION ----------------

function markEasy() {
    let card = safeCards()[currentIndex];

    card.repetitions++;

    if (card.repetitions === 1) {
        card.interval = 1; // 1 day
    } else if (card.repetitions === 2) {
        card.interval = 3;
    } else {
        card.interval = Math.round(card.interval * card.easeFactor);
    }

    card.easeFactor += 0.15;

    card.due = Date.now() + card.interval * 24 * 60 * 60 * 1000;

    saveDecks();
    updateDashboardProgress();
    nextCard();
}

function markHard() {
    let card = safeCards()[currentIndex];

    card.repetitions = 0;
    card.interval = 1;

    card.easeFactor = Math.max(1.3, card.easeFactor - 0.2);

    card.due = Date.now() + 24 * 60 * 60 * 1000;

    saveDecks();
    updateDashboardProgress();
    nextCard();
}

// reset session
function resetSession() {
    let originalCards = currentNode.children[currentLessonName].cards;

    originalCards.forEach(card => {
        card.interval = 0;
        card.repetitions = 0;
        card.easeFactor = 2.5;
        card.due = Date.now();
    });

    currentLesson = shuffleArray([...originalCards]);

    saveDecks();
    updateDashboardProgress();

    currentIndex = 0;
    showCard();
}



// ---------------- DASHBOARD PROGRESS ----------------

function updateDashboardProgress() {
    for (let lang in decks) {

        let allCards = getAllCards(decks[lang]);

        let total = allCards.length;

        let learned = allCards.filter(card => {
            return card.repetitions > 0;
        }).length;

        let percent = total === 0 ? 0 : (learned / total) * 100;

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

function goHome() {
    nodeHistory = [];
    currentNode = null;

    currentIndex = 0;
    currentLesson = null;

    document.getElementById("studyMode").style.display = "none";
    document.getElementById("lessonSelect").style.display = "none";

    document.getElementById("dashboard").style.display = "block";
}

// save progress
function saveDecks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
}

function startApp() {
    initializeAllDecks(); 

    updateDashboardProgress();
    

    setInterval(updateDashboardProgress, 2000);
}

function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

window.onload = function () {
    startApp();

    document.addEventListener("keydown", function(e) {

        if (
            studyMode === "typing" &&
            e.key === "Enter"
        ) {
            checkTypedAnswer();
        }
    });

    if (isMobile()) {
        document.body.style.transform = "scale(1.1)";
        document.body.style.transformOrigin = "top center";
    }

    if (localStorage.getItem("darkMode") === "true") {
        darkMode = true;
        document.body.classList.add("dark");
    }
};



