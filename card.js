class Card {
    constructor(obj) {
        const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        const SUITS = ["\u2660", "\u2665", "\u2666", "\u2663"];
        try {
            let isRankCorrect = RANKS.includes(obj.rank);
            let isSuitCorrect = SUITS.includes(obj.suit);
            if (!isRankCorrect && !isSuitCorrect) {
                throw new Error("Карты с таким значением и такой мастью не существует!");
            } else if (!isRankCorrect) {
                throw new Error("Карты с таким значением не существует!");
            } else if (!isSuitCorrect) {
                throw new Error("Такой масти не существует!");
            } else {
                this.rank = obj.rank;
                this.suit = obj.suit;
                switch (this.rank) {
                    case "J":
                        this.value = 11;
                        break;
                    case "Q":
                        this.value = 12;
                        break;
                    case "K":
                        this.value = 13;
                        break;
                    case "A":
                        this.value = 14;
                        break;
                    default:
                        this.value = parseInt(this.rank);
                }
            }
        } catch (e) {
            console.log(`${e.message}`);
        }
    }
    showCard() {
        try {
            if (typeof this.rank !== "undefined" && typeof this.suit !== "undefined" ) {
                console.log(`${this.rank}${this.suit}${this.value}`);
            } else {
                throw new Error("Невозможно показать карту.")
            }
        } catch (e) {
            console.log(`Извините, с картой проблема. ${e.message}`);
        }
    }
}

module.exports = Card;