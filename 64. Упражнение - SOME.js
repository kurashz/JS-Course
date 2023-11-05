// Написать функцию которая возвращает true если элемент есть, и false, если нет

const arr = [2,4,4,10,20];

function some(element, array) {
    const result = array.find(el => el === element);
    return result == undefined ? false : true;
}

console.log(some(2,arr)); // true
console.log(some(12,arr)); // false
// SOME - проверять наличие элемента
console.log(arr.some(el => el === 2));