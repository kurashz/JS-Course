console.log('Наш баланс $1');

for(let i = 0; i <10; i++){
  console.log('Наш баланс =' ,i+1);
}

// Break & continue

const tasks = ['zadacha1', 'zadacha2', 'zadacha3'];

for(let i = 0; i < tasks.length; i++){
  if(tasks[i] === 'zadacha2'){
    continue; // Переход к следующей итерации цикла. Выведете только задачу 1 и задачу 3
  }
  console.log(tasks[i]); // zadacha1 zadacha2
}
console.log('---');

for(let i = 0; i < tasks.length; i++){
  if(tasks[i] === 'zadacha2'){
    break; // Прекращает выполнение цикла
  }
  console.log(tasks[i]); // zadacha1 zadacha2
}
