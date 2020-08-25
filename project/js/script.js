//select elements
const clear = document.querySelector(".clear");
const dateElem = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//set js pseudonim
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";

//variables
let LIST, id;

//get item from localStorage
let data = localStorage.getItem("TODO");

if(data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadToDo(LIST);
} else {
    LIST = [];
    id = 0;
}

//load items to interface
function loadToDo(array) {
    array.forEach(function(item) {
        addToList(item.name, item.id, item.done, item.trash);
    });
}

//clear page
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

//show current date
const options = {weekday:"long", month:"long", day:"numeric", hour:"2-digit", minute:"2-digit"};
const today = new Date();
dateElem.innerHTML = today.toLocaleDateString("en-US", options);

//add to do function
function addToList(elem, id, done, trash) {
    if(trash) {
        return;
    }
    const DONE = done ? CHECK : UNCHECK;

    const text = `<li class="item">
                <i class="fa ${DONE} co" do="complete" id="${id}"></i>
                <p class="text">${elem}</p>
                <i class="fa fa-trash-o de" do="delete" id="${id}"></i>
                </li> 
                `;

    const position = "beforeend";

    list.insertAdjacentHTML(position, text);
}

//add items to the list
document.addEventListener("keyup", function(event) {
    if(event.keyCode == 13) {
        const elem = input.value;
        if(elem) {
            addToList(elem, id, false, false);

            LIST.push({
                name: elem,
                id: id,
                done: false,
                trash: false
             });
            localStorage.setItem("TODO", JSON.stringify(LIST));
            
            id++;
        }  
        input.value = "";
    }
});

//mark item as done
function completeItem(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    
    LIST[element.id].done = LIST[element.id].done ? false : true; 
}

//remove item from the list
function removeItem(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

//target items dinamically
list.addEventListener("click", function(event){
    let elementDo = null;
    const element = event.target; 
    if(element.hasAttribute("do")){
        elementDo = element.attributes.do.value; 
        if(elementDo == "complete") { 
            completeItem(element);
         } else if(elementDo == "delete") {
            removeItem(element);
        }
    } else {
        return;
    }
    localStorage.setItem("TODO", JSON.stringify(LIST));
});
