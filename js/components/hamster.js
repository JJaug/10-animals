import { Pet } from './pet.js';

class Hamster extends Pet {
    constructor(name, color) {
        super(name,color);
        this.sound = 'NomNom🐹';
        this.canEatTillDeath = true;
    }
}

export { Hamster }