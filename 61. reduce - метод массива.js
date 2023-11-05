// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение. Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента: 
/* accumulator
 Аккумулятор, аккумулирующий значение, которое возвращает функция callback после посещения очередного элемента
 currentValue
 Текущий обрабатываемый элемент массива.
 indexНеобязательный
 Индекс текущего обрабатываемого элемента массива.
 array Необязательный
 Массив, для которого была вызвана функция reduce.
*/

const operations = [100, -20, 7, -30,50];

let balance = 0;

for (const operation of operations){
    balance += operation;
}
console.log(balance); // 107 - сумма


const finalBalance = operations.reduce((acc, operation, i) => {
    console.log(`Итерация ${i}, acc = ${acc}, operation = ${operation}`);
    return acc += operation;
}, 0); 

console.log(finalBalance);
// Итерация 0, acc = 0, operation = 100
// Итерация 1, acc = 100, operation = -20
// Итерация 2, acc = 80, operation = 7
// Итерация 3, acc = 87, operation = -30
// Итерация 4, acc = 57, operation = 50

const minElement = operations.reduce((acc, operation, i) => {
   if(operation > acc){
    return acc;
   } else{
    return operation;
   }
}, 0);

console.log(`Минимальный элемент = ${minElement}`);