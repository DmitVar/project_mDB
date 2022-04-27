'use strict';
document.addEventListener('DOMContentLoaded', () =>{
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
          promoInteractiveList = document.querySelector('.promo__interactive-list'),
          filmForm = document.forms.film__form,
          filmInput = filmForm.film__name,
          checkbox = filmForm.querySelector('[type="checkbox"]'),
          addFilmButton = document.getElementById('add__film');
    function addFilmNameInMovieDB(){   
        const favorite = checkbox.checked;
        let newFilm = filmInput.value;
        if(filmInput.value.trim() != ''){
            if(newFilm.length > 21){
                newFilm = `${newFilm.slice(0, 21)} ...`;
            }
            movieDB.movies.push(newFilm);
            movieDB.movies.sort();
            createMoviList(movieDB.movies, promoInteractiveList);
        }
        
        filmInput.value = "";
    }
    addFilmButton.addEventListener('click', addFilmNameInMovieDB);
    let removeArr = promoAdv.querySelectorAll('img');
    movieDB.movies.sort();
    
    removeArr.forEach(el =>{
        el.remove();
    });
    promoGenre.textContent = 'ДРАМА';
    promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    
    function createMoviList(films, parent){
            parent.innerHTML = "";
            films.forEach((el, index) => {
            let li = document.createElement('li');
            li.classList.add('promo__interactive-item');
            li.textContent = `${index + 1} ${el}`;
            parent.append(li);
        });
    }
    createMoviList(movieDB.movies, promoInteractiveList);
    console.log(removeArr);
});