CREATE DATABASE burgers_db

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id integer(11) auto_increment,
    burger_name varchar(25) not null,
    devoured boolean,
    primary key (id)
);