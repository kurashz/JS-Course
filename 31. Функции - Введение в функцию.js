function fromMilesToKm(miles) {
    const km = miles / 0.62137;
    return km;
}

/*
Ключевое слово, объявление - function;
Название функции - fromMilesToKm;
Аргумент - miles
Возвращаемое значение - return km;
*/

function logName (name, surname){
    console.log(`Мое имя ${name}, фамилия ${surname}`);
}

logName('Влад', 'Курашев');

function countDeposit(depositInUSD, month, rate){
    const sum = depositInUSD * (1 + rate / 12) ** month;
    return sum;
}

const result = countDeposit(100, 50, 0.12);
console.log(result);