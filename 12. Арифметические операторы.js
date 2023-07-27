/* 
Оператор - внутрення функция js
Операторы присваивания 
Операторы сравнения 
Арифметические операторы 
Битовые операторы 
Логические операторы
Строковые операторы
Тернарные операторы
Оператор запятая
Унарные операторы
Операторы отношения
*/

// Базовые операторы 

const width = 10;
const height = 5;
const space = width * height;
const newWidth1 = width - 4;
const newWidth2 = width + 4;
const newWidth3 = newWidth2 / newWidth1;

// Оператор степени

const volume = 2 ** 3; // 2 * 2 * 2
console.log(volume);

// Строки

const city = 'Moscow';
const street = 'K1509';
const adress = city + ' ' +  street;
console.log(adress);

// Операторы присваивания

let newAge = 14 + 5;
newAge += 2; // newAge = newAge + 2; 21
newAge -= 3; // newAge = newAge - 3; 18
newAge *= 2; // newAge = newAge * 2; 36
newAge /= 2; // newAge = newAge / 2; 18

newAge++; // newAge = newAge +1; 19
newAge--; // newAge = newAge +1; 18

console.log(newAge); 

// Операторы сравнения 

const olegAge = 20;
console.log(newAge > olegAge); // false
console.log(newAge >= olegAge); // false
console.log(newAge < olegAge); // true
console.log(newAge <= olegAge); // true
console.log(newAge == olegAge); // false






