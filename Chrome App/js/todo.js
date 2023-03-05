const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDO => toDO.id !== parseInt(li.id));
  saveToDos()
}

function paintToDo(newToDo){
  const newList = document.createElement("li")
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button")
  button.innerText = "x"
  button.addEventListener("click", deleteToDo);
  newList.appendChild(span);
  newList.appendChild(button);
  toDoList.appendChild(newList);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newToDo,
    id: Date.now()
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) { 
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo);
}


function coolFilter(){

}