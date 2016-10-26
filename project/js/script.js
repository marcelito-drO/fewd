// Random number generated for first part of the game
var numberOf = document.querySelector(".numberOf");
numberOf.addEventListener("click",numberOfPokemon);

function numberOfPokemon(results) {
  var p = document.createElement("p");
  var numberClass = document.querySelector(".number");
  numberClass.appendChild(p);
  p.textContent = Math.floor(Math.random() * 10) + 1;
}

// PokeApi used here to determine the Pokemon
var pokeClick = document.querySelector(".poke-search");
pokeClick.addEventListener("click",getPokemon);

function getPokemon(event) {
  var pokemonID = Math.floor(Math.random() * 364) + 1
  var url = "https://pokeapi.co/api/v2/pokemon/" + pokemonID;

  $.get(url, displayResults);
}
// Need to fix the PokeAPI, something wrong with JSON Object
function displayResults(results) {
document.querySelector("#pokemon-name").textContent = results.name;
}

// StarWars API to call a starship and a planet
var starClick = document.querySelector(".starwars-search");
starClick.addEventListener("click",getStarWars);

function getStarWars(event) {
  var starwarsID = 12;
  var url = "https://swapi.co/api/" + starwarsID;

  $.get(url, displayResults);
}

function displayResults(results) {

document.querySelector("#starwars-name").textContent = results.name;
document.querySelector("#starwars-height").textContent = results.height;
}

// Put a gif or a search bar down at the bottom of the page?
