CREATE DATABASE blogs;
show databases;

CREATE TABLE IF NOT EXISTS blog_table (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    
);

DESCRIBE BLOG_TABLE;
