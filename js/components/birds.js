import { Animals } from './animals.js';


class Birds extends Animals {
    constructor(name, color, canFly) {
        super(name,color);
        this.environment = 'Sky';
        this.breed = 'Bird';
        this.sound = 'PutPut🐤,LabaDiena🦜,Kachiow🦅';
        this.canFly = canFly ?? false;
        this.wingsCount = 2;
    }

}

export { Birds }