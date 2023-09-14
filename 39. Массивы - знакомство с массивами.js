const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const role = ['admin', 'user', 'superuser'];
const userInfo = ['Аня', 25];

console.log(role);
console.log(role[0]); // индекс элемента - admin

// Длина массива lenght (метод/свойство)

console.log(role.length); // 3
console.log(role[role.length - 1]); // Получение последнего элемента массива - superuser

console.log(role.at(0)); // admin
console.log(role.at(-1)); // superadmin

// at - соверменный синтаксис, поддерживается не всеми браузерами. 

/*

Метод at() принимает значение в виде целого числа и возвращает элемент массива с данным индексом. В качестве аргумента метод принимает положительные и отрицательные числа. При отрицательном значении отсчёт происходит с конца массива.

*/


const usersAge = [2040-2022, 20-'6', 10 > 0 ? 5 : 0];
console.log(usersAge); //[ 18, 14, 5 ]

const userNames = new Array('Вася', 'Петя', 'Катя');
console.log(userNames);

function sq(el){
    return el * el;
}

console.log(sq(5));// 25
console.log(sq([1, 2, 3]));// NaN