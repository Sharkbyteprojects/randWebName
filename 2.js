/*
Text <C> Sharkbyteprojects
*/
const randoms={"first": ["Buster", "Cain", "Shark", "Apppro", "World","T-","Stego", "Jurassic"], "second": ["ritter","dom", " World", " King", "Diff", " Submaster", " Fire", "saurus", "Rex"]};

function getRndInteger(min, max) {
 return Math.floor(Math.random() * (max - min) ) + min;
}
function getRndName(){
  return randoms.first[getRndInteger(0, randoms.first.length)]+randoms.second[getRndInteger(0, randoms.second.length)];
}