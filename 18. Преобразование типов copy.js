const age = '18';
console.log(age + 5); //185
console.log(Number(age) + 5); //23
console.log(+age + 5); //23
console.log(age - 3); //15

const userName = 'Vlad';
console.log(userName + 5);
console.log(Number(userName) + 5); //NaN - получено НЕ числло
console.log(typeof NaN); //number


console.log(typeof(String(4) + 7)); // 47, string

console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean('')); //false
console.log(Boolean('String')); //true


console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0



/* Number(age) - вызов явной конвертации
Численное преобразование происходит в математических функциях и выражениях, а также при сравнении данных различных типов (кроме сравнений ===, !==).

Для преобразования к числу в явном виде можно вызвать Number(val), либо, что короче, поставить перед выражением унарный плюс "+":
*/