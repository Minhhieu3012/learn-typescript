const renderTable = (data) => {
    const tbody = document.querySelector("#tableUser tbody");
    if (tbody) {
        data.forEach((user, index) => {
            tbody.innerHTML += `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
              <button 
                class="btn btn-warning edit-user"
                data-update-id="${user.id}"
                data-name="${user.name}"
                data-email="${user.email}"
              >Edit</button>
              <button 
                class="btn btn-danger delete-user"
                data-delete-id="${user.id}"
              >Delete</button>
            </td>
          </tr>
      `;
        });
    }
};
const fetchUsersAndDisplayTable = async () => {
    const res = await fetch("https://localhost:8000/users");
    const data = (await res.json());
    renderTable(data);
};
export { fetchUsersAndDisplayTable };
