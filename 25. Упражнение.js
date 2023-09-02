/* 
Методом prompt получите ответ пользовотеля на вопрос "Сколько будем 7 + или • 15?*. 
Если ответ верен выведите в консоле "Успех", если нет "Вы робов!", а если он введет "Я не робот", то такхже "Успех"
*/ 

const userAnswer = prompt('Сколько будет 7 + или - 15?');

// switch(true){
//     case Number(userAnswer) === 22:
//     case Number(userAnswer) === -8:
//     case userAnswer === 'Я не робот':
//         console.log('Успех');
//         break;
//     default:
//         console.log('Вы робот');
// }

if (userAnswer === 'Я не робот'){
    console.log('Успех');
} else {
    const userAnswerNum = Number(userAnswer);
    switch(userAnswerNum){
        case 22:
        case -8:
            console.log('Успех');
            break;
    default:
        console.log('Вы робот');
}
}