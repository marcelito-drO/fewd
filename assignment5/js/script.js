// Create variables
// appendChilds to parents
// setAttributes
// add event listener
//  - when the button is clicked, create a new list item
//  - the list item will contain the text that the user wrote in the textarea
//  - the list item will go right below the textarea

function newListItem(text) {
  var li = document.createElement("li");
  var label = document.createElement("label");
  var item = document.createElement("input");
  var userText = document.createElement("span");

  li.appendChild(label);
  label.appendChild(item);
  label.appendChild(userText);

  document.querySelector("main").appendChild(li);
  userText.textContent = text;

  item.setAttribute("type", "checkbox");
}

var button = document.querySelector(".button");

function newItem (event) {
 event.preventDefault();
}
newListItem(document.querySelector("textArea").value)

button.addEventListener("click",newItem);
