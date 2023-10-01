// замыкание функции - возврат одной из другой

function power(power){
    return function (num){
        return num**power;
    }
}

const powerOTwo = power(2);
console.log(powerOTwo(5)); // 25

const powerOThree = power(3);
console.log(powerOThree(5)); // 125


console.log(power(5)(4));