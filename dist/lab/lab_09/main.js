import { deleteTodo, removeTodoFromLocalStorage } from "./delete_todo.js";
import { getRandomInt } from "./helper.js";
import { displayTable } from "./table_todo.js";
console.log("Lab 09");
const btnElement = document.getElementById("btnCreateTodo");
btnElement?.addEventListener("click", () => {
    const inputElement = document.getElementById("todoName");
    if (inputElement) {
        const name = inputElement.value;
        //save todo to localStorage
        const newTodo = {
            id: getRandomInt(1, 1000),
            name,
        };
        handleSaveTodoToLocalStorage(newTodo);
        handleAddNewWithJS(newTodo);
        //close modal
        //@ts-ignore
        const createTodoModal = bootstrap.Modal.getOrCreateInstance("#createTodo", {
            keyboard: false,
        });
        createTodoModal.hide();
        //clear todo
        inputElement.value = "";
        //show toast
        //@ts-ignore
        const toast = new bootstrap.Toast("#liveToast");
        toast.show();
    }
});
const handleSaveTodoToLocalStorage = (todo) => {
    //check exist of todo
    const todosStr = localStorage.getItem("todoList");
    if (todosStr) {
        //update
        const todosArr = JSON.parse(todosStr);
        todosArr.push(todo);
        localStorage.setItem("todoList", JSON.stringify(todosArr));
    }
    else {
        //create
        localStorage.setItem("todoList", JSON.stringify([todo]));
    }
    // window.location.reload();
};
const handleAddNewWithJS = (todo) => {
    const tableBody = document.querySelector("#tableTodo tbody");
    const todoListStr = localStorage.getItem("todoList");
    let index = 0;
    if (todoListStr) {
        index = JSON.parse(todoListStr).length - 1;
    }
    //Create element to new row
    const newRow = document.createElement("tr");
    //Assign HTML for this row
    newRow.innerHTML = `
    <tr>
        <th scope="row">${index + 1}</th>
        <td>${todo.id}</td>
        <td>${todo.name}</td>
        <td>
            <button class="btn btn-danger delete-todo" data-id=${todo.id}>Delete</button>
        </td>
    </tr>
  `;
    //Add new row to last table
    tableBody?.appendChild(newRow);
    //Assign click event for row just create
    const btnElement = document.querySelector(`[data-id="${todo.id}"]`);
    btnElement.addEventListener("click", () => {
        const id = btnElement.getAttribute("data-id");
        //delete todo
        if (id) {
            removeTodoFromLocalStorage(+id);
            //delete row with js
            const row = btnElement.closest("tr");
            if (row) {
                row.remove();
            }
        }
    });
};
displayTable();
deleteTodo();
