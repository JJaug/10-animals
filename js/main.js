import { Dog } from './components/dog.js';

const rexas = new Dog('Rexas', 'brown');
const rikis = new Dog('Rikis', 'white');

console.log(rexas);
console.log(rikis);

rexas.voice();
rikis.voice();

rexas.introduce();
rikis.introduce();