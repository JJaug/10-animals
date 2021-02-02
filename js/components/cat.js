import { Pet } from './pet.js';

class Cat extends Pet {
    constructor(name, color) {
        super(name,color);
        this.sound = 'MiauMiau!🐱🐱';
    }
}

export { Cat }