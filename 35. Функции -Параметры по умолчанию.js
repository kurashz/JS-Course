// Переписать функцию в стрелочну

function toPower (num, power = 2){
    // дополнительный способ передачи значения аргумента по 
    
    
    console.log(typeof(power));
    // const power2 = power ?? 2; - если аргумент функции повер не передан он будет равен двум
    const result = num ** power2;
    return result;
}

console.log(toPower(2, 4)); 
console.log(toPower(2)); //NaN

