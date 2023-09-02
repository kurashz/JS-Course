const role = 'SEO';

if (role === 'Manager') {
    console.log('Менеджер');
} else if (role === 'Admin') {
    console.log('Админ');
} else if (role === 'SEO') {
    console.log('Сео');
} else (
    console.log('Мы тебя не знаем')
)

// switch сравнивает только строгое равенство
switch (role) {
    case 'Manager': // role === 'Manager'
        console.log('Менеджер');
        break;
    case 'Admin':
        console.log('Админ');
        break;
    case 'SEO':
        console.log('СЕО');
        break;
    default:
        console.log('Мы тебя не знаем');
}

switch (role) {
    case 'Manager': 
    case 'Admin':
        console.log('Не руководитель');
        break;
    case 'SEO':
        console.log('Руководитель');
        break;
    default:
        console.log('Мы тебя не знаем');
}

const num = 1;

switch (true) {
    case num > 0: // true === num > 0
        console.log('Положительный');
        break;
    case num < 0: // true === num < 0
        console.log('Отрицательный');
        break;
    default:
        console.log('Ноль');
}