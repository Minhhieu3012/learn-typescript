"use strict";
const renderTable = (data) => {
    const tbody = document.querySelector("#tableBlog tbody");
    if (tbody) {
        data.forEach((blog, index) => {
            tbody.innerHTML += `
            <tr>
              <td>${blog.id}</td>
              <td>${blog.title}</td>
              <td>${blog.author}</td>
              <td>${blog.content}</td>
              <td>
                <button class="btn btn-warning">Edit</button>
                <button class="btn btn-danger">Delete</button>
              </td>
            </tr>
        `;
        });
    }
};
const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = (await res.json());
    renderTable(data);
};
const addNewRowWithJS = (blog) => {
    const tableBody = document.querySelector("#tableBlog tbody");
    //create each new element
    const newRow = document.createElement("tr");
    //assign html for each line
    newRow.innerHTML = `
    <tr>
        <td>${blog.id}</td>
        <td>${blog.title}</td>
        <td>${blog.author}</td>
        <td>${blog.content}</td>
        <td>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
        </td>
    </tr>
  `;
    //add line to last table
    tableBody?.appendChild(newRow);
    //add onClick event for new row created
    //todo
};
const handleCreateBlog = () => {
    const btnCreate = document.getElementById("btnCreateBlog");
    if (btnCreate) {
        btnCreate.addEventListener("click", async () => {
            const titleInput = document.getElementById("title");
            const authorInput = document.getElementById("author");
            const contentInput = document.getElementById("content");
            const title = titleInput.value;
            const author = authorInput.value;
            const content = contentInput.value;
            if (!title && !author && !content) {
                alert("Empty inputs...");
                return;
            }
            //call create api
            const rawResponse = await fetch("http://localhost:8000/blogs", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, author, content }),
            });
            const res = await rawResponse.json();
            console.log("check res:", res);
            //add new row with js
            addNewRowWithJS(res);
            //close modal
            //@ts-ignore
            const modalBlog = bootstrap.Modal.getOrCreateInstance("#modalBlog", {
                keyboard: false,
            });
            modalBlog.hide();
            //show toast
            //@ts-ignore
            const toast = new bootstrap.Toast("#createBlogToast");
            toast.show();
            //clear input
            titleInput.value = "";
            authorInput.value = "";
            contentInput.value = "";
        });
    }
};
fetchBlogs();
handleCreateBlog();
