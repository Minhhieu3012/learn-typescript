import { ITodo } from "./main.js";

const removeTodoFromLocalStorage = (id: number) => {
  const todoListStr = localStorage.getItem("todoList");
  if (todoListStr) {
    const todoList = JSON.parse(todoListStr) as ITodo[];
    const newList = todoList.filter((todo) => todo.id != id);
    localStorage.setItem("todoList", JSON.stringify(newList));
    // window.location.reload();
  }
};

const deleteTodo = () => {
  const allDeleteBtn = document.querySelectorAll(".delete-todo");
  if (allDeleteBtn) {
    allDeleteBtn.forEach((button, index) => {
      const btnElement = button as HTMLButtonElement;
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

          //show toast
          //@ts-ignore
          const toast = new bootstrap.Toast("#liveToastDelete");

          toast.show();
        }
      });
    });
  }
};

export { deleteTodo, removeTodoFromLocalStorage };
