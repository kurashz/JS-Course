/*
Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

Синтаксис
const new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // Возвращает элемент для new_array
}[, thisArg])
*/


const transactionInUSD = [10, -7, 50, -10, 100];
// Обычный спосоп:

// const transactionInRUB = [];

// for (const transaction of transactionInUSD){
//     transactionInRUB.push(transaction * 95);
// }
// console.log(transactionInRUB);

const transactionInRUB = transactionInUSD.map((transaction, index) => transaction * 60);
console.log(transactionInRUB);