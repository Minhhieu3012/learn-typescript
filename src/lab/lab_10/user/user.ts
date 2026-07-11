import { submitModalCreate } from "./create_user.js";
import { handleDeleteUser } from "./delete_user.js";
import { fetchUsersAndDisplayTable } from "./read_user.js";
import { handleUpdateUser, submitModalUpdate } from "./update_user.js";

export interface IUser {
  id: number;
  name: string;
  email: string;
}

fetchUsersAndDisplayTable().then(() => {
  handleDeleteUser();
  handleUpdateUser();
});

submitModalCreate();
submitModalUpdate();
