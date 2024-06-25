drop database if exists customer;

create database customer;

use customer;

create table users (
  id int auto_increment primary key,
  name varchar(255),
  email varchar(255) unique,
  age int
);

insert into users (name, email, age)
values ('Kenny', 'kenny@poo.com', 25);