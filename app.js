// Collect UI element
const todoForm = document.querySelector("#todo-form");

const todoInput = document.querySelector("#todo-input");

const filterInput = document.querySelector("#filter-input");

const todoList = document.querySelector("#todo-list");

const clearButton = document.querySelector("#clear-todos");

todoForm.addEventListener("submit", addTodo);

todoList.addEventListener("click", deleteTodo);

function addTodo(e) {
    e.preventDefault();

    //create tag li
    const li = document.createElement("li");

    // menambahkan atribut class
    li.className =
        "list-group-item d-flex justify-content-between align-items-center mb-1";

    //create child di dalam li
    li.appendChild(document.createTextNode(todoInput.value));

    //membuat tag a
    const a = document.createElement("a");

    // menambahkan atribut

    a.href = "#";

    a.className = "badge badge-danger delete-todo";

    a.innerHTML = "Delete";

    // memasukkan elemen a kedalam li

    li.appendChild(a);

    //memasukkan elemen li kedalam li
    todoList.appendChild(li);

    // console.log(li);
}

function deleteTodo(e) {
    if (e.target.classList.contains("delete-todo")) {
        const parent = e.target.parentElement;

        parent.remove();
    }
}
