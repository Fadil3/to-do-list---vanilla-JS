// Collect UI element
const todoForm = document.querySelector("#todo-form");

const todoInput = document.querySelector("#todo-input");

const filterInput = document.querySelector("#filter-input");

const todoList = document.querySelector("#todo-list");

const clearButton = document.querySelector("#clear-todos");

todoForm.addEventListener("submit", addTodo);

todoList.addEventListener("click", deleteTodo);

clearButton.addEventListener("click", clearTodos);

filterInput.addEventListener("keyup", filterTodos);

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
