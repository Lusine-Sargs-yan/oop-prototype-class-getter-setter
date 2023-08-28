class IceCream {
    static sweetnessValueOfFlavors = {
        Plain: 0,
        Vanilla: 5,
        ChocolateChip: 5,
        Strawberry: 10,
        Chocolate: 10,
    }

    constructor(flavor, numSprinkles) {
        this.flavor = flavor;
        this.numSprinkles = numSprinkles;
    }

    get flavor() {
        return this._flavor;
    }

    set flavor(value) {
        if (typeof value !== 'string') throw TypeError('Please, enter correct type, it should be letters.');
        this._flavor = value;
    }

    get numSprinkles() {
        return this._numSprinkles;
    }

    set numSprinkles(value) {
        if (typeof value !== 'number') throw TypeError('Please, enter correct type, it should be a number');
        this._numSprinkles = value;
    }

    valueOf() {
        let sweetness = 0;
        for (let key in IceCream.sweetnessValueOfFlavors) {
            if (key === this.flavor) {
                sweetness = this.numSprinkles + IceCream.sweetnessValueOfFlavors[key];
            }
        }

        return sweetness;
    }
}

const ice1 = new IceCream("Chocolate", 13);
const ice2 = new IceCream("Vanilla", 0);
const ice3 = new IceCream("Strawberry", 7);
const ice4 = new IceCream("Plain", 18);
const ice5 = new IceCream("ChocolateChip", 3);
console.log(ice1);
console.log(ice1.valueOf());
console.log(ice2.valueOf());


const sweetestIceCream = (arr) => {
    return Math.max(...arr.valueOf());
};
console.log(sweetestIceCream([ice1, ice2, ice3, ice4, ice5]));
console.log(sweetestIceCream([ice3, ice1]));
console.log(sweetestIceCream([ice3, ice5]));

