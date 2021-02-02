

class Fish {
    constructor(name,color) {
        this.breed = 'Fish';
        this.environment = 'water';
        this.name = name;
        this.color = color;
        this.sound = 'Bul bul🐠🐟';
    }

    voice() {
        console.log(`${this.breed} ${this.name} says: ${this.sound}`);
    }

    introduce() {
        console.log(`Hi, I am ${this.name} and my scales are ${this.color} color and I say ${this.sound}`);
    }
}

export { Fish }