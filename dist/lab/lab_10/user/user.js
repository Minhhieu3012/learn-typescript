import { submitModalCreate } from "./create_user.js";
import { handleDeleteUser } from "./delete_user.js";
import { fetchUsersAndDisplayTable } from "./read_user.js";
fetchUsersAndDisplayTable().then(() => {
    handleDeleteUser();
    handleUpdateUser();
});
submitModalCreate();
submitModalUpdate();
