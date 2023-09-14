const users = ['Anya', 'Vika', 'Katya'];

// Замена элемента массива
console.log(users); // [ 'Anya', 'Vika', 'Katya' ]

users[2] = 'Olya';
console.log(users); // [ 'Anya', 'Vika', 'Olya' ]

// Добавление нового пользователя

users[3] = 'Nikita';
console.log(users); // [ 'Anya', 'Vika', 'Olya', 'Nikita' ]

// Методы. Добавление

// Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива. arr.push(element1, ..., elementN)

const arrLenght = users.push('Artem');
console.log(`${users}, длина массива =  ${arrLenght}`); // 5

// Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.

const arrLenght2 = users.unshift('Vlad');
console.log(`${users}, с длиной массива = ${arrLenght2}`); // Vlad,Anya,Vika,Olya,Nikita,Artem, с длиной массива = 6


// удаление

// Метод pop() удаляет последний элемент из массива и возвращает его значение. arr.pop()

const arrLenght3 = users.pop()
console.log(`${users}, с последним удаленным элементом массива = ${arrLenght3}`); //

// Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива. arr.shift()

const arrLenght4 = users.shift();
console.log(`${users}, с первым удаленным элементом массива = ${arrLenght4}`); //

console.log(users);

// Поиск элементов массива

// Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.