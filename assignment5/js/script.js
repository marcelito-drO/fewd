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

  item.setAttribute("type", "checkbox");
  userText.textContent = text;

  li.appendChild(label);
  label.appendChild(item);
  label.appendChild(userText);
  document.querySelector("ul").appendChild(li);
}

var inputtt = document.querySelector("input");

function newTodo(event) {
  event.preventDefault();
  newListItem(document.querySelector("textArea").value);
  var ul = document.querySelector("ul");
  document.querySelector(".todo-count").textContent = ul.length;
}
inputtt.addEventListener("click",newTodo);
