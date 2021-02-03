import { Fish } from './fish.js';

class Goldfish extends Fish {
    constructor(name,color,grantsWish) {
        super(name,color);
        this.breed = 'Goldfish';
        this.sound = 'Bul bul🐠';
        this.grantsWish = grantsWish ?? false;
    }

    makeWish(wish) {
        if(!this.grantsWish) {
            console.log(`${this.breed} ${this.name} doesnt grant wishes`);
        } else
        console.log(`${this.breed} ${this.name} grants your wish ${wish}`);
    }
}

export { Goldfish }