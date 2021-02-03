import { Birds } from './birds.js';

class Chicken extends Birds {
    constructor(name, color, canFly) {
        super(name,color);
        this.environment = 'Land';
        this.sound = 'PutPut🐤';
        this.canFly = canFly ?? false;
    }

}

export { Chicken }