// Итерирование по массиву

const score = [5, 10, 0, 15];
// Задача: вывести сколько заработано очков в каждом раунде;

for (let el of score) {
   console.log(el);
}

// entries() метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value], в том же порядке, что и в цикле for...in (разница в том, что for-in перечисляет свойства из цепочки прототипов). Порядок элементов в массиве который возвращается Object.entries() не зависит от того как объект объявлен. Если существует необходимость в определённом порядке, то массив должен быть отсортирован до вызова метода, например Object.entries(obj).sort((a, b) => a[0] - b[0]);.

for (let [key, value] of score.entries()) {
   console.log(`Раунд ${key + 1}: счет = ${value}`);
}

// Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве. 

/*
arr.forEach(function callback(currentValue, index, array) {
    //your iterator
}[, thisArg]);

Метод forEach() выполняет функцию callback один раз для каждого элемента, находящегося в массиве в порядке возрастания. Она не будет вызвана для удалённых или пропущенных элементов массива. Однако, она будет вызвана для элементов, которые присутствуют в массиве и имеют значение undefined.

Функция callback будет вызвана с тремя аргументами:

значение элемента (value)
индекс элемента (index)
массив, по которому осуществляется проход (array)
*/

score.forEach(function (el){
   console.log(`Раунд ${el}`);
});

console.log(`-------------------------`);

score.forEach(element, index, () => {
   console.log(`Round ${element}`);
});
// (5,0) => {clg...}
// (10,1) => {clg...}
//  (0, 2) => {clg...}