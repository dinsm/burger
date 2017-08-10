DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INTEGER AUTO_INCREMENT NOT NULL,
  name VARCHAR(150) NOT NULL,
  devoured BOOLEAN DEFAULT FALSE,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);