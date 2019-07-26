var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var buttons = document.getElementsByClassName("remove");

console.log(li);

function inputLength() {
	return input.value.length;
}

function createLi() {
	var newLiElement = document.createElement("li");
	newLiElement.appendChild(document.createTextNode(input.value));
	ul.appendChild(newLiElement);
	input.value = "";
	newLiElement.addEventListener("click", toggleDoneClass);
	return newLiElement;
}

function createButton(liTarget) {
	var newButton = document.createElement("button");
	newButton.appendChild(document.createTextNode("Remove"));
	liTarget.appendChild(newButton);
	newButton.addEventListener("click", deleteListItem);
}

function newElement() {
	var newLi = createLi();
	createButton(newLi);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		newElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		newElement();
	}
}

function toggleDoneClass(event) {
	if (event.target.className === "done") {
		event.target.classList.remove("done");
	}
	else
		event.target.className = "done";
}

function deleteListItem(event) {
	ul.removeChild(event.target.parentElement);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (var i = 0; i<li.length; i++) {
	li[i].addEventListener("click", toggleDoneClass);
}

for (var i = 0; i<buttons.length; i++) {
	buttons[i].addEventListener("click", deleteListItem);
}
