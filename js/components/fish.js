import { Animals } from './animals.js';


class Fish extends Animals {
    constructor(name,color) {
        super (name,color);
        this.breed = 'Fish';
        this.environment = 'water';
        this.sound = 'Bul bul🐠🐟';
    }
    introduce() {
        console.log(`Hi, I am ${this.name} and my scales are ${this.color} color and I say ${this.sound}`);
    }
}

export { Fish }