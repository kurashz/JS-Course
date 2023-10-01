// for (let i = 1; i < 5; i++){
//     console.log(`Цикл 1 - ${i}`);
//     for (let j = 1; j < 5; j++){
//         console.log(`Цикл 2 - ${j}`);
//     }
//     // Внутренний цикл будет выполняться на жадой итерации внешнего цикла 
//     // В первый раз исполняется верхний цикл, внутренний цикл будет исполняться каждую итерациюю верхнего 
// }

const tasks = [[1, 'zadacha1'], [2, 'zadacha2']];

for (let i = 0; i < tasks.length; i++){
    for (let j = 0; j < tasks[i].length; j++){
        console.log(tasks[i][j]);
    }
}