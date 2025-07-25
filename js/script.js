document.getElementById("addBtn").addEventListener("click", addTodo);
document.getElementById("deleteAllBtn").addEventListener("click", deleteAllTodos);

function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const dateInput = document.getElementById("dateInput");
    const todoList = document.getElementById("todoList");

    if (!todoInput.value.trim() || !dateInput.value) {
        alert("Please enter a valid task and due date.");
        return;
    }

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${todoInput.value}</td>
        <td>${dateInput.value}</td>
        <td><button class="status-btn" onclick="toggleStatus(this)">Pending</button></td>
        <td><button onclick="deleteTodo(this)">Delete</button></td>
    `;

    if (todoList.children[0]?.innerHTML === 'No task found') {
        todoList.innerHTML = '';
    }
    
    todoList.appendChild(newRow);
    todoInput.value = '';
    dateInput.value = '';
}

function toggleStatus(button) {
    button.innerText = button.innerText === "Pending" ? "Completed" : "Pending";
}

function deleteTodo(button) {
    button.closest("tr").remove();
    checkEmptyList();
}

function deleteAllTodos() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = '<tr><td colspan="4">NO task found</td></tr>';
}

function checkEmptyList() {
    const todoList = document.getElementById("todoList");
    if (!todoList.children.length) {
        const emptyRow = document.createElement("tr");
        emptyRow.innerHTML = '<td colspan="4">No task found</td>';
        todoList.appendChild(emptyRow);
    }
}
