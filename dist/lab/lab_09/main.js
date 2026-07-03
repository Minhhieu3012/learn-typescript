import { getRandomInt } from "./helper.js";
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
        //close modal
        //@ts-ignore
        const createTodoModal = bootstrap.Modal.getOrCreateInstance("#createTodo", {
            keyboard: false,
        });
        createTodoModal.hide();
        //clear todo
        inputElement.value = "";
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
};
