// Найти среднее значение 

const arr = [2,4,4,10];

let summ = 0;

const avg = arr.reduce((acc, currentValue, i) =>{
    if(i != arr.length -1 ){
        return acc + currentValue;
    } else{
        return (acc + currentValue) / arr.length;
    }
},0);

console.log(avg);