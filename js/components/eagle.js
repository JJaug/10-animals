import { Birds } from './birds.js';

class Eagle extends Birds{
    constructor(name, color, canFly) {
        super(name,color);
        this.environment = 'Sky';
        this.sound = 'Kachiow🦅';
        this.canFly = canFly ?? false;
    }

}

export { Eagle }