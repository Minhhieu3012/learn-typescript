const actionClickDelete = (btnElement: HTMLButtonElement) => {
  btnElement.addEventListener("click", async () => {
    const id = btnElement.getAttribute("data-delete-id");
    if (id) {
      //call api
      await fetch(`http://localhost:8000/users/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      //delete line to table
      const row = btnElement.closest("tr");
      if (row) row.remove();

      //show toast
      //@ts-ignore
      const toast = new bootstrap.Toast("#deleteUserToast");
      toast.show();
    }
  });
};

const handleDeleteUser = () => {
  const deleteBtns = document.querySelectorAll(".delete-user");
  deleteBtns.forEach((btn) => {
    actionClickDelete(btn as HTMLButtonElement);
  });
};

export { actionClickDelete, handleDeleteUser };
