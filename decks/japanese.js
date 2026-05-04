const japaneseDecks = {
    type: "root",
    children: {
        "📘 Genki I – Lesson 1 Vocabulary (かな only)": { 
            type: "folder",
            children: {
                "🏫 School": {
                    type: "deck",
                    cards: [
                        { front: "だいがく", back: "University", break: "Da-I-Ga-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "こうこう", back: "High School", break: "Ko-U-Ko-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "がくせい", back: "Student", break: "Ga-Ku-Sei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "だいがくせい", back: "College Student", break: "Da-I-Ga-Ku-Sei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "りゅがくせい", back: "International Student", break: "Ryu-Ga-Ku-Sei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "せんせい", back: "Teacher", break: "Sen-Sei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "＃ねんせい", back: "# Year", break: "Nen-Sei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いちねんせい", back: "First Year", break: "Ichi-Nen-Sei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "せんこう", back: "Major", break: "Sen-Ko-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "👤 Person": {
                    type: "deck",
                    cards: [
                        { front: "わたし", back: "I", break: "Wa-Ta-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "とまだち", back: "Friend", break: "To-Ma-Da-Chi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "さん", back: "Mr. / Ms.", break: "San", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じん", back: "People", break: "Jin", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にほんじん", back: "Japanese People", break: "Ni-Hon-Jin", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "📅 Time": {
                    type: "deck",
                    cards: [
                        { front: "いま", back: "Now", break: "I-Ma", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "ごぜん", back: "Day", break: "Go-Zen", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ごご", back: "Night", break: "Go-Go", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じ", back: "Time", break: "Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いちじ", back: "One O'Clock", break: "Ichi-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "はん", back: "Half an Hour", break: "Han", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にじはん", back: "Half Past Two", break: "Ni-Ji-Han", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "🏫 Others": {
                    type: "deck",
                    cards: [
                        { front: "にほん", back: "Japan", break: "Ni-Hon", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "アメリカ", back: "America", break: "A-Me-Ri-Ka", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ご", back: "...Language", break: "Go", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にほんご", back: "Japanese (Language)", break: "Ni-Hon-Go", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "さい", back: "Age", break: "Sai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "でんわ", back: "Phone", break: "Den-Wa", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ばん", back: "...Number", break: "Ban", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ばんごう", back: "Number", break: "Ban-Go-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "なまえ", back: "Name", break: "Na-Ma-E", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "なん / なに", back: "What / What", break: "Na-N / Na-Ni", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "💬 Expressions": {
                    type: "deck",
                    cards: [
                        { front: "あのう", back: "Um...", break: "A-No-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "はい", back: "Yes", break: "Ha-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "そうです", back: "That's Right", break: "So-De-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "そうですか", back: "Is That So", break: "So-De-Su-Ka", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "🗺️ Countries": {
                    type: "deck",
                    cards: [
                        { front: "くに", back: "Country", break: "Ku-Ni", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "イギリス", back: "England", break: "I-Gi-Ri-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "オーストラリア", back: "Australia", break: "O-Us-To-Ra-Li-A", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "かんこく", back: "Korea", break: "Ka-Nko-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "カナダ", back: "Canada", break: "Ka-Na-Da", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ちゅうごく", back: "China", break: "Chu-U-Go-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "インド", back: "India", break: "In-Do", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "エジプト", back: "Egypt", break: "E-Ji-Pu-To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "フイリピン", back: "Philippines", break: "Fu-I-Ri-Pin", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "🎓 Major": {
                    type: "deck",
                    cards: [
                        { front: "せんこう", back: "Major", break: "Sen-Ko-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "アジア　けんきゆう", back: "Asia Studies", break: "A-Ji-A Ken-Ki-Yu-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "けいざい", back: "Economics", break: "Kei-Zai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "こうがく", back: "Engineering", break: "Ko-U-Ga-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "こくさいかんけい", back: "International Relations", break: "Ko-Ku-Sai-Kan-Kei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "コンピューター", back: "Computer", break: "Kon-Pi-Yu-Ta", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "せいじ", back: "Politics", break: "Sei-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "せいぶつがく", back: "Biology", break: "Sei-Bu-Tsu-Ga-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ビジネス", back: "Business", break: "Bi-Jin-Ne-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ぶんがく", back: "Literature", break: "Bu-N-Ga-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "れきし", back: "History", break: "Re-Ki-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "💼 Occupation": {
                    type: "deck",
                    cards: [
                        { front: "しごと", back: "Occupation", break: "Shi-Go-To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "いしゃ", back: "Doctor", break: "I-Sha", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かいしゃいん", back: "Office Worker", break: "Kai-Sha-In", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かんごし", back: "Nurse", break: "Ka-N-Go-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "こうこうせい", back: "High School Student", break: "Ko-U-Ko-U-Sei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "しゅふ", back: "Housewife", break: "Shu-Fu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "だいがくいんせい", back: "Graduate Student", break: "Dai-Ga-Ku-In-Sei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "べんごし", back: "Lawyer", break: "Be-N-Go-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "👪 Family": {
                    type: "deck",
                    cards: [
                        { front: "かぞく", back: "Family", break: "Ka-Zu-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "おかさん", back: "Mother", break: "O-Ka-San", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おとうさん", back: "Father", break: "O-To-U-San", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おねえさん", back: "Older Sister", break: "O-Ne-E-San", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おにいさん", back: "Older Brother", break: "O-Ni-I-San", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いもうと", back: "Younger Sister", break: "I-Mo-U-To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おとうと", back: "Younger Brother", break: "O-To-U-To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "📅 Time 1.5": {
                    type: "deck",
                    cards: [
                        { front: "にじ", back: "Two O'Clock", break: "Ni-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "さんじ", back: "Three O'Clock", break: "San-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "よじ", back: "Four O'Clock", break: "Yo-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ごじ", back: "Five O'Clock", break: "Go-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ろくじ", back: "Six O'Clock", break: "Ro-Ku-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "しちじ", back: "Seven O'Clock", break: "Shi-Chi-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "はちじ", back: "Eight O'Clock", break: "Ha-Chi-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "くじ", back: "Nine O'Clock", break: "Ku-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうじ", back: "Ten O'Clock", break: "Ju-U-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅういちじ", back: "Eleven O'Clock", break: "Ju-U-I-Chi-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうにじ", back: "Twelve O'Clock", break: "Ju-U-Ni-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },

                        { front: "いっぷん", back: "Minutes - 1", break: "Ip-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "にふん", back: "Minutes - 2", break: "Ni-Fun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "さんぷん", back: "Minutes - 3", break: "San-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "よんぷん", back: "Minutes - 4", break: "Yo-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ごふん", back: "Minutes - 5", break: "Go-Fun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ろっぷん", back: "Minutes - 6", break: "Ro-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ななふん", back: "Minutes - 7", break: "Na-Na-Fun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "はっぷん", back: "Minutes - 8", break: "Ha-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "きゅうふん", back: "Minutes - 9", break: "Ki-Yu-Fun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅっぷん", back: "Minutes - 10", break: "Ju-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅういっぷん", back: "Minutes - 11", break: "Ju-U-I-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうにふん", back: "Minutes - 12", break: "Ju-U-Ni-Fun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "じゅうさんぷん", back: "Minutes - 13", break: "Ju-U-San-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうよんぷん", back: "Minutes - 14", break: "Ju-U-Yo-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうごふん", back: "Minutes - 15", break: "Ju-U-Go-Fun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうろっぷん", back: "Minutes - 16", break: "Ju-U-Ro-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうななふん", back: "Minutes - 17", break: "Ju-U-Na-Na-Fun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうはっぷん", back: "Minutes - 18", break: "Ju-U-Ha-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうきゅうふん", back: "Minutes - 19", break: "Ju-U-Ki-Yu-Fun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にじゅっぷん", back: "Minutes - 20", break: "Ni-Ju-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "さんじゅっぷん", back: "Minutes - 30", break: "San-Ju-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                
                "📖 Lesson 1 Vocabulary - Full": {
                    type: "deck",
                    cards: [        
                        { front: "だいがく", back: "University", break: "Da-I-Ga-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "こうこう", back: "High School", break: "Ko-U-Ko-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "がくせい", back: "Student", break: "Ga-Ku-Sei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "だいがくせい", back: "College Student", break: "Da-I-Ga-Ku-Sei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "りゅがくせい", back: "International Student", break: "Ryu-Ga-Ku-Sei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "せんせい", back: "Teacher", break: "Sen-Sei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "＃ねんせい", back: "# Year", break: "Nen-Sei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いちねんせい", back: "First Year", break: "Ichi-Nen-Sei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "せんこう", back: "Major", break: "Sen-Ko-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "わたし", back: "I", break: "Wa-Ta-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "とまだち", back: "Friend", break: "To-Ma-Da-Chi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "さん", back: "Mr. / Ms.", break: "San", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じん", back: "People", break: "Jin", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にほんじん", back: "Japanese People", break: "Ni-Hon-Jin", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いま", back: "Now", break: "I-Ma", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "ごぜん", back: "Day", break: "Go-Zen", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ごご", back: "Night", break: "Go-Go", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じ", back: "Time", break: "Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いちじ", back: "One O'Clock", break: "Ichi-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "はん", back: "Half an Hour", break: "Han", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にじはん", back: "Half Past Two", break: "Ni-Ji-Han", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にほん", back: "Japan", break: "Ni-Hon", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "アメリカ", back: "America", break: "A-Me-Ri-Ka", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ご", back: "...Language", break: "Go", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にほんご", back: "Japanese (Language)", break: "Ni-Hon-Go", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "さい", back: "Age", break: "Sai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "でんわ", back: "Phone", break: "Den-Wa", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ばん", back: "...Number", break: "Ban", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ばんごう", back: "Number", break: "Ban-Go-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "なまえ", back: "Name", break: "Na-Ma-E", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "なん / なに", back: "What / What", break: "Na-N / Na-Ni", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あのう", back: "Um...", break: "A-No-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "はい", back: "Yes", break: "Ha-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "そうです", back: "That's Right", break: "So-De-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "そうですか", back: "Is That So", break: "So-De-Su-Ka", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "くに", back: "Country", break: "Ku-Ni", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "イギリス", back: "England", break: "I-Gi-Ri-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "オーストラリア", back: "Australia", break: "O-Us-To-Ra-Li-A", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "かんこく", back: "Korea", break: "Ka-Nko-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "カナダ", back: "Canada", break: "Ka-Na-Da", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ちゅうごく", back: "China", break: "Chu-U-Go-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "インド", back: "India", break: "In-Do", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "エジプト", back: "Egypt", break: "E-Ji-Pu-To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "フイリピン", back: "Philippines", break: "Fu-I-Ri-Pin", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "せんこう", back: "Major", break: "Sen-Ko-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "アジア　けんきゆう", back: "Asia Studies", break: "A-Ji-A Ken-Ki-Yu-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "けいざい", back: "Economics", break: "Kei-Zai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "こうがく", back: "Engineering", break: "Ko-U-Ga-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "こくさいかんけい", back: "International Relations", break: "Ko-Ku-Sai-Kan-Kei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "コンピューター", back: "Computer", break: "Kon-Pi-Yu-Ta", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "せいじ", back: "Politics", break: "Sei-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "せいぶつがく", back: "Biology", break: "Sei-Bu-Tsu-Ga-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ビジネス", back: "Business", break: "Bi-Jin-Ne-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ぶんがく", back: "Literature", break: "Bu-N-Ga-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "れきし", back: "History", break: "Re-Ki-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "しごと", back: "Occupation", break: "Shi-Go-To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "いしゃ", back: "Doctor", break: "I-Sha", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かいしゃいん", back: "Office Worker", break: "Kai-Sha-In", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かんごし", back: "Nurse", break: "Ka-N-Go-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "こうこうせい", back: "High School Student", break: "Ko-U-Ko-U-Sei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "しゅふ", back: "Housewife", break: "Shu-Fu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "だいがくいんせい", back: "Graduate Student", break: "Dai-Ga-Ku-In-Sei", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "べんごし", back: "Lawyer", break: "Be-N-Go-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かぞく", back: "Family", break: "Ka-Zu-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "おかさん", back: "Mother", break: "O-Ka-San", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おとうさん", back: "Father", break: "O-To-U-San", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おねえさん", back: "Older Sister", break: "O-Ne-E-San", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おにいさん", back: "Older Brother", break: "O-Ni-I-San", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いもうと", back: "Younger Sister", break: "I-Mo-U-To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おとうと", back: "Younger Brother", break: "O-To-U-To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にじ", back: "Two O'Clock", break: "Ni-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "さんじ", back: "Three O'Clock", break: "San-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "よじ", back: "Four O'Clock", break: "Yo-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ごじ", back: "Five O'Clock", break: "Go-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ろくじ", back: "Six O'Clock", break: "Ro-Ku-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "しちじ", back: "Seven O'Clock", break: "Shi-Chi-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "はちじ", back: "Eight O'Clock", break: "Ha-Chi-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "くじ", back: "Nine O'Clock", break: "Ku-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうじ", back: "Ten O'Clock", break: "Ju-U-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅういちじ", back: "Eleven O'Clock", break: "Ju-U-I-Chi-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうにじ", back: "Twelve O'Clock", break: "Ju-U-Ni-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いっぷん", back: "Minutes - 1", break: "Ip-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "にふん", back: "Minutes - 2", break: "Ni-Fun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "さんぷん", back: "Minutes - 3", break: "San-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "よんぷん", back: "Minutes - 4", break: "Yo-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ごふん", back: "Minutes - 5", break: "Go-Fun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ろっぷん", back: "Minutes - 6", break: "Ro-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ななふん", back: "Minutes - 7", break: "Na-Na-Fun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "はっぷん", back: "Minutes - 8", break: "Ha-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "きゅうふん", back: "Minutes - 9", break: "Ki-Yu-Fun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅっぷん", back: "Minutes - 10", break: "Ju-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅういっぷん", back: "Minutes - 11", break: "Ju-U-I-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうにふん", back: "Minutes - 12", break: "Ju-U-Ni-Fun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "じゅうさんぷん", back: "Minutes - 13", break: "Ju-U-San-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうよんぷん", back: "Minutes - 14", break: "Ju-U-Yo-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうごふん", back: "Minutes - 15", break: "Ju-U-Go-Fun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうろっぷん", back: "Minutes - 16", break: "Ju-U-Ro-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうななふん", back: "Minutes - 17", break: "Ju-U-Na-Na-Fun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうはっぷん", back: "Minutes - 18", break: "Ju-U-Ha-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゅうきゅうふん", back: "Minutes - 19", break: "Ju-U-Ki-Yu-Fun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にじゅっぷん", back: "Minutes - 20", break: "Ni-Ju-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "さんじゅっぷん", back: "Minutes - 30", break: "San-Ju-Pun", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
            }
        },

        "📘 Genki I – Lesson 2 Vocabulary (かな only)": { 
            type: "folder",
            children: {
                "👉 Words That Point": {
                    type: "deck",
                    cards: [
                        { front: "これ", back: "This One", break: "Ko-Re", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "それ", back: "That One", break: "So-Re", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あれ", back: "That One (Over There)", break: "A-Re", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どれ", back: "Which One", break: "Do-Re", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "この", back: "This...", break: "Ko-No", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "その", back: "That...", break: "So-No", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あの", back: "That...(Over There)", break: "A-No", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どの", back: "Which...", break: "Do-No", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ここ", back: "Here", break: "Ko-Ko", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "そこ", back: "There", break: "So-Ko", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あそこ", back: "Over There", break: "A-So-Ko", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どこ", back: "Where", break: "Do-Ko", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "だれ", back: "Who", break: "Da-Re", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "🐟 Food": {
                    type: "deck",
                    cards: [
                        { front: "おいしい", back: "Delicious", break: "O-I-Shi-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "さかな", back: "Fish", break: "Sa-Ka-Na", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "とんかつ", back: "Pork Cutlet", break: "To-N-Ka-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にく", back: "Meat", break: "Ni-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "メニュー", back: "Menu", break: "Me-Nu-Yu-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "やさい", back: "Vegetable", break: "Ya-Sai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "📦 Things": {
                    type: "deck",
                    cards: [
                        { front: "かさ", back: "Unbrella", break: "Ka-Sa", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "かばん", back: "Bag", break: "Ka-Ba-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "くつ", back: "Shoes", break: "Ku-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "さいふ", back: "Wallet", break: "Sa-I-Fu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ジーンズ", back: "Jeans", break: "Je-In-Zu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じてんしゃ", back: "Bicycle", break: "Ji-Ten-Sha", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "しんぶん", back: "Newspaper", break: "Shin-Bu-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "スマホ", back: "Smartphone", break: "Su-Ma-Ho", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "Tシャツ", back: "T-Shirt", break: "T-Sha-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "とけい", back: "Watch / Clock", break: "To-Ke-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ノート", back: "Notebook", break: "No-To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ペン", back: "Pen", break: "Pe-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ぼうし", back: "Hat / Cap", break: "Bo-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ほん", back: "Book", break: "Ho-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "🏠 Places": {
                    type: "deck",
                    cards: [
                        { front: "ぎんこう", back: "Bank", break: "Gi-Nko-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "コンビニ", back: "Convenience Store", break: "Kon-Bi-Ni", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "トイレ", back: "Toilet / Restroom", break: "To-Ire", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "としょかん", back: "Library", break: "To-Sho-Kan", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ゆうびんきょく", back: "Post Office", break: "Yu-Bin-Kyo-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "🗺️ Countries": {
                    type: "deck",
                    cards: [
                        { front: "イギリス", back: "Britain", break: "I-Gi-Ri-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "かんこく", back: "Korea", break: "Ka-Nko-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ちゅうごく", back: "China", break: "Chu-U-Gu-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "🎓 Majors": {
                    type: "deck",
                    cards: [
                        { front: "えいご", back: "English (Language)", break: "Ei-Go", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "けいざい", back: "Economics", break: "Kei-Zai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "コンピューター", back: "Computer", break: "Kon-Pyu-U-Ta", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ビジネス", back: "Business", break: "Bi-Ji-Ne-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "れきし", back: "History", break: "Re-Ki-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "👨‍👩‍👧‍👦 Family": {
                    type: "deck",
                    cards: [
                        { front: "おかあさん", back: "Mother", break: "O-Ka-A-San", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "おとうさん", back: "Father", break: "O-To-U-San", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "💵 Money Matters": {
                    type: "deck",
                    cards: [
                        { front: "いくら", back: "How Much", break: "I-Ku-Ra", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "〜えん", back: "...Yen", break: "En", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "たかい", back: "Expensice / High", break: "Ta-Ka-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "🗣️ Expressions": {
                    type: "deck",
                    cards: [
                        { front: "いらっしゃいませ", back: "Welcome (To Out Store)", break: "I-Ra-Ssha-I-Ma-Se", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "(～を）おねがいします", back: "...Please", break: "O-Ne-Ga-I-Shi-Ma-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "(〜を）ください", back: "Please Give Me...", break: "Ku-Da-Sai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゃあ", back: "Then... / if That is the Case...", break: "Ja-A", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どうぞ", back: "Please / Here it is", break: "Do-Zo", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どうも", back: "Thank You", break: "Do-Mo", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "👩🏻‍🏫 Classroom Expressions": {
                    type: "deck",
                    cards: [
                        { front: "わかりましたか", back: "Do You Understand?", break: "Wa-Ka-Ri-Ma-Shi-Ta-Ka", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "わかりました", back: "I Understand / I Understood", break: "Wa-Ka-Ri-Ma-Shi-Ta", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "わかりました", back: "I Don't Understand / I Don't Know", break: "Wa-Ka-Ri-Ma-Sen", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ゆうくり　いってください", back: "Please Say It Slowly", break: "Yu-Ku-Ri I-Tte-Ku-Da-Sai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "もういちど　いってください", back: "Please Say It Again", break: "Mo-U-Ichi-Dou I-Tte-Ku-Da-Sai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ちょっと　まってください", back: "Please Wait A For A While", break: "Cho-Tto Ma-Tte-Ku-Da-Sai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "きて　ください", back: "Please Listen. / Please Ask.", break: "Ki-Tte Ku-Da-Sai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "＃　ペエジ　みて　ください ", back: "Please Loot At Page #", break: "Pe-E-Ji Mi-Tte Ku-Da-Sai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "👩🏻‍🏫 Classroom Items": {
                    type: "deck",
                    cards: [
                        { front: "こくばん", back: "Blackboard", break: "Ko-Ku-Ba-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "でんき", back: "Light", break: "De-Nki", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "カーテン", back: "Curtain", break: "Ka-Ten", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "つくえ", back: "Desk", break: "Tsu-Ku-E", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ほん", back: "Book", break: "Ho-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ドア", back: "Door", break: "Do-A", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "けしゴム", back: "Eraser", break: "Ke-Shi-Go-Mu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じしょ", back: "Dictionary", break: "Ji-Sho", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "まど", back: "Window", break: "Ma-Do", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "えんぴつ", back: "Pencil", break: "En-Pi-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いす", back: "Chair", break: "I-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ペン", back: "Pen", break: "Pe-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ぼうし", back: "Hat / Cap", break: "Bo-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ほん", back: "Book", break: "Ho-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "📖 Lesson 2 Vocabulary - Full": {
                    type: "deck",
                    cards: [        
                        { front: "これ", back: "This One", break: "Ko-Re", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "それ", back: "That One", break: "So-Re", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あれ", back: "That One (Over There)", break: "A-Re", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どれ", back: "Which One", break: "Do-Re", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "この", back: "This...", break: "Ko-No", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "その", back: "That...", break: "So-No", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あの", back: "That...(Over There)", break: "A-No", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どの", back: "Which...", break: "Do-No", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ここ", back: "Here", break: "Ko-Ko", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "そこ", back: "There", break: "So-Ko", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あそこ", back: "Over There", break: "A-So-Ko", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どこ", back: "Where", break: "Do-Ko", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "だれ", back: "Who", break: "Da-Re", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おいしい", back: "Delicious", break: "O-I-Shi-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "さかな", back: "Fish", break: "Sa-Ka-Na", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "とんかつ", back: "Pork Cutlet", break: "To-N-Ka-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にく", back: "Meat", break: "Ni-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "メニュー", back: "Menu", break: "Me-Nu-Yu-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "やさい", back: "Vegetable", break: "Ya-Sai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かさ", back: "Unbrella", break: "Ka-Sa", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "かばん", back: "Bag", break: "Ka-Ba-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "くつ", back: "Shoes", break: "Ku-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "さいふ", back: "Wallet", break: "Sa-I-Fu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ジーンズ", back: "Jeans", break: "Je-In-Zu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じてんしゃ", back: "Bicycle", break: "Ji-Ten-Sha", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "しんぶん", back: "Newspaper", break: "Shin-Bu-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "スマホ ", back: "Smartphone", break: "Su-Ma-Ho", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "Tシャツ", back: "T-Shirt", break: "T-Sha-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "とけい", back: "Watch / Clock", break: "To-Ke-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ノート", back: "Notebook", break: "No-To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ペン", back: "Pen", break: "Pe-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ぼうし", back: "Hat / Cap", break: "Bo-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ほん", back: "Book", break: "Ho-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ぎんこう", back: "Bank", break: "Gi-Nko-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "コンビニ", back: "Convenience Store", break: "Kon-Bi-Ni", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "トイレ", back: "Toilet / Restroom", break: "To-Ire", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "としょかん", back: "Library", break: "To-Sho-Kan", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ゆうびんきょく", back: "Post Office", break: "Yu-Bin-Kyo-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "イギリス", back: "Britain", break: "I-Gi-Ri-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "かんこく", back: "Korea", break: "Ka-Nko-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ちゅうごく", back: "China", break: "Chu-U-Gu-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "えいご", back: "English (Language)", break: "Ei-Go", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "けいざい", back: "Economics", break: "Kei-Zai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "コンピューター", back: "Computer", break: "Kon-Pyu-U-Ta", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ビジネス", back: "Business", break: "Bi-Ji-Ne-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "れきし", back: "History", break: "Re-Ki-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おかあさん", back: "Mother", break: "O-Ka-A-San", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "おとうさん", back: "Father", break: "O-To-U-San", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いくら", back: "How Much", break: "I-Ku-Ra", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "〜えん", back: "...Yen", break: "En", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "たかい", back: "Expensice / High", break: "Ta-Ka-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いらっしゃいませ", back: "Welcome (To Out Store)", break: "I-Ra-Ssha-I-Ma-Se", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "(～を）おねがいします", back: "...Please", break: "O-Ne-Ga-I-Shi-Ma-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "(〜を）ください", back: "Please Give Me...", break: "Ku-Da-Sai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じゃあ", back: "Then... / if That is the Case...", break: "Ja-A", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どうぞ", back: "Please / Here it is", break: "Do-Zo", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どうも", back: "Thank You", break: "Do-Mo", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "こくばん", back: "Blackboard", break: "Ko-Ku-Ba-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "でんき", back: "Light", break: "De-Nki", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "カーテン", back: "Curtain", break: "Ka-Ten", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "つくえ", back: "Desk", break: "Tsu-Ku-E", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ほん", back: "Book", break: "Ho-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ドア", back: "Door", break: "Do-A", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "けしゴム", back: "Eraser", break: "Ke-Shi-Go-Mu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "じしょ", back: "Dictionary", break: "Ji-Sho", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "まど", back: "Window", break: "Ma-Do", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "えんぴつ", back: "Pencil", break: "En-Pi-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いす", back: "Chair", break: "I-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ペン", back: "Pen", break: "Pe-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ぼうし", back: "Hat / Cap", break: "Bo-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ほん", back: "Book", break: "Ho-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
            }
        },

        "📘 Genki I – Lesson 3 Vocabulary (かな only)": { 
            type: "folder",
            children: {
                "🏈 Entertainment / Sports": {
                    type: "deck",
                    cards: [
                        { front: "えいが", back: "Movie", break: "Ei-Ga", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "いんがく", back: "Music", break: "In-Ga-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "さっし", back: "Magazine", break: "Sa-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "スポーツ", back: "Sports", break: "Su-Po-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "デイト", back: "Date(Romantic, Not Calender)", break: "De-I-To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "テニス", back: "Tennis", break: "Te-Ni-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "テルビ", back: "Television", break: "Te-Ru-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "🍉 Foods and Drinks": {
                    type: "deck",
                    cards: [
                        { front: "アイスクリーム", back: "Ice Cream", break: "Ai-Su-Ku-Ri-Mu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "ハンバーガー", back: "Hamburger", break: "Han-Ba-Ga", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おさけ", back: "Sake / Alcoholic Drink", break: "O-Sa-Ke", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おちゃ", back: "Green Tea", break: "O-Cha", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "コーヒー", back: "Coffee", break: "Ko-Hi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "みず", back: "Water", break: "Mi-Zu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あさごはん", back: "Breakfast", break: "A-Sa-Go-Han", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ひるごはん", back: "Lunch", break: "Hi-Ru-Go-Han", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "はんごはん", back: "Dinner", break: "Han-Go-Han", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "🏡 Places": {
                    type: "deck",
                    cards: [
                        { front: "いえ", back: "Home / House", break: "I-E", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "うち", back: "Home / House / My Place", break: "U-Chi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "がっこう", back: "School", break: "Ga-Ko", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "カフェ", back: "Cafe", break: "Ka-Fe", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "⏰ Time": {
                    type: "deck",
                    cards: [
                        { front: "あした", back: "Tomorrow", break: "A-Shi-Ta", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "きゅう", back: "Today", break: "Ki-Yu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あさ", back: "Morning", break: "A-Sa", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "こんばん", back: "Tonight", break: "Kon-Ban", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "まいにち", back: "Every Day", break: "Ma-I-Ni-Chi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "まいばん", back: "Every Night", break: "Ma-I-Ban", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "しゅうまつ", back: "Weekend", break: "Shu-Ma-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どようび", back: "Saturday", break: "Do-Yo-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にちようび", back: "Sunday", break: "Ni-Chi-Yo-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いつ", back: "When", break: "I-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ごろ", back: "At About...", break: "Go-Ro", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "💬 U - Verbs": {
                    type: "deck",
                    cards: [
                        { front: "いく", back: "To Go (Destination)", break: "I-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "かえる", back: "To Go Back / To Return (Destination)", break: "Ka-E-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "きく", back: "To Listen / To Hear", break: "Ki-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "のみ", back: "To Drink", break: "No-Mu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "はなす", back: "To Speak / To Talk (Language)", break: "Ha-Na-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "よむ", back: "To Read", break: "Yo-Mu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "💬 Ru - Verbs": {
                    type: "deck",
                    cards: [
                        { front: "おきる", back: "To Get Up", break: "O-Ki-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "たべる", back: "To Eat", break: "Ta-Be-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ねる", back: "To Sleep / To go To Sleep", break: "Ne-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "みる", back: "To See / To Look At / To Watch", break: "Mi-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "💬 Irregular Verbs": {
                    type: "deck",
                    cards: [
                        { front: "きる", back: "To Come (Destination)", break: "Ki-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "する", back: "To Do", break: "Su-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "べんきょする", back: "To Study", break: "Be-N-Ki-Yo-Su-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "💬 Adjetives": {
                    type: "deck",
                    cards: [
                        { front: "いい", back: "Good", break: "I-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "はやい", back: "Early", break: "Ha-Ya-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "💬 Adverbs": {
                    type: "deck",
                    cards: [
                        { front: "あまり", back: "Not Much", break: "A-Ma-Ri", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "ぜんぜん", back: "Not At All", break: "Ze-N-Ze-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "だいてい", back: "Usually", break: "Da-I-Ta-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ちょっと", back: "A Little", break: "Cho-Tto", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ときどき", back: "Sometimes", break: "To-Ki-Do-Ki", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "よく", back: "Often / Much", break: "Yo-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "💬 Expressions": {
                    type: "deck",
                    cards: [
                        { front: "そうですね", back: "That's Right / Let Me See", break: "So-U-De-Su-Ne", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "でも", back: "But", break: "De-Mo", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どうですか", back: "How About...? / How is...?", break: "Do-U-De-Su-Ka", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ええ", back: "Yes (Conversation)", break: "E-E", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "📖 Lesson 3 Vocabulary - Full": {
                    type: "deck",
                    cards: [        
                        { front: "えいが", back: "Movie", break: "Ei-Ga", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "いんがく", back: "Music", break: "In-Ga-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "さっし", back: "Magazine", break: "Sa-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "スポーツ", back: "Sports", break: "Su-Po-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "デイト", back: "Date(Romantic, Not Calender)", break: "De-I-To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "テニス", back: "Tennis", break: "Te-Ni-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "テルビ", back: "Television", break: "Te-Ru-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "アイスクリーム", back: "Ice Cream", break: "Ai-Su-Ku-Ri-Mu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "ハンバーガー", back: "Hamburger", break: "Han-Ba-Ga", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おさけ", back: "Sake / Alcoholic Drink", break: "O-Sa-Ke", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おちゃ", back: "Green Tea", break: "O-Cha", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "コーヒー", back: "Coffee", break: "Ko-Hi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "みず", back: "Water", break: "Mi-Zu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あさごはん", back: "Breakfast", break: "A-Sa-Go-Han", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ひるごはん", back: "Lunch", break: "Hi-Ru-Go-Han", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "はんごはん", back: "Dinner", break: "Han-Go-Han", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いえ", back: "Home / House", break: "I-E", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "うち", back: "Home / House / My Place", break: "U-Chi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "がっこう", back: "School", break: "Ga-Ko", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "カフェ", back: "Cafe", break: "Ka-Fe", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あした", back: "Tomorrow", break: "A-Shi-Ta", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "きゅう", back: "Today", break: "Ki-Yu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あさ", back: "Morning", break: "A-Sa", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "こんばん", back: "Tonight", break: "Kon-Ban", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "まいにち", back: "Every Day", break: "Ma-I-Ni-Chi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "まいばん", back: "Every Night", break: "Ma-I-Ban", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "しゅうまつ", back: "Weekend", break: "Shu-Ma-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どようび", back: "Saturday", break: "Do-Yo-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にちようび", back: "Sunday", break: "Ni-Chi-Yo-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いつ", back: "When", break: "I-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ごろ", back: "At About...", break: "Go-Ro", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いく", back: "To Go (Destination)", break: "I-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "かえる", back: "To Go Back / To Return (Destination)", break: "Ka-E-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "きく", back: "To Listen / To Hear", break: "Ki-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "のみ", back: "To Drink", break: "No-Mu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "はなす", back: "To Speak / To Talk (Language)", break: "Ha-Na-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "よむ", back: "To Read", break: "Yo-Mu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おきる", back: "To Get Up", break: "O-Ki-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "たべる", back: "To Eat", break: "Ta-Be-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ねる", back: "To Sleep / To go To Sleep", break: "Ne-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "みる", back: "To See / To Look At / To Watch", break: "Mi-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "きる", back: "To Come (Destination)", break: "Ki-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "する", back: "To Do", break: "Su-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "べんきょする", back: "To Study", break: "Be-N-Ki-Yo-Su-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いい", back: "Good", break: "I-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "はやい", back: "Early", break: "Ha-Ya-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あまり", back: "Not Much", break: "A-Ma-Ri", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "ぜんぜん", back: "Not At All", break: "Ze-N-Ze-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "だいてい", back: "Usually", break: "Da-I-Ta-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ちょっと", back: "A Little", break: "Cho-Tto", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ときどき", back: "Sometimes", break: "To-Ki-Do-Ki", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "よく", back: "Often / Much", break: "Yo-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "そうですね", back: "That's Right / Let Me See", break: "So-U-De-Su-Ne", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "でも", back: "But", break: "De-Mo", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どうですか", back: "How About...? / How is...?", break: "Do-U-De-Su-Ka", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ええ", back: "Yes (Conversation)", break: "E-E", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
            }
        },

        "📘 Genki I – Lesson 4 Vocabulary (かな only)": { 
            type: "folder",
            children: {
                "🏈 Activities": {
                    type: "deck",
                    cards: [
                        { front: "ゲーム", back: "Game", break: "Ge-E-Mu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "アルバイト", back: "Part-Time Job (More Colloquially)", break: "A-Ru-Bai-To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かいもの", back: "Shopping", break: "Ka-I-Mo-No", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "クラス", back: "Class", break: "Ku-Ra-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "👨 Peaople and Things": {
                    type: "deck",
                    cards: [
                        { front: "いぬ", back: "Dog", break: "I-Nu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "ねこ", back: "Cat", break: "Ne-Ko", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ひと", back: "Person", break: "Hi-To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "こども", back: "Child", break: "Ko-Do-Mo", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あなた", back: "You", break: "A-Na-Ta", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "つくえ", back: "Desk", break: "Tsu-Ku-E", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "しゃしん", back: "Picture / Photograph", break: "Sha-Shin", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "はな", back: "Flower", break: "Ha-Na", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "レポっと", back: "(Term) Paper", break: "Re-Po-Tto", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ごはん", back: "Rice / Meal", break: "Go-Han", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "パん", back: "Bread", break: "Pa-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "🏠 Places": {
                    type: "deck",
                    cards: [
                        { front: "おてら", back: "Temple", break: "O-Te-Ra", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "こうえん", back: "Park", break: "Ko-U-E-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "スーパー", back: "Supermarket", break: "Su-E-Pa", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "バスてい", back: "Bus Stop", break: "Ba-Su-Te-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "びょういん", back: "Hospital", break: "Bi-Yo-U-In", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ホテル", back: "Hotel", break: "Ho-Te-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ほんや", back: "Bookstore", break: "Ho-Nya", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "まち", back: "Town / City", break: "Ma-Chi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "レストラン", back: "Restaurant", break: "Re-Su-Ta-Ran", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "⌛ Time": {
                    type: "deck",
                    cards: [
                        { front: "きのう", back: "Yesterday", break: "Ki-No-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "…じかん", back: "...Hours", break: "...Ji-Kan", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いちじかん", back: "One Hour", break: "Ichi-Ji-Kan", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "せんしょう", back: "Last Week", break: "Sen-Shou", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "とき", back: "When... / At The Time Of...", break: "To-Ki", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "げつようび", back: "Monday", break: "Ge-Tu-Yo-U-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かようび ", back: "Tuesday", break: "Ka-Yo-U-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "すいようび", back: "Wednesday", break: "Su-I-Yo-U-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "もくようび ", back: "Thursday", break: "Mo-Ku-Yo-U-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "きんようび", back: "Friday", break: "Ki-N-Yo-U-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "💬 U - Verbs": {
                    type: "deck",
                    cards: [
                        { front: "おう", back: "To Meet / To See (A Person)", break: "O-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "ある", back: "There Is... (Place, Thing)", break: "A-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かう", back: "To Buy", break: "Ka-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かく", back: "To Write (Person, Thing)", break: "Ka-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "とる", back: "To Take (A Picture)", break: "To-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "まつ", back: "To Wait", break: "Ma-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "わかる", back: "To Understand", break: "Wa-Ka-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "💬 Ru - Verbs": {
                    type: "deck",
                    cards: [
                        { front: "いる", back: "(A Person) Is In... / Stays At...", break: "I-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() }
                    ]
                },
                "💬 Adverbs and Other Expressions": {
                    type: "deck",
                    cards: [
                        { front: "…くらい", back: "About (Approximate Measurement)", break: "...Ku-Rai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "ごめんなさい", back: "I'm Sorry", break: "Go-Men-Na-Sai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "それから", back: "And Then", break: "So-Re-Ka-Ra", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "だから", back: "So / Therefore", break: "Da-Ka-Ra", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "たくさん", back: "Many / A Lot", break: "Ta-Ku-San", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "…と", back: "Together With (A Person) / And", break: "...To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どうして", back: "Why", break: "Do-U-Shite", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ひとりで", back: "Alone", break: "Hi-To-Ri-De", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "もしもし", back: "Hello? (Used On The Phone)", break: "Mo-Shi-Mo-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "📍 Location Words": {
                    type: "deck",
                    cards: [
                        { front: "みぎ", back: "Right", break: "Mi-Gi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "ひだり", back: "Left", break: "Hi-Da-Ri", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "まえ", back: "Front", break: "Ma-E", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "うしろ", back: "Back", break: "U-Shi-Ro", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "なか", back: "Inside", break: "Na-Ka", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "うえ", back: "On", break: "U-E", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "した", back: "Under", break: "Shi-Ta", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ちかく", back: "Near / Nearby", break: "Chi-Ka-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "となり", back: "Next", break: "To-Na-Ri", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あいだ", back: "Between", break: "Ai-De", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "📖 Lesson 4 Vocabulary - Full": {
                    type: "deck",
                    cards: [        
                        { front: "ゲーム", back: "Game", break: "Ge-E-Mu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "アルバイト", back: "Part-Time Job (More Colloquially)", break: "A-Ru-Bai-To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かいもの", back: "Shopping", break: "Ka-I-Mo-No", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "クラス", back: "Class", break: "Ku-Ra-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いぬ", back: "Dog", break: "I-Nu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "ねこ", back: "Cat", break: "Ne-Ko", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ひと", back: "Person", break: "Hi-To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "こども", back: "Child", break: "Ko-Do-Mo", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あなた", back: "You", break: "A-Na-Ta", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "つくえ", back: "Desk", break: "Tsu-Ku-E", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "しゃしん", back: "Picture / Photograph", break: "Sha-Shin", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "はな", back: "Flower", break: "Ha-Na", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "レポっと", back: "(Term) Paper", break: "Re-Po-Tto", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ごはん", back: "Rice / Meal", break: "Go-Han", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "パん", back: "Bread", break: "Pa-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おてら", back: "Temple", break: "O-Te-Ra", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "こうえん", back: "Park", break: "Ko-U-E-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "スーパー", back: "Supermarket", break: "Su-E-Pa", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "バスてい", back: "Bus Stop", break: "Ba-Su-Te-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "びょういん", back: "Hospital", break: "Bi-Yo-U-In", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ホテル", back: "Hotel", break: "Ho-Te-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ほんや", back: "Bookstore", break: "Ho-Nya", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "まち", back: "Town / City", break: "Ma-Chi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "レストラン", back: "Restaurant", break: "Re-Su-Ta-Ran", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "きのう", back: "Yesterday", break: "Ki-No-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "…じかん", back: "...Hours", break: "...Ji-Kan", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いちじかん", back: "One Hour", break: "Ichi-Ji-Kan", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "せんしょう", back: "Last Week", break: "Sen-Shou", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "とき", back: "When... / At The Time Of...", break: "To-Ki", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "げつようび", back: "Monday", break: "Ge-Tu-Yo-U-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かようび ", back: "Tuesday", break: "Ka-Yo-U-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "すいようび", back: "Wednesday", break: "Su-I-Yo-U-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "もくようび ", back: "Thursday", break: "Mo-Ku-Yo-U-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "きんようび", back: "Friday", break: "Ki-N-Yo-U-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おう", back: "To Meet / To See (A Person)", break: "O-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "ある", back: "There Is... (Place, Thing)", break: "A-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かう", back: "To Buy", break: "Ka-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かく", back: "To Write (Person, Thing)", break: "Ka-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "とる", back: "To Take (A Picture)", break: "To-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "まつ", back: "To Wait", break: "Ma-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "わかる", back: "To Understand", break: "Wa-Ka-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いる", back: "(A Person) Is In... / Stays At...", break: "I-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "…くらい", back: "About (Approximate Measurement)", break: "...Ku-Rai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "ごめんなさい", back: "I'm Sorry", break: "Go-Men-Na-Sai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "それから", back: "And Then", break: "So-Re-Ka-Ra", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "だから", back: "So / Therefore", break: "Da-Ka-Ra", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "たくさん", back: "Many / A Lot", break: "Ta-Ku-San", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "…と", back: "Together With (A Person) / And", break: "...To", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どうして", back: "Why", break: "Do-U-Shite", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ひとりで", back: "Alone", break: "Hi-To-Ri-De", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "もしもし", back: "Hello? (Used On The Phone)", break: "Mo-Shi-Mo-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "みぎ", back: "Right", break: "Mi-Gi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "ひだり", back: "Left", break: "Hi-Da-Ri", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "まえ", back: "Front", break: "Ma-E", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "うしろ", back: "Back", break: "U-Shi-Ro", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "なか", back: "Inside", break: "Na-Ka", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "うえ", back: "On", break: "U-E", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "した", back: "Under", break: "Shi-Ta", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ちかく", back: "Near / Nearby", break: "Chi-Ka-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "となり", back: "Next", break: "To-Na-Ri", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あいだ", back: "Between", break: "Ai-De", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
            }
        },

        "📘 Genki I – Lesson 5 Vocabulary (かな only)": { 
            type: "folder",
            children: {
                "✏️ Nouns": {
                    type: "deck",
                    cards: [
                        { front: "たべもの", back: "Food", break: "Ta-Be-Mo-No", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "のみもの", back: "Drink", break: "No-Mi-Mo-No", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "くだもの", back: "Fruit", break: "Ku-Da-Mo-No", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "やすみ", back: "Holiday / Day Off / Absence", break: "Ya-Su-Mi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "りょこう", back: "Travel", break: "Ri-Yo-Kou", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "うみ", back: "Sea", break: "U-Mi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "セーフティン", back: "Surfing", break: "Se-A-Fu-Ti-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おみやげ", back: "Souvenir", break: "Om-I-Ya-Ge", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "バス", back: "Bus", break: "Ba-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "でんき", back: "Weather", break: "De-Nki", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "しゅかだい", back: "Homework", break: "Shi-Yu-Ka-Dai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "テスト", back: "Test", break: "Te-Stu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "たんじょうび", back: "Birthday", break: "Tan-Jyo-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "へや", back: "Room", break: "He-Ya", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ぼく", back: "I (Used By Men)", break: "Bo-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "Lイルセイズ", back: "Size (L)", break: "L-I-Ru-Sei-Zu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "📝 い - Adjectives": {
                    type: "deck",
                    cards: [
                        { front: "おたらしい", back: "New", break: "O-Ta-Ra-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "ふるい", back: "Old (Thing - Not Used For People)", break: "Fu-Ru-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あつい", back: "Hot (Weather)", break: "A-Tsu-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "さむい", back: "Cold (Weather - Not Used For Things)", break: "Sa-Mu-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あつい", back: "Hot (Thing)", break: "A-Tsu-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いそがしい", back: "Busy (People / Days)", break: "I-So-Ga-Shi-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おおきい", back: "Large", break: "O-O-Ki-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ちいさい", back: "Small", break: "Chi-I-Sai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おもしろい", back: "Interesting / Funny", break: "O-Mo-Shi-Ro-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "つまらない", back: "Boring", break: "Tsu-Ma-Ra-Na-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "やさしい", back: "Easy (Problem) / Kind (Person)", break: "Ya-Sa-Shi-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "むずかしい", back: "Difficult", break: "Mu-Zu-Ka-Shi-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かっこいい", back: "Good-Looking (Conjugates Like いい)", break: "Ka-Kkoi-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "こわい", back: "Frightening", break: "Ko-Wa-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "たのしい", back: "Fun", break: "Ta-No-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "やすい", back: "Inexpensive / Cheap (Thing)", break: "Ya-Su-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "📝 な - Adjectives": {
                    type: "deck",
                    cards: [
                        { front: "すき", back: "Fond Of / To Like", break: "Su-Ki", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "きらい", back: "Disgusted With / To Dislike", break: "Ki-Ra-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "だいすき", back: "Very Fond Of / To Love", break: "Da-I-Su-Ki", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "だいきらい", back: "To Hate", break: "Da-I-Ki-Ra-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "きれい", back: "Beautiful / Clean", break: "Ki-Re-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "げんき", back: "Healthy / Energetic", break: "Ge-N-Ki", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "しずか", back: "Quiet", break: "Shi-Zu-Ka", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にぎやか", back: "Lively", break: "Ni-Gi-Ya-Ka", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ひま", back: "Not Busy / Free (Time)", break: "Hi-Ma", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "💬 U - Verbs": {
                    type: "deck",
                    cards: [
                        { front: "およぐ", back: "To Swim", break: "O-Yo-Gu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "きく", back: "To Ask (Person)", break: "Ki-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "のる", back: "To Ride / To Board", break: "No-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "やる", back: "To Do / To Perform", break: "Ya-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "💬 Ru - Verbs": {
                    type: "deck",
                    cards: [
                        { front: "でかける", back: "To Go Out", break: "De-Ka-Ke-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() }
                    ]
                },
                "💬 Adverbs and Other Expressions": {
                    type: "deck",
                    cards: [
                        { front: "いっしょに", back: "Together", break: "I-Sho-Ni", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "すごい", back: "Extremely", break: "Su-Goi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "だいじょうぶ", back: "It's Okay / Not To Worry / Everything is Under Control", break: "Da-I-Jo-U-Bu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "とても", back: "Very", break: "To-Te-Mo", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どんな", back: "What Kind Of...", break: "Do-N-Na", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "…まい", back: "[Counter For Flat Objects]", break: "...Ma-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "📖 Lesson 5 Vocabulary - Full": {
                    type: "deck",
                    cards: [        
                        { front: "たべもの", back: "Food", break: "Ta-Be-Mo-No", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "のみもの", back: "Drink", break: "No-Mi-Mo-No", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "くだもの", back: "Fruit", break: "Ku-Da-Mo-No", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "やすみ", back: "Holiday / Day Off / Absence", break: "Ya-Su-Mi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "りょこう", back: "Travel", break: "Ri-Yo-Kou", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "うみ", back: "Sea", break: "U-Mi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "セーフティン", back: "Surfing", break: "Se-A-Fu-Ti-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おみやげ", back: "Souvenir", break: "Om-I-Ya-Ge", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "バス", back: "Bus", break: "Ba-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "でんき", back: "Weather", break: "De-Nki", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "しゅかだい", back: "Homework", break: "Shi-Yu-Ka-Dai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "テスト", back: "Test", break: "Te-Stu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "たんじょうび", back: "Birthday", break: "Tan-Jyo-Bi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "へや", back: "Room", break: "He-Ya", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ぼく", back: "I (Used By Men)", break: "Bo-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "Lイルセイズ", back: "Size (L)", break: "L-I-Ru-Sei-Zu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おたらしい", back: "New", break: "O-Ta-Ra-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "ふるい", back: "Old (Thing - Not Used For People)", break: "Fu-Ru-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あつい", back: "Hot (Weather)", break: "A-Tsu-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "さむい", back: "Cold (Weather - Not Used For Things)", break: "Sa-Mu-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あつい", back: "Hot (Thing)", break: "A-Tsu-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "いそがしい", back: "Busy (People / Days)", break: "I-So-Ga-Shi-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おおきい", back: "Large", break: "O-O-Ki-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ちいさい", back: "Small", break: "Chi-I-Sai", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おもしろい", back: "Interesting / Funny", break: "O-Mo-Shi-Ro-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "つまらない", back: "Boring", break: "Tsu-Ma-Ra-Na-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "やさしい", back: "Easy (Problem) / Kind (Person)", break: "Ya-Sa-Shi-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "むずかしい", back: "Difficult", break: "Mu-Zu-Ka-Shi-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かっこいい", back: "Good-Looking (Conjugates Like いい)", break: "Ka-Kkoi-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "こわい", back: "Frightening", break: "Ko-Wa-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "たのしい", back: "Fun", break: "Ta-No-Shi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "やすい", back: "Inexpensive / Cheap (Thing)", break: "Ya-Su-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "すき", back: "Fond Of / To Like", break: "Su-Ki", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "きらい", back: "Disgusted With / To Dislike", break: "Ki-Ra-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "だいすき", back: "Very Fond Of / To Love", break: "Da-I-Su-Ki", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "だいきらい", back: "To Hate", break: "Da-I-Ki-Ra-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "きれい", back: "Beautiful / Clean", break: "Ki-Re-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "げんき", back: "Healthy / Energetic", break: "Ge-N-Ki", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "しずか", back: "Quiet", break: "Shi-Zu-Ka", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にぎやか", back: "Lively", break: "Ni-Gi-Ya-Ka", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ひま", back: "Not Busy / Free (Time)", break: "Hi-Ma", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "およぐ", back: "To Swim", break: "O-Yo-Gu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "きく", back: "To Ask (Person)", break: "Ki-Ku", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "のる", back: "To Ride / To Board", break: "No-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "やる", back: "To Do / To Perform", break: "Ya-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "でかける", back: "To Go Out", break: "De-Ka-Ke-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "いっしょに", back: "Together", break: "I-Sho-Ni", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "すごい", back: "Extremely", break: "Su-Goi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "だいじょうぶ", back: "It's Okay / Not To Worry / Everything is Under Control", break: "Da-I-Jo-U-Bu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "とても", back: "Very", break: "To-Te-Mo", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "どんな", back: "What Kind Of...", break: "Do-N-Na", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "…まい", back: "[Counter For Flat Objects]", break: "...Ma-I", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
            }
        },

        "📘 Genki I – Lesson 6 Vocabulary (かな only)": { 
            type: "folder",
            children: {
                "✏️ Nouns": {
                    type: "deck",
                    cards: [
                        { front: "かんじ", back: "Kanji / Chinese Characters", break: "Ka-N-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "きょうかしょ", back: "Textbook", break: "Ki-Yo-U-Ka-Sho", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ページ", back: "Page", break: "Pe-A-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "つぎ", back: "Next", break: "Tsu-Gi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おかね", back: "Money", break: "O-Ka-Ne", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にもつ", back: "Baggage", break: "Ni-Mo-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "パソコン", back: "Personal Computer", break: "Pa-So-Kon", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "シャフー", back: "Shower", break: "Sha-Fu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "エアコン", back: "Air Conditioner", break: "E-A-Kon", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "でんき", back: "Electricity / Light", break: "De-N-Ki", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "まど", back: "Window", break: "Ma-Dou", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "でんしゃ", back: "Train", break: "De-N-Sha", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "くに", back: "Country / Place of Origin", break: "Ku-Ni", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "こんしゅう", back: "This Week", break: "Kon-Shu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "らいしゅう", back: "Next Week", break: "Ra-I-Shu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "らいねん", back: "Next Year", break: "Ra-I-Ne-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "よる", back: "Night", break: "Yo-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "📝 な - Adjective": {
                    type: "deck",
                    cards: [
                        { front: "たいへん", back: "Tough (Situation)", break: "Ta-I-He-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() }
                    ]
                },
                "💬 U-Verbs": {
                    type: "deck",
                    cards: [
                        { front: "あそぶ", back: "To Play / To Spend Time Pleasantly", break: "A-So-Bu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "いそぐ", back: "To Hurry", break: "I-So-Gu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かえす", back: "To Return (A Thing)", break: "Ka-E-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "けす", back: "To Turn Off / To Erase", break: "Ke-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "しぬ", back: "To Die", break: "Shi-Nu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "すわる", back: "To Sit Down (Seat)", break: "Su-Wa-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "たつ", back: "To Stand Up", break: "Ta-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "たばこをすう", back: "To Smoke", break: "Ta-Ba-Ko-O-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "つかう", back: "To Use", break: "Tsu-Ka-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "てつだう", back: "To Help (Person / Task)", break: "Te-Tsu-Da-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "はいる", back: "To Enter", break: "Ha-I-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "もつ", back: "To Carry / To Hold", break: "Mo-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "やすむ", back: "To Be Absent (From...) / To Rest", break: "Ya-Su-Mu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "💬 Ru-Verbs": {
                    type: "deck",
                    cards: [
                        { front: "あける", back: "To Open (Something)", break: "A-Ke-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "しめる", back: "To Close (Something)", break: "Shi-Me-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おしえる", back: "To Teach / To Instruct (Person Thing)", break: "O-Shi-E-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "わすれる", back: "To Forget / To Leave Behind", break: "Wa-Su-Re-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おりる", back: "To Get Off", break: "O-Ri-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かりる", back: "To Borrow", break: "Ka-Ri-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "シャワーをあびる", back: "To Take A Shower", break: "Sha-Wa-A-Bi-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "つける", back: "To Turn On", break: "Tsu-Ke-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "💬 Irregular Verbs": {
                    type: "deck",
                    cards: [
                        { front: "でんわする", back: "To Call", break: "De-N-Wa-Su-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "つれてくる", back: "To Bring (A Person)", break: "Tsu-Re-Te-Ku-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "もってくる", back: "To Bring (A Thing)", break: "Mo-Tte-Ku-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "💬 Adverbs and Other Expressions": {
                    type: "deck",
                    cards: [
                        { front: "あとで", back: "Later On", break: "A-To-De", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "すぐ", back: "Right Away", break: "Su-Gu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ゆっくり", back: "Slowly / Leisurely / Unhurriedly", break: "Yu-Kku-Ri", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "けっこうです", back: "That Would Be Fine / That Wouldn't Be Necessary", break: "Ke-Kko-U-De-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ほんとうですか", back: "Really?", break: "Ho-N-Tou-De-Su-Ka", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
                "📖 Lesson 6 Vocabulary - Full": {
                    type: "deck",
                    cards: [        
                        { front: "かんじ", back: "Kanji / Chinese Characters", break: "Ka-N-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "きょうかしょ", back: "Textbook", break: "Ki-Yo-U-Ka-Sho", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ページ", back: "Page", break: "Pe-A-Ji", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "つぎ", back: "Next", break: "Tsu-Gi", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おかね", back: "Money", break: "O-Ka-Ne", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "にもつ", back: "Baggage", break: "Ni-Mo-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "パソコン", back: "Personal Computer", break: "Pa-So-Kon", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "シャフー", back: "Shower", break: "Sha-Fu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "エアコン", back: "Air Conditioner", break: "E-A-Kon", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "でんき", back: "Electricity / Light", break: "De-N-Ki", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "まど", back: "Window", break: "Ma-Dou", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "でんしゃ", back: "Train", break: "De-N-Sha", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "くに", back: "Country / Place of Origin", break: "Ku-Ni", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "こんしゅう", back: "This Week", break: "Kon-Shu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "らいしゅう", back: "Next Week", break: "Ra-I-Shu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "らいねん", back: "Next Year", break: "Ra-I-Ne-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "よる", back: "Night", break: "Yo-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "たいへん", back: "Tough (Situation)", break: "Ta-I-He-N", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "あそぶ", back: "To Play / To Spend Time Pleasantly", break: "A-So-Bu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "いそぐ", back: "To Hurry", break: "I-So-Gu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かえす", back: "To Return (A Thing)", break: "Ka-E-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "けす", back: "To Turn Off / To Erase", break: "Ke-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "しぬ", back: "To Die", break: "Shi-Nu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "すわる", back: "To Sit Down (Seat)", break: "Su-Wa-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "たつ", back: "To Stand Up", break: "Ta-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "たばこをすう", back: "To Smoke", break: "Ta-Ba-Ko-O-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "つかう", back: "To Use", break: "Tsu-Ka-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "てつだう", back: "To Help (Person / Task)", break: "Te-Tsu-Da-U", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "はいる", back: "To Enter", break: "Ha-I-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "もつ", back: "To Carry / To Hold", break: "Mo-Tsu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "やすむ", back: "To Be Absent (From...) / To Rest", break: "Ya-Su-Mu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あける", back: "To Open (Something)", break: "A-Ke-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "しめる", back: "To Close (Something)", break: "Shi-Me-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おしえる", back: "To Teach / To Instruct (Person Thing)", break: "O-Shi-E-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "わすれる", back: "To Forget / To Leave Behind", break: "Wa-Su-Re-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "おりる", back: "To Get Off", break: "O-Ri-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "かりる", back: "To Borrow", break: "Ka-Ri-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "シャワーをあびる", back: "To Take A Shower", break: "Sha-Wa-A-Bi-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "つける", back: "To Turn On", break: "Tsu-Ke-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "でんわする", back: "To Call", break: "De-N-Wa-Su-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "つれてくる", back: "To Bring (A Person)", break: "Tsu-Re-Te-Ku-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "もってくる", back: "To Bring (A Thing)", break: "Mo-Tte-Ku-Ru", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "あとで", back: "Later On", break: "A-To-De", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now() },
                        { front: "すぐ", back: "Right Away", break: "Su-Gu", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ゆっくり", back: "Slowly / Leisurely / Unhurriedly", break: "Yu-Kku-Ri", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "けっこうです", back: "That Would Be Fine / That Wouldn't Be Necessary", break: "Ke-Kko-U-De-Su", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  },
                        { front: "ほんとうですか", back: "Really?", break: "Ho-N-Tou-De-Su-Ka", interval: 0, repetitions: 0, easeFactor: 2.5, due: Date.now()  }
                    ]
                },
            }
        },
    }
};

// Index
const container = document.getElementById("indexList");
