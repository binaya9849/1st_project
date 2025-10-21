document.addEventListener("DOMContentLoaded", () => {
    const movieList = document.getElementById("movieList");
    const highestRatedElem = document.getElementById("highestRated");
    let numMovies = Number(prompt("Number of movies you want to rate:"));
    let movies = [];
    for (let i = 1; i <= numMovies; i++) {
        let title = prompt(`Enter the title of movie ${i}:`);
        title = title.toUpperCase(); 
        let rating;
        while (true) {
            rating = Number(prompt(`Enter your rating for "${title}" (1 to 5):`));
            if (rating === rating && rating >= 1 && rating <= 5) break;
            alert("Please enter the rrating of movie between 1-5.");
        }
        movies.push({ title, rating });
    }
    movies.sort((a, b) => b.rating - a.rating);
    movies.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = `${movie.title} - Rating: ${movie.rating}`;
        movieList.appendChild(li);
    });
    if (movies.length > 0) {
        highestRatedElem.textContent = `Highest Rated Movie: ${movies[0].title} (Rating: ${movies[0].rating})`;
    } else {
        highestRatedElem.textContent = "No movies entered.";
    }
});
