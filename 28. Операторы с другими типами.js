console.log('Вася' || 'Oleg'); // выведется первый операнд при ИЛИ, если он = true
console.log(false || 'Oleg');  // Oleg

console.log('Vasya' && 'Oleg'); // если есть false - будет false
console.log(false && 'Oleg'); // false
console.log('Oleg' && false); // false

let a;
const userName = a || 'Petya';
console.log(userName);

const isAdmin = false;
const filename = isAdmin && 'file.mp4';
console.log(filename);

// Оператор нулевого сравнения

