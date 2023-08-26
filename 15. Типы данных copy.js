// Примитивы 

const age = 18; // числа
const surnam = 'Kurashev'; // строки
const isAdmin = true; // булевые значения
const isAdmin1 = undefined; // Не заданное значение
const data; // Не заданное значение

let datas = null; // Пустое значение
const admin = Symbol('Admin'); // Уникальное неизменное значение
const big = BigInt(99999999999999); // Работа с большими числами

//

let newAge = 15;
console.log(typeof newAge); // number
newAge = 'string';
console.log(typeof newAge); // string

//

let isAdmin2 = false;
console.log(typeof isAdmin2); // boolean
let d = null;
console.log(d == null); // true