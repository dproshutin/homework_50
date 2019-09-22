class Card {
    constructor(rank, suit) {
        const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        const SUITS = ["\u2660", "\u2665", "\u2666", "\u2663"];
        try {
            let isRankCorrect = RANKS.includes(rank);
            let isSuitCorrect = SUITS.includes(suit);
            if (!isRankCorrect && !isSuitCorrect) {
                throw new Error("Карты с таким значением и такой мастью не существует!");
            } else if (!isRankCorrect) {
                throw new Error("Карты с таким значением не существует!");
            } else if (!isSuitCorrect) {
                throw new Error("Такой масти не существует!");
            } else {
                this.rank = rank;
                this.suit = suit;
            }
        } catch (e) {
            console.log(`${e.message}`);
        }
    }
    showCard() {
        try {
            if (typeof this.rank !== "undefined" && typeof this.suit !== "undefined" ) {
                console.log(`${this.rank}${this.suit}`);
            } else {
                throw new Error("Невозможно показать карту.")
            }
        } catch (e) {
            console.log(`Извините, с картой проблема. ${e.message}`);
        }
    }
}

let myCard = new Card("3", "\u2660");
myCard.showCard();

let badRankCard = new Card("R", "\u2660");
badRankCard.showCard();

let badSuitCard = new Card("10", "\u2689");
badSuitCard.showCard();

let badRankAndSuitCard = new Card("B", "\u2789");
badRankAndSuitCard.showCard();