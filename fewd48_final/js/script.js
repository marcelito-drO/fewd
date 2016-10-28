// Start by adding the ability to call the function as soon as the page loads / is called by the user
var cardClick = document.querySelectorAll(".card");
for (var i = 0; i < cardClick.length; i++) {
  cardClick[i].addEventListener("click",spaceAdventure);
}

// var button = document.querySelector(".new-adventure-button");
// button.addEventListener("click",spaceAdventure);
// movieClick.addEventListener("DOMContentLoaded", spaceAdventure);

var setOfActions = [ "Drinking shots of tequila", "Drunk dialing their exes", "Throwing waterballoons at bystanders", "On a energy-drink-chugging competition", "Smoking a YUGE joint", "Driving a Lincoln", "Going All-in", "Talking about the end of the world", "Arrested for Peeing in Public", "Doing bottle service at the club", "Dancing Disco Inferno In Da Club", "Surfing some dope waves"];

function spaceAdventure(event){

// Random number generated for first part of the game
  document.querySelector("#numberOf").textContent = Math.floor(Math.random() * 10) + 1;

  document.querySelector("#with").textContent = "WITH";
  document.querySelector("#on").textContent = "ON";

// PokeApi used here to spit out a random Pokemon
  var pokemonID = Math.floor(Math.random() * 720) + 1;
  var urlPoke = "https://pokeapi.co/api/v2/pokemon/" + pokemonID;
    $.get(urlPoke, displayPokemon);

    function displayPokemon(results) {
      console.log("pokemon",results);
      document.querySelector("#thePokemon").textContent = results.name;
      document.querySelector(".pokemon").setAttribute("src",results.sprites.front_default);
    }

// StarWars API to call a character
  var starwarsID = Math.floor(Math.random() * 70) + 1;
  var urlStarwars = "https://swapi.co/api/people/" + starwarsID + "?format=json";
    $.get(urlStarwars, displayStarwars);

    function displayStarwars(results) {
      console.log("character",results);
      document.querySelector("#starCharacter").textContent = results.name;
    }

// StarWars API to call a planet
  var planetID = Math.floor(Math.random() * 20) + 1;
  var urlPlanet = "https://swapi.co/api/planets/" + planetID + "?format=json";
    $.get(urlPlanet, displayPlanet);

    function displayPlanet(results) {
      console.log("planet",results);
      document.querySelector("#starplanet").textContent = results.name;
    }

// Input a set of actions that is randomly generated at the time that the user // reloads the page or clicks on the new story button
  var weirdAction = setOfActions[Math.floor(Math.random() * 12)];
  document.querySelector("#punchLine").textContent = weirdAction;

  }
