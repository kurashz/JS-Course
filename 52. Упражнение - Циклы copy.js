
/* Есть выгрузка операций пользователя
const operations = [1000, -700, 300, -500, 10000];
а так же начальный баланс в 100$
Необходимо сделать функции расчёта;
- Итогового баланса
- Наличия отрицательного баланса (если после очередной операции
баланс ‹ 0, то выдавать false)
- Расчёта среднего расхода и среднего дохода

*/

const operations = [1000, -1700, 300, -500, 10000];
const startBalance = 100;
let summ = 0;

function balance(arr, initialBalance){
    let balance = initialBalance;
    for (const element of arr){
        balance += element;
    }
    return balance;
}

console.log(balance(operations, startBalance));

function checkOperations(arr, initialBalance){
    let balance = initialBalance;
    let isOk = true;
    for (const element of arr){
        balance += element;
        if(balance < 0){
            isOk = false;
            break;
        }
    }
    return isOk;   
}
console.log(checkOperations(operations, startBalance));

function srednie(arr){
    let positiveCount = 0;
    let positiveSumm = 0;
    let negativeCound = 0;
    let negativeSumm = 0;

    for (const element of arr){
            if (element > 0){
                positiveCount ++;
                positiveSumm += element;
            } 
            
            if(element < 0){
                negativeCound++;
                negativeSumm += element;
            }
        }
        return [positiveSumm / positiveCount, negativeSumm / negativeCound];
}

console.log(srednie(operations));
