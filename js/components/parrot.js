import { Birds } from './birds.js';

class Parrot extends Birds {
    constructor(name, color, canFly) {
        super(name,color);
        this.environment = 'Trees';
        this.sound = 'LabaDiena🦜';
        this.canFly = canFly ?? false;
    }
}

export { Parrot }