var movieClick = document.querySelectorAll("img");

for (var i = 0; i < movieClick.length; i++) {
  movieClick[i].addEventListener("click",getMovie);
}

function getMovie(event) {
  var clickedMovie = event.target;
  var imdbID = clickedMovie.id;
  var url = "https://omdbapi.com/?i=" + imdbID;

  $.get(url, displayResults);
}

function displayResults(results) {

document.querySelector("#movie-title").textContent = results.Title;
document.querySelector("#movie-year").textContent = results.Year;
document.querySelector("#movie-rating").textContent = results.Rated;
document.querySelector("#movie-runtime").textContent = results.Runtime;
document.querySelector("#movie-plot").textContent = results.Plot;

}
