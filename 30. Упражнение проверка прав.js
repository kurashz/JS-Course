/*
Пользователь хочет приобрести игру в магазине
Он может это сделать отлько если:
• Его баланс больше 1000 (balance)
или число бонусов больше 109 (bonusBalance)
• Он не забанен (isBanned)
• Игра не кулена (isErist)
• Игра в продаже (isSelling)
Напишите услоовие для покупки и выведите резуль
в консоль
*/

let balance = 150;
let bonusBalance = 55;
let isBanned = false;
let isExist = false;
let isSelling = true;


if ((balance > 1000 || bonusBalance >= 109) && isBanned === false && isExist === false && isSelling === true){
    console.log('da');
} else{
    console.log('net');
}


const canBuy = (balance > 1000 || bonusBalance >= 109) && isBanned === false && isExist === false && isSelling === true;
console.log(`Могу купить игру ${canBuy ? 'Да': 'Нет'}`);