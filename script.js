document.addEventListener('DOMContentLoaded', () => {

    const placeholder = document.querySelector('.film-placeholder');
    const searchBtn = document.querySelector('.search-btn');
    const yearHolder = document.querySelector('.year')
    const title = document.querySelector('.title')
    

    async function FetchMovie() {
        const MovieImage = await fetch(
            'https://www.omdbapi.com/?apikey=578aed68&s=avengers&page=3&r=json'
        );

        let data = await MovieImage.json();

        const NameUrl = data.Search[0].Title;
        const MovieUrl = data.Search[4].Poster;
        const YearUrl = data.Search[1].Year;

        
        placeholder.innerHTML = `<img src="${MovieUrl}" alt="Movie Image">`;
        yearHolder.innerHTML = `<h3> Рік: ${YearUrl} </h3>`
        title.innerHTML = `<h3> Назва: ${NameUrl} </h3>`
    }

    searchBtn.addEventListener('click', () => {
        FetchMovie();
    });
});
