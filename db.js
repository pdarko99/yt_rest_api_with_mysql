import mysql from "mysql2";

const client = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "blogs",
  })
  .promise();

export { client };
