import { actionClickDelete } from "./delete_post.js";
const actionClickUpdate = (btnElement) => {
    btnElement.addEventListener("click", () => {
        const id = btnElement.getAttribute("data-update-id");
        const title = btnElement.getAttribute("data-title");
        const content = btnElement.getAttribute("data-content");
        //take info on form modal update
        document.getElementById("idUpdate").value = id || "";
        document.getElementById("titleUpdate").value = title || "";
        document.getElementById("contentUpdate").value = content || "";
        //show modal
        //@ts-ignore
        const modal = bootstrap.Modal.getOrCreateInstance("#modalUpdatePost");
        modal.show();
    });
};
const handleUpdatePost = () => {
    const editBtns = document.querySelectorAll(".edit-post");
    editBtns.forEach((btn, index) => {
        actionClickUpdate(btn);
    });
};
const submitModalUpdate = () => {
    const btnUpdate = document.getElementById("btnUpdatePost");
    if (btnUpdate) {
        btnUpdate.addEventListener("click", async () => {
            const idInput = document.getElementById("idUpdate");
            const titleInput = document.getElementById("titleUpdate");
            const contentInput = document.getElementById("contentUpdate");
            const id = idInput.value;
            const title = titleInput.value;
            const content = contentInput.value;
            //call api PUT update post
            const rawResponse = await fetch(`http://localhost:8000/post/${id}`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, content }),
            });
            const res = await rawResponse.json();
            //close modal
            //@ts-ignore
            const modalPost = bootstrap.Modal.getOrCreateInstance("#modalUpdatePost");
            modalPost.hide();
            //delete current row depend on data-id
            const oldBtn = document.querySelector(`.delete-post[data-delete-id="${id}"]`);
            if (oldBtn) {
                oldBtn.closest("tr")?.remove();
            }
            //add new row into last table
            const tableBody = document.querySelector("#tablePost tbody");
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
        <td>${res.id}</td>
        <td>${res.title}</td>
        <td>${res.content}</td>
        <td>
          <button class="btn btn-warning edit-post" data-update-id="${res.id}" data-title="${res.title}" data-content="${res.content}">Edit</button>
          <button class="btn btn-danger delete-post" data-delete-id="${res.id}">Delete</button>
        </td>
      `;
            tableBody?.appendChild(newRow);
            //Assign event delete and edit for new row created
            const newDeleteBtn = document.querySelector(`.delete-post[data-delete-id="${res.id}"]`);
            const newEditBtn = document.querySelector(`.edit-post[data-update-id="${res.id}"]`);
            actionClickDelete(newDeleteBtn);
            actionClickUpdate(newEditBtn);
            //show toast
            //@ts-ignore
            const toast = new bootstrap.Toast("#updatePostToast");
            toast.show();
        });
    }
};
export { actionClickUpdate, handleUpdatePost, submitModalUpdate };
