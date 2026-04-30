const frenchDecks = {
    type: "root",
    children: {
        Basics: {
            type: "folder",
            children: {
                Greetings: {
                    type: "deck",
                    cards: [
                        { front: "Bonjour", back: "Hello", break: "Bo-Jon", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "Merci", back: "Thank you", break: "Mer-Ci", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "Oui", back: "Yes", break: "Oui", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                    ]
                }
            }
        }
    }
};
