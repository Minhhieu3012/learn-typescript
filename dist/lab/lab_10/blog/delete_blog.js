const actionDelete = (btnElement) => {
    btnElement.addEventListener("click", async () => {
        const id = btnElement.getAttribute("data-id");
        if (id) {
            //call delete api
            await fetch(`http://localhost:8000/blogs/${id}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            //remove row
            const row = btnElement.closest("tr");
            if (row) {
                row.remove();
            }
            //show toast
            //@ts-ignore
            const toast = new bootstrap.Toast("#deleteBlogToast");
            toast.show();
        }
    });
};
const handleDeleteBlog = () => {
    const deleteBtns = document.querySelectorAll(".delete-blog");
    console.log("run handleDeleteBlog", deleteBtns);
    if (deleteBtns) {
        deleteBtns.forEach((btn, index) => {
            const btnElement = btn;
            actionDelete(btnElement);
        });
    }
};
export { actionDelete, handleDeleteBlog };
