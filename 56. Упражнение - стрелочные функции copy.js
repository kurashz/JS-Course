// замыкание функции - возврат одной из другой

// function power(power){
//     return function (num){
//         return num**power;
//     }
// }

let res = power => num => num ** power;

const powerOTwo = res(2);
console.log(powerOTwo(5)); // 25

const powerOThree = res(3);
console.log(powerOThree(5)); // 125


console.log(res(5)(4));