// Переписать функцию в стрелочну

function toPower (num, power){
    const result = num ** power;
    return result;
}

console.log(toPower(2,4));

const res = (num, power) => num ** power;
console.log(`Стрелочная функция: ${res(2,4)}`);