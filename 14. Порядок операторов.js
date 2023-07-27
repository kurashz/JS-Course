// Какой порядок вычислений?

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_precedence

const isSuited1 = box - 10 > size - 5; // const isSuited = (4) box - 10 (2) > (3) size - 5 (1);

const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited); // true

// const isSuited = (2 приоритет) 100 - (12 приоритет) 10 > (10 приоритет) 90 - (12 приоритет) 5;

const a = (6 + 10) / 2; 
console.log(a);

let b, c;
c = b = 100 + 50; // c = (2.2) b = (2.1) 100 + (12) 50; Присваивание работает справа налево!!

console.log(c); // 150
console.log(b); // 150