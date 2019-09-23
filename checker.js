class Checker {
    static check(cardsInHand) {
        this.checker = {};
        let allSuits = ["peaks", "hearts", "bubis", "crosses"];
        const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let arr = allSuits.concat(RANKS);
        for (let item of arr) {
            this.checker[item] = 0;
        }
        this.getCardsPerSuit(cardsInHand);
        this.getCardsPerRank(cardsInHand);

        if (this.getNumberOfCardsForGivenSuit(5)) {
            console.log("Флеш. 6 очков.");
        }
        if (this.getNumberOfCardsForGivenRank(2) == 3) {
            console.log("Тройка. 4 очка.");
        } else if (this.getNumberOfCardsForGivenRank(2) == 2) {
            console.log("Две пары. 3 очка.");
        } else if (this.getNumberOfCardsForGivenRank(2) == 1) {
            console.log("Пара. 2 очка.");
        }
    }

    static getCardsPerSuit(cardsInHand) {
        for (let i = 0; i < cardsInHand.length; i++) {
            switch (cardsInHand[i].suit) {
                case "\u2660":
                    this.checker.peaks++;
                    break;
                case "\u2665":
                    this.checker.hearts++;
                    break;
                case "\u2666":
                    this.checker.bubis++;
                    break;
                case "\u2663":
                    this.checker.crosses++;
                    break;
                default:
                    console.log("Ошибка в масти карты в руке!");
            }

        }
        return this.checker;
    }

    static getCardsPerRank(cardsInHand) {
        for (let i = 0; i < cardsInHand.length; i++) {
            let rank = cardsInHand[i].rank;
            this.checker[rank]++;
        }
        return this.checker;
    }

    static getNumberOfCardsForGivenSuit(number) {
        let allSuits = ["peaks", "hearts", "bubis", "crosses"];
        for (let key of allSuits) {
            if (this.checker[key] === number) {
                return true;
            }
        }
        return false;
    }

    static getNumberOfCardsForGivenRank(number) {
        let count = 0;
        const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        for (let key of RANKS) {
            if (this.checker[key] === number) {
                count++;
            }
        }
        return count;
    }
}
module.exports = Checker;