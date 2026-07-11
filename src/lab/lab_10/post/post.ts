import { submitModalCreate } from "./create_post.js";
import { handleDeletePost } from "./delete_post.js";
import { fetchPostsAndDisplayTable } from "./read_post.js";
import { handleUpdatePost, submitModalUpdate } from "./update_post.js";

export interface IPost {
  id: number;
  title: string;
  content: string;
}

fetchPostsAndDisplayTable().then(() => {
  handleDeletePost();
  handleUpdatePost();
});

submitModalCreate();
submitModalUpdate();
