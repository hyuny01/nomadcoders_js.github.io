const todoForm = document.querySelector(".today-list form");
const todoThings = todoForm.querySelector("input")
const todoUl = document.querySelector(".today-list ul")
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deletLi(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function madeList(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  li.appendChild(span);
  const btn = document.createElement("button");
  btn.innerText = "ⓧ"
  li.appendChild(btn);
  todoUl.appendChild(li);
  btn.addEventListener("click", deletLi);
}

function setList(event){
  event.preventDefault();
  const newTodo = todoThings.value;
  todoThings.value = "";
  const newTodoObj = {
    "text": newTodo,
    "id": Date.now()
  }
  toDos.push(newTodoObj);
  madeList(newTodoObj);
  saveToDos();
}
todoForm.addEventListener("submit", setList);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(madeList)
}