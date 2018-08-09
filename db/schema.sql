CREATE DATABASE burgers_db

USE burgers_db;

CREATE TABLE burgers;

INSERT INTO burgers (
    id integer(11) auto_increment,
    burger_name varchar(25) not null,
    devoured boolean,
    primary key (id)
);