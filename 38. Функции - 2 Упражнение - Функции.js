// Пользователь:
// • Возраст
// • Наличие работы
// - Деньги
// Нужно проверить может ли он купить новый MacBook за 2000$?
// Он может брать не только свои деньги, но и взять кредит.
// Ему дадут 500$, только если ему больше 24-х лет и он
// имеет работу, 100$ если ему просто больше 24-х лет и 0 в
// ином случае.
// Напишите функцию, которая принимает данные пользователя
// и товара и возвращает true unu false;

const macPrice = 2000;


const moneyHave = (age, isWork, money) => {
    if (age > 24 && isWork){
        return money + 500;
    } else if (age > 24){
        return money + 100;
    } else{ 
        return money; 
    }
}
const result = moneyHave(25, false, 1900);
console.log(`Может купить мак: ${result >= macPrice}, так как у него всего ${result}`)

// --------------------------------- Мой результат ------------------------------------------------------------

function computeCredite(age1, hasJob = false){
    switch(true){
        case age1 > 24 && hasJob:
            return 500;
        case age1 > 24:
            return 100;
        default:
            return 0;
    }
}

function canBuy(productPrice, age1, money1 , hasJob = false){
    const creditMoney = computeCredite(age1, hasJob);
    return productPrice <= money1 + creditMoney;
}
console.log(canBuy(2000, 25, 1500, true));