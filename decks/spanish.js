const spanishDecks = {
    type: "root",
    children: {
        Basics: {
            type: "folder",
            children: {
                Greetings: {
                    type: "deck",
                    cards: [
                        { front: "Hola", back: "Hello", break: "O-La", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "Gracias", back: "Thank you", break: "Gra-Cia", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                }
            }
        }
    }
};

