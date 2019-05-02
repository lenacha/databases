DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE rooms (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE messages (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  text TEXT NOT NULL,
  user_id TEXT,
  room_id TEXT NOT NULL
  -- FOREIGN KEY (room_id) REFERENCES rooms(id),
  -- FOREIGN KEY (user_id) REFERENCES username(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/