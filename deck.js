class Deck {
    constructor() {
        const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        const SUITS = ["\u2660", "\u2665", "\u2666", "\u2663"];
        this.deck = [];
        for (let i = 0; i < RANKS.length; i++) {
            for (let j = 0; j < SUITS.length; j++) {
                let card = {};
                card.rank = RANKS[i];
                card.suit = SUITS[j];
                this.deck.push(card);
            }
        }
    }
    _getRandomIndexFromArray(arr) {
        let max = arr.length;
        let min = 0;
        return Math.floor(Math.random() * (max - min)) + min;
    }
    _getRandomCardFromDeck(deck) {
        let index = this._getRandomIndexFromArray(deck);
        return deck.splice(index, 1)[0];
    }
    shuffle() {
        let newDeck = [];
        while (this.deck.length > 0) {
            let randomCard = this._getRandomCardFromDeck(this.deck);
            newDeck.push(randomCard);
        }
        this.deck = [...newDeck];
    }
    drawCardFromDeckOnTop() {
        return this.deck.shift();
    }
}

module.exports = Deck;