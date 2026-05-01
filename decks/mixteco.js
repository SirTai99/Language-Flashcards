const mixtecoDecks = {
    type: "root",
    children: {
        Basics: {
            type: "folder",
            children: {
                Greetings: {
                    type: "deck",
                    cards: [
                        { front: "Bonjour", back: "Hello", break: "Bo-Jon" },
                        { front: "Merci", back: "Thank you", break: "Mer-Ci" },
                        { front: "Oui", back: "Yes", break: "Oui" },
                    ]
                }
            }
        }
    }
};