var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var del = document.querySelectorAll('.deleteItem');
var list = document.querySelectorAll("li");
var listAdd = document.createElement("li");
var buttonCreate = document.createElement('button');
 
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var listAdd = document.createElement("li");
	var buttonCreate = document.createElement('button');
	listAdd.addEventListener("click", liClick);
	buttonCreate.addEventListener("click", delItem);
    listAdd.appendChild(document.createTextNode(input.value));
    listAdd.innerHTML = listAdd.innerHTML + " ";
	buttonCreate.appendChild(document.createTextNode("Delete"));
	buttonCreate.className = "Delete";
	listAdd.appendChild(buttonCreate);
	ul.appendChild(listAdd);
	input.value = "";
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function liClick(){	
  this.classList.toggle("done");
}

function delItem() {
  var ul = document.querySelector("ul");
  ul.removeChild(ul.lastElementChild);

}

var buttons = document.getElementsByTagName('button')[0];
    for (var i=0; i < button.length; i++) {
        buttons[i].addEventListener('click', deleteItem);
    };


var list = document.getElementsByTagName("li");
for(var i=0; i<list.length; i++){
 list[i].addEventListener("click", liClick);
}
 

del.forEach(function(item) {
item.addEventListener('click', function() {
    var li = this.parentNode
    li.remove()
  })
})



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

