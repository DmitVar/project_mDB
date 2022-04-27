/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const promoAdv = document.querySelector('.promo__adv'),
      promoGenre = document.querySelector('.promo__genre'),
      promoBg = document.querySelector('.promo__bg'),
      promoInteractiveList = document.querySelector('.promo__interactive-list');
let removeArr = promoAdv.querySelectorAll('img');
movieDB.movies.sort();

removeArr.forEach(el =>{
    el.remove();
});
promoGenre.textContent = 'ДРАМА';
promoBg.style.backgroundImage = 'url("img/bg.jpg")';
promoInteractiveList.innerHTML = "";
movieDB.movies.forEach((el, index) => {
    let li = document.createElement('li');
    li.classList.add('promo__interactive-item');
    li.textContent = `${index + 1} ${el}`;
    promoInteractiveList.append(li);
});
console.log(removeArr);