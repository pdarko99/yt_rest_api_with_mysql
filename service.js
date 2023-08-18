import { client } from "./db.js";

const updateBlogLogic = async (id, data) => {
  const update = await client.query(
    "UPDATE blog_table SET title = ?,  descripion = ? WHERE id = ?",
    [data.title, data.description, id]
  );
  return update;
};

const createBloglogic = async (data) => {
  const [blog] = await client.query(
    "INSERT INTO blog_table (title, descripion) VALUES (?,?)",
    [data.title, data.description]
  );
  console.log(blog);
  return blog.insertId;
};

const getBlogsLogic = async () => {
  const [blogs] = await client.query("SELECT * FROM blog_table");
  return blogs;
};

const getBlogByIdLogic = async (id) => {
  const result = await client.query("SELECT * FROM blog_table WHERE id = ?", [
    id,
  ]);

  return result[0];
};

const deleteBlogLogic = async (id) => {
  await client.query("DELETE FROM blog_table WHERE id = ?", [id]);
};

export {
  updateBlogLogic,
  createBloglogic,
  getBlogsLogic,
  deleteBlogLogic,
  getBlogByIdLogic,
};
