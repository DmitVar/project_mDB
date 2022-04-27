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