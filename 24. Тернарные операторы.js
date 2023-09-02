// switch, if-else не единственные способы записи условий

const bmwX3 = 100000;
const fordFocus = 10000;
const budget = 20000;

let messages = budget > bmwX3 ? 'BMW' : budget > fordFocus ? 'Ford Focus' : 'Пешком';
console.log(messages);
// Что мы можем купить? Пример ошибки: if - это утверждени

//console.log(`Я хочу купить ${if()}`);

if (budget > 100000 ){
    let message = 'BMW';
} else if (budget > fordFocus){
    let message = 'Ford Focus'
} else {
    console.log('Иди пешком');
}

// console.log(`Я хочу купить ${message}`); // будет ошибка по причине зоны видимости переменной
console.log(`Я хочу купить ${budget > bmwX3 ? 'BMW' : 'Велосипе'}`);

let message; 
if (budget > 100000 ){
     message = 'BMW';
} else if (budget > fordFocus){
     message = 'Ford Focus'
} else {
    console.log('Иди пешком');
}

console.log(`Я хочу купить ${message}`); // Я хочу купить Ford Focus

// ТЕРНАРНЫЙ ОПЕРАТОР

10 > 0 ? console.log('Больше 0') : console.log('Не больше 0'); // является выражением

/* if ? Выполнение услвоия : else
if (10 > 0){
    console.log('Больше 0');
} else{
    console.log('Не больше 0');
}
*/

const str = 10 > 0 ? 'Больше 0' : 'Не больше 0';
console.log(str);