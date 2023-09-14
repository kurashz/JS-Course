function powerOfTwo(num){
    console.log(num);
    return num * num;
}
console.log(powerOfTwo(5));

// Стрелочная

// const poft = (num, i) => num * i;
const poft = num => {
    console.log(num);
    return num * num;
}

console.log(poft(6));

// = (аргумент функции) => то что будет вовзращаться (return)