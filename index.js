//OMDb API DATA  https://www.omdbapi.com/?s=harry-potter&apikey=2c2682af 

function openMenu() {
    document.body.classList += " menu--open";
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}


let movies;


async function renderMovies(filter) {
 const moviesWrapper = document.querySelector(".movies");
 
 moviesWrapper.classList += ' movies__loading'

 if (!movies) {
    movies = await getMovies();
}

 moviesWrapper.classList.remove('movies__loading');

 if (filter === 'A_To_Z') {
    movies.sort((a, b) => a.title.localeCompare(b.title));
 } 
 else if (filter === 'Z_To_A') {
    movies.sort((a, b) => b.title.localeCompare(a.title));
 }
 else if (filter === 'YEAR_ASC') {
    movies.sort((a, b) => a.year - b.year);
 }
 else if (filter === 'YEAR_DESC') {
    movies.sort((a, b) => b.year - a.year);
 }



   const moviesHtml = movies.map((movie) => {
    return `<div class="movie">
                <figure class="movie__img--wrapper">
                    <img class="movie__img" src="${movie.poster}" alt="book 1">
                </figure>
                <div class="movie__title">${movie.title}</div>
                <div class="movie__year">
                    ${movie.year}
                </div>
        </div>`;
        }).join("");  
                
    moviesWrapper.innerHTML = moviesHtml;
}

function filterMovies(event) {
    renderMovies(event.target.value);
}

 
setTimeout(() => {
    renderMovies();
})
    
function getMovies() {
return new Promise((resolve) => {
    setTimeout(() => {
    resolve([
{
title: "Harry Potter and the Deathly Hallows: Part 2",
year: "2011",
id: "tt1201607",
Type: "movie",
poster: "https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg"
},
{
title: "Harry Potter and the Sorcerer's Stone",
year: "2001",
id: "tt0241527",
Type: "movie",
poster: "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_SX300.jpg"
},
{
title: "Harry Potter and the Prisoner of Azkaban",
year: "2004",
id: "tt0304141",
Type: "movie",
poster: "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg"
},
{
title: "Harry Potter and the Chamber of Secrets",
year: "2002",
id: "tt0295297",
Type: "movie",
poster: "https://m.media-amazon.com/images/M/MV5BNGJhM2M2MWYtZjIzMC00MDZmLThkY2EtOWViMDhhYjRhMzk4XkEyXkFqcGc@._V1_SX300.jpg"
},
{
title: "Harry Potter and the Goblet of Fire",
year: "2005",
id: "tt0330373",
Type: "movie",
poster: "https://m.media-amazon.com/images/M/MV5BMTIzNzUzOTk2NV5BMl5BanBnXkFtZTYwNTI4MDg2._V1_SX300.jpg"
},
{
title: "Harry Potter and the Order of the Phoenix",
year: "2007",
id: "tt0373889",
Type: "movie",
poster: "https://m.media-amazon.com/images/M/MV5BYWJmM2M1YzItMjY1Ni00YzRmLTg5YWYtNDFmNTJjNzQ0ODkyXkEyXkFqcGc@._V1_SX300.jpg"
},
{
title: "Harry Potter and the Deathly Hallows: Part 1",
year: "2010",
id: "tt0926084",
Type: "movie",
poster: "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
},
{
title: "Harry Potter and the Half-Blood Prince",
year: "2009",
id: "tt0417741",
Type: "movie",
poster: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"
},
{
title: "Harry Potter 20th Anniversary: Return to Hogwarts",
year: "2022",
id: "tt16116174",
Type: "movie",
poster: "https://m.media-amazon.com/images/M/MV5BZTNhNjg1NWItZThkNC00N2JiLTkzOTgtNzZjYzAyYTQ4OTEwXkEyXkFqcGc@._V1_SX300.jpg"
},
{
title: "Harry Potter 20th Anniversary: Return to Hogwarts",
year: "2022",
id: "tt16116174",
Type: "movie",
poster: "https://m.media-amazon.com/images/M/MV5BZTNhNjg1NWItZThkNC00N2JiLTkzOTgtNzZjYzAyYTQ4OTEwXkEyXkFqcGc@._V1_SX300.jpg"
},
])
}, 1000);
});
}
