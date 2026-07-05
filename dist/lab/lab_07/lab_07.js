/*
Bước 2: Render tables blogs
Thực hiện gọi API với fetch (lấy danh sách blogs)
Render động dữ liệu của table html dựa vào javascript và data của api
Tham khảo template table html [tại đây]
JavaScript
const tbody = document.querySelector("#users tbody");

// loop:
tbody.innerHTML += `
<tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
</tr>
`
*/
const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = (await res.json());
    //check lai hinh thu data (joi,zod,...)
    if (data.length) {
        const tbody = document.querySelector("#blogs tbody");
        data.forEach((item, index) => {
            tbody.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.author}</td>
            <td>${item.content}</td>
        </tr>
        `;
        });
    }
    console.log("check data:", data);
};
fetchBlogs();
export {};
