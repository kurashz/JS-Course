/*
Дан список задач
const tasks = ['Задача 1'];
Сделать функции:
- Добавление задачи в конец
- Удаление задачи по названию
- Перенос задачи в начало списка по названию
Всегда меняем исходный массив
*/

const tasks = ['Zadacha 1'];

function addElement(el){
    tasks.push(el);
}

function deleteElement(el){
    const index = tasks.indexOf(el);
    if(index === -1){
        return;
    }
   return tasks.splice(index, 1); // вовзращает удаленный элемент
}

function prioritet(task){
    const result = deleteElement(task);
    if(!result){
        return;
    } tasks.unshift(result[0]);


}

addElement('Zadacha 2');
addElement('Zadacha 3');
addElement('Zadacha 4');
console.log(tasks);
deleteElement('Zadacha 2');
console.log(tasks);
prioritet('Zadacha 4');
console.log(tasks);
