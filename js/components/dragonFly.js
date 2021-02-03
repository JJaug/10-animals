import { Birds } from './birds.js';

class DragonFly extends Birds {
    constructor(name, color, canFly) {
        super(name,color);
        this.environment = 'Forest';
        this.breed = 'Bird';
        this.sound = 'bzzzzz🐲';
        this.canFly = canFly ?? false;
        this.wingsCount = 4;
        this.imposter = true;
    }
}

export { DragonFly }