const frenchDecks = {
    type: "root",
    children: {
        Basics: {
            type: "folder",
            children: {
                Greetings: {
                    type: "deck",
                    cards: [
                        { front: "Hola", back: "Hello" },
                        { front: "Gracias", back: "Thank you" }
                    ]
                }
            }
        }
    }
};
