const renderTable = (data) => {
    const tbody = document.querySelector("#tablePost tbody");
    if (tbody) {
        data.forEach((post, index) => {
            tbody.innerHTML += `
        <tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.content}</td>
            <td>
              <button 
                class="btn btn-warning edit-post"
                data-update-id="${post.id}"
                data-title="${post.title}"
                data-content="${post.content}"
              >Edit</button>
              <button 
                class="btn btn-danger delete-post"
                data-delete-id="${post.id}"
              >Delete</button>
            </td>
        </tr>
    `;
        });
    }
};
const fetchPostsAndDisplayTable = async () => {
    const res = await fetch(" http://localhost:8000/post");
    const data = (await res.json());
    renderTable(data);
};
export { fetchPostsAndDisplayTable };
