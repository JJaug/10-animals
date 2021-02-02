import { Fish } from './fish.js';

class Nemo extends Fish {
    constructor(name,color) {
        super(name,color);
        this.breed = 'small fish';
        this.sound = 'Bul bul🐟';
    }

}

export { Nemo }