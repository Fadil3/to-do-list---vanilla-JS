// Collect UI element
const todoForm = document.querySelector("#todo-form");

const todoInput = document.querySelector("#todo-input");

const filterInput = document.querySelector("#filter-input");

const todoList = document.querySelector("#todo-list");

const clearButton = document.querySelector("#clear-todos");

init();

function init() {
    //read dari localstorage
    document.addEventListener("DOMContentLoaded", getTodos);

    //event listener untuk add
    todoForm.addEventListener("submit", addTodo);

    //event listener untuk delete 1 todo
    todoList.addEventListener("click", deleteTodo);

    //event listener untuk delete semua todo
    clearButton.addEventListener("click", clearTodos);

    //filter todo
    filterInput.addEventListener("keyup", filterTodos);
}

//DOM function

function getTodos() {
    let todos;

    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach((element) => {
        const li = document.createElement("li");

        // menambahkan atribut class
        li.className =
            "list-group-item d-flex justify-content-between align-items-center mb-1 todo-item";

        //create child di dalam li
        li.appendChild(document.createTextNode(element));

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
    });
}

function addTodo(e) {
    e.preventDefault();

    if (todoInput.value !== "") {
        //create tag li
        const li = document.createElement("li");

        // menambahkan atribut class
        li.className =
            "list-group-item d-flex justify-content-between align-items-center mb-1 todo-item";

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

        addTodoLocalStorage(todoInput.value);

        //mengosongkan input
        todoInput.value = "";
    } else {
        alert("Todo input tidak boleh kosong !!!");
    }
}

function deleteTodo(e) {
    if (e.target.classList.contains("delete-todo")) {
        if (confirm("apakah anda yakin ingin menghapus ?")) {
            const parent = e.target.parentElement;

            parent.remove();
        }
    }
}

function clearTodos() {
    todoList.innerHTML = "";
}

function filterTodos(e) {
    const filterText = e.target.value.toLowerCase();

    const todoItems = document.querySelectorAll(".todo-item");

    todoItems.forEach((element) => {
        const itemText = element.firstChild.textContent.toLowerCase();

        if (itemText.indexOf(filterText) === -1) {
            element.setAttribute("style", "display : none !important;");
        }
    });
}

function addTodoLocalStorage(todoValue) {
    let todos;

    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todoValue);

    localStorage.setItem("todos", JSON.stringify(todos));
}
