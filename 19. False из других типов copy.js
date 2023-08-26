console.log(Boolean(0)); //false
console.log(Boolean('')); //false
let a; // undefined
console.log(Boolean(a)); //false
console.log(Boolean(null)); // false

console.log(Boolean(Number('string'))); // false 