class Animals {
    constructor(name, color) {
        this.environment = 'Forest/Land/Sky/Water';
        this.name = name;
        this.color = color;
        this.breed = 'Gyvunai';
        this.sound = 'Miau au nom! Bul bul🐠🐟 Kachiow🦅';
    }

    
    voice() {
        if (this.imposter) {
            this.breed = 'Insect';
        }
        console.log(`${this.breed} ${this.name} says: ${this.sound}`);
    }
    
    introduce() {
        if (this.imposter) {
            console.log(`Hi, I am ${this.name} and my scales are ${this.color} color I have ${this.wingsCount} wings and I say ${this.sound}`);
        } else {
            console.log(`Hi, I am ${this.name} and my feathers are ${this.color} color I have ${this.wingsCount} wings and I say ${this.sound}`);
        }
    }
    
    flying(canFly) {
        if (!this.canFly) {
            console.log(`This ${this.breed} can't fly.`);
        } else console.log(`This ${this.breed} named ${this.name} can sure fly!`);
    }
}

export { Animals }