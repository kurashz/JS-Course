function add(A, B){
    return A + B;
}

function subtract(A, B){
    return A - B;
}

function power(a,b){
    return a**b;
}

// Функция высшего порялка - ПРИНИМАЕТ ДРУГУЮ ФУНКЦИЮ ЛИБО ВОЗВРАЩАЕТ ФУНКЦИЮ

function calculate(a, b, fn){
    console.log(fn.name);
    const result = fn(a,b);
    return result;
}
let res = calculate(3,5,add);
console.log(res); // add 8

res = calculate(3,5,subtract);
console.log(res); // subtract -2

res = calculate(3,5,power);
console.log(res); // power 243