import { actionClickDelete } from "./delete_post.js";
import { IPost } from "./post.js";
import { actionClickUpdate } from "./update_post.js";

const addNewRowWithJS = (post: IPost) => {
  const tableBody = document.querySelector("#tablePost tbody");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${post.id}</td>
    <td>${post.title}</td>
    <td>${post.content}</td>
    <td>
      <button class="btn btn-warning edit-post" data-update-id="${post.id}" data-title="${post.title}" data-content="${post.content}">Edit</button>
      <button class="btn btn-danger delete-post" data-delete-id="${post.id}">Delete</button>
    </td>
  `;
  tableBody?.appendChild(newRow);

  //Assign delete event for new line
  const btnDeleteElement = document.querySelector(`.delete-post[data-delete-id="${post.id}"]`) as HTMLButtonElement;
  if (btnDeleteElement) {
    actionClickDelete(btnDeleteElement);
  }

  //Assign edit event for new line
  const btnEditElement = document.querySelector(`.edit-post[data-update-id="${post.id}"]`) as HTMLButtonElement;
  if (btnEditElement) {
    actionClickUpdate(btnEditElement);
  }
};

const submitModalCreate = () => {
  const btnCreate = document.getElementById("btnCreatePost");
  if (btnCreate) {
    btnCreate.addEventListener("click", async () => {
      const titleInput = document.getElementById("titleCreate") as HTMLInputElement;
      const contentInput = document.getElementById("contentCreate") as HTMLInputElement;

      const title = titleInput.value;
      const content = contentInput.value;

      if (!title || !content) {
        alert("Please fill in the information Title and Content...");
        return;
      }

      //call api POST create new post
      const rawResponse = await fetch("http://localhost:8000/post", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      const res: IPost = await rawResponse.json();
      addNewRowWithJS(res);

      //close modal
      //@ts-ignore
      const modalCreate = bootstrap.Modal.getOrCreateInstance("#modalCreatePost");
      modalCreate.hide();

      //show toast
      //@ts-ignore
      const toast = new bootstrap.Toast("#createPostToast");
      toast.show();

      //Reset form
      titleInput.value = "";
      contentInput.value = "";
    });
  }
};

export { addNewRowWithJS, submitModalCreate };
