// <div class="next-highlight">
//   <img src="images/charmander.png" alt="Charmander" class="poke-pic">
//      <div class="content">
//         <p>I just finished having lunch and I my mouth is on fire! Watch out Hitmonchan, three of my Embers and I will turn you into ashes!</p>
//         <a class="like-button">Like</a>
//         <span class="like-count">(12)</span>
//       </div>
// </div>
function createTweet(text,image) {
var nextBlock = document.createElement("div");
var image = document.createElement("img");
var content = document.createElement("div");
var p = document.createElement("p");
var likeCount = document.createElement("span");
var likeButton = document.createElement("a");

content.appendChild(button);
content.appendChild(likeCount);
content.appendChild(p);
nextBlock.appendChild(image);
nextBlock.appendChild(content);

p.texContent = text;
likeButton.textContent = "Like";
likeCount.textContent = "(0)";

document.querySelector("main").appendChild(nextBlock);

image.setAttribute("src", image);
content.setAttribute("class", "content");
likeButton.setAttribute("class", "like-button");
likeCount.setAttribute("class", "count");
}

var button = document.querySelector(".publish");


function newComment(event) {
 event.preventDefault();
createTweet(document.querySelector("textArea").value, "images/dragonite.jpeg");
}

button.addEventListener("click", newComment);
