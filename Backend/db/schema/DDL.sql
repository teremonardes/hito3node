CREATE DATABASE likeme;

\c likeme;

 CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000),
 descripcion VARCHAR(255), likes INT);

 UPDATE posts SET likes = 0 WHERE likes IS NULL;

ALTER TABLE posts ALTER COLUMN likes SET DEFAULT 0;
ALTER TABLE posts ALTER COLUMN likes SET NOT NULL;