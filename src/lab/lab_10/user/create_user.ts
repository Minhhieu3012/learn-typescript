import { actionClickDelete } from "./delete_user.js";
import { actionClickUpdate } from "./update_user.js";
import { IUser } from "./user.js";

const addNewRowWithJS = (user: IUser) => {
  const tableBody = document.querySelector("#tableUser tbody");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>
      <button class="btn btn-warning edit-user" data-update-id="${user.id}" data-name="${user.name}" data-email="${user.email}">Edit</button>
      <button class="btn btn-danger delete-user" data-delete-id="${user.id}">Delete</button>
    </td>
  `;
  tableBody?.appendChild(newRow);

  //Assign delete event for new line
  const btnDeleteElement = document.querySelector(`.delete-user[data-delete-id="${user.id}"]`) as HTMLButtonElement;
  if (btnDeleteElement) {
    actionClickDelete(btnDeleteElement);
  }

  //Assign edit event for new line
  const btnEditElement = document.querySelector(`.edit-user[data-update-id="${user.id}"]`) as HTMLButtonElement;
  if (btnEditElement) {
    actionClickUpdate(btnEditElement);
  }
};

const submitModalCreate = () => {
  const btnCreate = document.getElementById("btnCreateUser");
  if (btnCreate) {
    btnCreate.addEventListener("click", async () => {
      const nameInput = document.getElementById("nameCreate") as HTMLInputElement;
      const emailInput = document.getElementById("emailCreate") as HTMLInputElement;

      const name = nameInput.value;
      const email = emailInput.value;

      if (!name || !email) {
        alert("Please fill in the information Name and Email...");
        return;
      }

      //call api POST create new user
      const rawResponse = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const res: IUser = await rawResponse.json();
      addNewRowWithJS(res);

      //close modal
      //@ts-ignore
      const modalCreate = bootstrap.Modal.getOrCreateInstance("#modalCreateUser");
      modalCreate.hide();

      //show toast
      //@ts-ignore
      const toast = new bootstrap.Toast("#createUserToast");
      toast.show();

      //Reset form
      nameInput.value = "";
      emailInput.value = "";
    });
  }
};

export { addNewRowWithJS, submitModalCreate };
