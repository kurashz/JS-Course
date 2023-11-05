const operations = [100, -20, 7, -20, 50];

// const positiveOperations = [];

// for (const operation of operations){
//     if (operation > 0){ positiveOperations.push(operation);}
// }
// console.log(positiveOperations);


const positiveOperations = operations.filter(operation => operation > 0);
console.log(positiveOperations); 

// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции. filter(function callbackFn(element, index, array){ ... })

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


// Чейнинг методов

const positiveRUBOperations = operations
    .filter(operation => operation > 0)
    .map(operation => operation * 60);

console.log(positiveRUBOperations); 
