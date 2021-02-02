import { Dog } from './components/dog.js';
import { Cat } from './components/cat.js';
import { Hamster } from './components/hamster.js';
import { Nemo } from './components/nemo.js';
import { Goldfish } from './components/goldfish.js';

// const rexas = new Dog('Rexas', 'brown');
// const pukis = new Cat('Pukis', 'white');
// const jorkis = new Hamster('Jorkis', 'golden');
const nemo = new Nemo('Nemo', 'blue');
const ariele = new Goldfish('Ariele', 'gold',0);

// console.log(rexas);
// console.log(pukis);
// console.log(jorkis);
console.log(nemo);
console.log(ariele);

// rexas.voice();
// pukis.voice();
// jorkis.voice();
nemo.voice();
ariele.voice();


// rexas.introduce();
// pukis.introduce();
// jorkis.introduce();
nemo.introduce();
ariele.introduce();

ariele.makeWish('Drakono');