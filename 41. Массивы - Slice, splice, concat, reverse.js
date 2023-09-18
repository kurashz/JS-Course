const roles = ['user', 'admin', 'manager', 'superadmin'];

// Метод slice() возвращает новый массив, содержащий копию части исходного массива. arr.slice([begin[, end]]). Индекс (счёт начинается с нуля), по которому начинать извлечение.

// Не модифицирует исходный массив

const res = roles.slice(2);
const res1 = roles.slice(2,3); // 2 - начальный индекс, 3 - конечный индекс
const res2 = roles.slice(-1); // Выведет новый массив
// Запись выше идентична записи
const res3 = roles[roles.length - 1]; // Выведет значение масства
const res4 = roles.slice(1, -1);


console.log(roles); // [ 'user', 'admin', 'manager', 'superadmin' ]

console.log(`res = ${res}`); // [ 'manager', 'superadmin' ]
console.log('res1 =', res1); // [ 'manager' ]
console.log('res2 =', res2); // [ 'superadmin' ]
console.log('res4 =', res4);


/* Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые. 

array.splice(start[, deleteCount[, item1[, item2[, ...]]]])


start

    Индекс, по которому начинает изменять массив. Если больше длины массива, реальный индекс будет установлен на длину массива. Если отрицателен, указывает индекс элемента с конца.

deleteCount Необязательный

    Целое число, показывающее количество старых удаляемых из массива элементов. Если deleteCount равен 0, элементы не удаляются. В этом случае вы должны указать как минимум один новый элемент. Если deleteCount больше количества элементов, оставшихся в массиве, начиная с индекса start, то будут удалены все элементы до конца массива.

itemN Необязательный

    Необязательные параметры. Добавляемые к массиву элементы. Если вы не укажете никакого элемента, splice() просто удалит элементы из массива.
*/

// const res5 = roles.splice(2); // [ 'manager', 'superadmin' ]
console.log(roles);
// const res5 = roles.splice(2,2); // взяли со 2 индекса 2 элемента(кол-во элементов) - удаляет из массива [ 'user', 'admin' ]

const res5 = roles.splice(-1); // удаляет из массива элемент[ 'superadmin' ]

console.log('res5 =', res5); 
console.log(roles);

// Метод reverse() на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым. Изменяет текущий массив 

const roles1 = ['user', 'admin', 'manager', 'superadmin'];

const resRoles1 = roles1.reverse();
console.log(resRoles1); // [ 'superadmin', 'manager', 'admin', 'user' ]

console.log(roles1); // [ 'superadmin', 'manager', 'admin', 'user' ]
 
// Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.

const newRoles = ['sysadmin', 'developer'];

const newResult = roles1.concat(newRoles);
console.log(newResult); // [ 'superadmin', 'manager', 'admin', 'user', 'sysadmin', 'developer' ]
