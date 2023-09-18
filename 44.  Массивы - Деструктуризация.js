const userData = ['Vlad', 18, 'Moscow'];

// const userName = userData[0];
// const userOld = userData[1];
// const userCity = userData[2];


function getData (){
    return ['Vlad', 18, 'Moscow'];
}

// const userName = getData()[0];
// const userOld = getData()[1];
// const userCity = getData()[2];

// const [userName, age, city] = getData();

const [userName, age, city] = userData;


console.log(userName, userOld, userCity);