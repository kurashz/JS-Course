// Функции первого класса

/* В js, функции это значения


*/

const a = (b) => b++; // Функция может храниться в переменной
function g(a){ // В функцию может передаваться другая функция и возвращаться из функции
    return a;
}

// Функции высшего порялка - функции, которые принимают какие-либо другие функции, либо их возвращают. Таким образом, функция g - функция высшего порядка: 

function g(a){ 
    return a;
}

function f(){
    return a;
}
