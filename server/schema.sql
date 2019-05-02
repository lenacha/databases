DROP DATABASE Pokemonster;
CREATE DATABASE Pokemonster;

USE Pokemonster;

CREATE TABLE trainers (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL
);

CREATE TABLE types (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  type TEXT NOT NULL
);

CREATE TABLE pokemon (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  type_id INTEGER,
  trainer_id INTEGER,
  FOREIGN KEY (type_id) REFERENCES types(id),
  FOREIGN KEY (trainer_id) REFERENCES trainers(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/