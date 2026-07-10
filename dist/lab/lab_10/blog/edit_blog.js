import { actionDelete } from "./delete_blog.js";
const actionEdit = (btnElement) => {
    btnElement.addEventListener("click", () => {
        //take info from data attribute
        const id = btnElement.getAttribute("data-update-id");
        const title = btnElement.getAttribute("data-title");
        const author = btnElement.getAttribute("data-author");
        const content = btnElement.getAttribute("data-content");
        //assign initial value for each input on edit modal
        document.getElementById("idUpdate").value = id || "";
        document.getElementById("titleUpdate").value = title || "";
        document.getElementById("authorUpdate").value = author || "";
        document.getElementById("contentUpdate").value = content || "";
        //show modal
        //@ts-ignore
        const modal = bootstrap.Modal.getOrCreateInstance("#modalUpdateBlog");
        modal.show();
    });
};
const handleBindEditButtons = () => {
    const editBtns = document.querySelectorAll(".edit-blog");
    editBtns.forEach((btn, index) => {
        actionEdit(btn);
    });
};
const handleUpdateBlog = () => {
    const btnUpdate = document.getElementById("btnUpdateBlog");
    if (btnUpdate) {
        btnUpdate.addEventListener("click", async () => {
            //take info fill in form
            const idInput = document.getElementById("idUpdate");
            const titleInput = document.getElementById("titleUpdate");
            const authorInput = document.getElementById("authorUpdate");
            const contentInput = document.getElementById("contentUpdate");
            const id = idInput.value;
            const title = titleInput.value;
            const author = authorInput.value;
            const content = contentInput.value;
            //call api put to update blog
            const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, author, content }),
            });
            const res = await rawResponse.json();
            //close modal
            //@ts-ignore
            const modalBlog = bootstrap.Modal.getOrCreateInstance("#modalUpdateBlog");
            modalBlog.hide();
            //delete current row depend on data-id
            const oldBtn = document.querySelector(`.delete-blog[data-id="${id}"]`);
            if (oldBtn) {
                oldBtn.closest("tr")?.remove();
            }
            //add new row into last table
            const tableBody = document.querySelector("#tableBlog tbody");
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
        <td>${res.id}</td>
        <td>${res.title}</td>
        <td>${res.author}</td>
        <td>${res.content}</td>
        <td>
            <button class="btn btn-warning edit-blog" data-update-id="${res.id}" data-title="${res.title}" data-author="${res.author}" data-content="${res.content}">Edit</button>
            <button class="btn btn-danger delete-blog" data-id="${res.id}">Delete</button>
        </td>
      `;
            tableBody?.appendChild(newRow);
            //Assign event delete and edit for new row created
            const newDeleteBtn = document.querySelector(`.delete-blog[data-id="${res.id}"]`);
            const newEditBtn = document.querySelector(`.edit-blog[data-update-id="${res.id}"]`);
            actionDelete(newDeleteBtn);
            actionEdit(newEditBtn);
            //show toast
            //@ts-ignore
            const toast = new bootstrap.Toast("#updateBlogToast");
            toast.show();
        });
    }
};
export { actionEdit, handleBindEditButtons, handleUpdateBlog };
