document.addEventListener('DOMContentLoaded', () => {

    const placeholder = document.querySelector('.film-placeholder');
    const searchBtn = document.querySelector('.search-btn');

    async function FetchMovie() {
        const MovieImage = await fetch(
            'https://www.omdbapi.com/?apikey=578aed68&s=avengers&page=1&r=json'
        );

        let data = await MovieImage.json();

        const MovieUrl = data.Search[4].Poster;

        placeholder.innerHTML = `<img src="${MovieUrl}" alt="Movie Image">`;
    }

    searchBtn.addEventListener('click', () => {
        FetchMovie();
    });
});
