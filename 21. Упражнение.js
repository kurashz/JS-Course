/*
Васи положил 12 000$ на вклад 7% годовых с
капитализацией 1 раз в месяц.
Вывести в консоль, сможет ли он купить дом за 13 500$
через 2 года после снятия вклада. И остаток после покупки.
Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах

*/
const bankSumm = 12000;
const bankRent = 0.07;
const houseCost = 13500;


let result = bankSumm * (1 + bankRent / 12) ** 24;

if( result > houseCost){
    console.log(`Мы накопили ${result}. 
Можем купить дом с остатком = ${result - houseCost}`);
} else{
    console.log(`Не хватает на покупку дома = ${result - houseCost}`);
}