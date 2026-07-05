const displayTable = () => {
    const tableBody = document.querySelector("#tableTodo tbody");
    const todoListStr = localStorage.getItem("todoList");
    if (todoListStr && tableBody) {
        const todoList = JSON.parse(todoListStr);
        todoList.forEach((todo, index) => {
            tableBody.innerHTML += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${todo.id}</td>
                <td>${todo.name}</td>
                <td>
                    <button class="btn btn-danger delete-todo" data-id=${todo.id}>Delete</button>
                </td>
            </tr>
        `;
        });
    }
    console.log("Table body:", tableBody);
};
export { displayTable };
