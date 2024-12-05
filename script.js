// Variable Declaration
const pikachu = 7;
let pikachu2 = 15;
// console.log(pikachu);
console.log(pikachu2);
// console.log(pikachu + pikachu2);

// reassignment of values (as long as it's let)
pikachu2 = 22;
console.log(pikachu2);

// cannot reassign a const variable!
// pikachu = 10;
// console.log(pikachu)
// You'll get an error above!

// Strings are TEXT REPRESENTATION
const chicken = "tasty";
console.log(chicken);

// BOOLEANs = True or False
const hungry = true;
const full = false;

console.log(hungry);
console.log(full);

const pTag = document.getElementById("test");
for (let i = 0; i < 20; i++) {
  const newEl = document.createElement("p");
  newEl.textContent = "Hello to everyone in class!";
  pTag.appendChild(newEl);
}

alert("hi!");
