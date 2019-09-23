class Application {
    static doGame() {
        const Card = require('./card.js');
        const Deck = require('./deck.js');
        const Hand = require('./hand.js');
        const Checker = require('./checker.js');
        const numberOfGivenCards = 5;
        let myDeck = new Deck();
        let myHand = new Hand();
        myDeck.shuffle();
        for (let i = 0; i < numberOfGivenCards; i++) {
            let card = new Card(myDeck.drawCardFromDeckOnTop());
            myHand.takeCardInHand(card);
        }
        myHand.showCards();
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`Какие карты заменить?`, (answer) => {
            let userChoices = answer.split(/[ ,]+/);
            for (let i = 0; i < userChoices.length; i++) {
                myHand.replaceCard(userChoices[i], myDeck);
            }
            let cardsToCheck = myHand.showCards();
            Checker.check(cardsToCheck);
            readline.close();
        });

        const readline2 = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline2.question(`Сыграем еще раз (да/нет)?`, (answer) => {
            if (answer === "да") {
                Application.doGame();
            }
            readline2.close();
        });

    }
}
Application.doGame();