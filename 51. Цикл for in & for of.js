const arr = [1, 4, 11, 9];

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


// for of - получение элемента массива


for (let element of arr) {
    // Итерируемся по массиву, каждый раз берем элемент данного массива
    console.log(element);
}

// for in - получение индекса массива

for (let index in arr){
    console.log(index);
}