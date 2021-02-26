// selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

const addTodo = (e) => {
  e.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const todoLi = document.createElement("li");
  todoLi.innerText = "hey";
  todoLi.classList.add("todo-item");
  todoDiv.appendChild(todoLi);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check" ></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash" ></i>';
  deleteButton.classList.add("complete-btn");
  todoDiv.appendChild(deleteButton);

  todoList.appendChild(todoDiv);
  console.log(todoList);
};

todoButton.addEventListener("click", addTodo);
