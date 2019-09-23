const Card = require('./card.js');
const Deck = require('./deck.js');
const Hand = require('./hand.js');
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
    readline.close();
    for (let i = 0; i < userChoices.length; i++) {
        myHand.replaceCard(userChoices[i]);
    }
    myHand.showCards();
});

class Application {

}