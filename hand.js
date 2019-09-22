class Hand {
    constructor() {
        this.cards = [];
    }
    takeCardInHand(card) {
        try {
            if (this.cards.length < 5) {
                this.cards.push(card);
            } else {
                throw new Error("В руке уже 5 карт. Больше взять нельзя.");
            }
        } catch(e) {
            console.log(`${e.message}`);
        }
    }
    showCards() {
        console.log("В руке следующие карты:");
        for (let i = 0; i < this.cards.length; i++) {
            let card = JSON.stringify(this.cards[i]);
            console.log(`${i + 1}-я карта: ${card}`);
        }
    }
    replaceCard(number) {
        try {
            if (number >= 1 && number <= this.cards.length) {
                this.cards[--number] = myDeck.drawCardFromDeckOnTop();
            } else {
                throw new Error("В руке нет карты с таким номером.");
            }
        } catch(e) {
            console.log(`${e.message}`);
        }
    }
}