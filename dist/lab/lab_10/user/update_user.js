import { actionClickDelete } from "./delete_user.js";
const actionClickUpdate = (btnElement) => {
    btnElement.addEventListener("click", () => {
        const id = btnElement.getAttribute("data-update-id");
        const name = btnElement.getAttribute("data-name");
        const email = btnElement.getAttribute("data-email");
        //take info on form modal update
        document.getElementById("idUpdate").value = id || "";
        document.getElementById("nameUpdate").value = name || "";
        document.getElementById("emailUpdate").value = email || "";
        //show modal
        //@ts-ignore
        const modal = bootstrap.Modal.getOrCreateInstance("#modalUpdateUser");
        modal.show();
    });
};
const handleUpdateUser = () => {
    const editBtns = document.querySelectorAll(".edit-user");
    editBtns.forEach((btn, index) => {
        actionClickUpdate(btn);
    });
};
const submitModalUpdate = () => {
    const btnUpdate = document.getElementById("btnUpdateUser");
    if (btnUpdate) {
        btnUpdate.addEventListener("click", async () => {
            const idInput = document.getElementById("idUpdate");
            const nameInput = document.getElementById("nameUpdate");
            const emailInput = document.getElementById("emailUpdate");
            const id = idInput.value;
            const name = nameInput.value;
            const email = emailInput.value;
            //call api PUT update user
            const rawResponse = await fetch(`http://localhost:8000/users/${id}`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email }),
            });
            const res = await rawResponse.json();
            //close modal
            //@ts-ignore
            const modalUser = bootstrap.Modal.getOrCreateInstance("#modalUpdateUser");
            modalUser.hide();
            //delete current row depend on data-id
            const oldBtn = document.querySelector(`.delete-user[data-delete-id="${id}"]`);
            if (oldBtn) {
                oldBtn.closest("tr")?.remove();
            }
            //add new row into last table
            const tableBody = document.querySelector("#tableUser tbody");
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
        <td>${res.id}</td>
        <td>${res.name}</td>
        <td>${res.email}</td>
        <td>
          <button class="btn btn-warning edit-user" data-update-id="${res.id}" data-name="${res.name}" data-email="${res.email}">Edit</button>
          <button class="btn btn-danger delete-user" data-delete-id="${res.id}">Delete</button>
        </td>
      `;
            tableBody?.appendChild(newRow);
            //Assign event delete and edit for new row created
            const newDeleteBtn = document.querySelector(`.delete-user[data-delete-id="${res.id}"]`);
            const newEditBtn = document.querySelector(`.edit-user[data-update-id="${res.id}"]`);
            actionClickDelete(newDeleteBtn);
            actionClickUpdate(newEditBtn);
            //show toast
            //@ts-ignore
            const toast = new bootstrap.Toast("#updateUserToast");
            toast.show();
        });
    }
};
export { submitModalUpdate, actionClickUpdate, handleUpdateUser };
