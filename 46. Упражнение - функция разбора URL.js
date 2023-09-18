/*
Дан произвольный url -
https://purpleschool.ru/course/javascript'
Нужно сделать функцию, которая выводит в консоль:
- Протокол (https)
- Доменное имя (purpleschool.ru)
- Путь внутри сайта (/course/javascript)
*/


const url = 'https://purpleschool.ru/course/javascript';
const error_url = 'purpleschool.ru/course/javascript';


function getUrl(url) {
  const [protokol, _, domen, ...path] = url.split('/');
  if (protokol === 'https:' || protokol === 'http:') {
    if(!domen.includes('.')){
      return;
    }
    console.log(`Протокол = ${protokol.split(':')[0]}, 
Домен = ${domen},
Путь = /${path.join('/')}`);
  } else{
    console.log('error');
  }

}

getUrl(url); // Протокол = https, Домен = purpleschool.ru, Путь = /course/javascript
getUrl(error_url); // Протокол = purpleschool.ru, Домен = javascript, Путь = /