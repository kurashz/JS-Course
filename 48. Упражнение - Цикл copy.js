// Задача вывести в консоль строку "Я люблю IS !" из массива,
// проходя циклом в обратном порядке, не используя метод reverse.
// const атт = ['!', 'IS', люблю', 'Я'];

const arr = ['!', 'JS', 'люблю', 'Я'];
const resultArr = [];
for (let i = arr.length-1; i >= 0; i--){
    resultArr.push(arr[i]);
    console.log(resultArr);
    // [ 'Я' ]
    // [ 'Я', 'люблю' ]
    // [ 'Я', 'люблю', 'JS' ]
    // [ 'Я', 'люблю', 'JS', '!' ]
}
console.log(resultArr.join(' '));

console.log(arr.reverse().join(' '));