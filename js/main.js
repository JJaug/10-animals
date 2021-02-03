import { Dog } from './components/dog.js';
import { Cat } from './components/cat.js';
import { Hamster } from './components/hamster.js';
import { Nemo } from './components/nemo.js';
import { Goldfish } from './components/goldfish.js';
import { Chicken } from './components/chicken.js';
import { Parrot } from './components/parrot.js';
import { Eagle } from './components/eagle.js';
import { DragonFly } from './components/dragonFly.js';


const rexas = new Dog('Rexas', 'brown');
const pukis = new Cat('Pukis', 'white');
const jorkis = new Hamster('Jorkis', 'golden');
const nemo = new Nemo('Nemo', 'blue');
const ariele = new Goldfish('Ariele', 'gold',false);
const mogbi = new Chicken('Mogbi', 'Sand-ish', false)
const kiki = new Parrot('Kiki', 'Red', true)
const benius = new Eagle('Benius', 'Black', true)
const laumius = new DragonFly('Laumius', 'Silver', true)



console.log(rexas);
console.log(pukis);
console.log(jorkis);
console.log(nemo);
console.log(ariele);
console.log(mogbi);
console.log(kiki);
console.log(benius);
console.log(laumius);


rexas.voice();
pukis.voice();
jorkis.voice();
nemo.voice();
ariele.voice();
mogbi.voice();
kiki.voice();
benius.voice();
laumius.voice();


rexas.introduce();
pukis.introduce();
jorkis.introduce();
nemo.introduce();
ariele.introduce();
ariele.makeWish('Drakono');
mogbi.introduce();
mogbi.flying();
kiki.introduce();
kiki.flying();
benius.introduce();
benius.flying();
laumius.introduce();
laumius.flying();