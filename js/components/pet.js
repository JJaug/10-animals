import { Animals } from './animals.js';


class Pet extends Animals{
    constructor(name, color) {
        super(name,color);
        this.breed = 'Unknown animal';
        this.environment = 'land';
        this.sound = 'Miau au nom!';
    }

    introduce() {
        console.log(`Hi, I am ${this.name} and my fur is ${this.color} color and I say ${this.sound}`);
    }
}

export { Pet }