import { submitModalCreate } from "./create_post.js";
import { handleDeletePost } from "./delete_post.js";
import { fetchPostsAndDisplayTable } from "./read_post.js";
import { handleUpdatePost, submitModalUpdate } from "./update_post.js";
fetchPostsAndDisplayTable().then(() => {
    handleDeletePost();
    handleUpdatePost();
});
submitModalCreate();
submitModalUpdate();
