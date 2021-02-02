import { Pet } from './pet.js';

class Dog extends Pet {
    constructor(name, color) {
        super(name,color);
        this.sound = 'AuAu!';
    }
}

export { Dog }