const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const taskCount = document.getElementById("task-count");
const emptyMessage = document.getElementById("empty-message");
const clearButton = document.getElementById("clear-button");

function updateTasks() {
  const total = todoList.children.length;
  const remaining = todoList.querySelectorAll(
    "li:not(.completed)"
  ).length;

  taskCount.textContent = `${total} tasks • ${remaining} remaining`;
  emptyMessage.style.display = total === 0 ? "block" : "none";
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = todoInput.value.trim();

  if (taskText === "") {
    todoInput.focus();
    return;
  }

  // Create a new list item using JavaScript
  const li = document.createElement("li");

  // Create the task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Mark task as completed when clicked
  span.addEventListener("click", function () {
    li.classList.toggle("completed");
    updateTasks();
  });

  // Create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-button";
  deleteButton.type = "button";

  deleteButton.addEventListener("click", function () {
    li.remove();
    updateTasks();
  });

  // Append children to li
  li.appendChild(span);
  li.appendChild(deleteButton);

  // Append li to ul
  todoList.appendChild(li);

  todoInput.value = "";
  todoInput.focus();

  updateTasks();
});

clearButton.addEventListener("click", function () {
  todoList.innerHTML = "";
  updateTasks();
});

updateTasks();
