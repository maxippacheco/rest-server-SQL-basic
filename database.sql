create database library;

create table books(
	section int,
	title text,
	author text
);

insert into books values
	(2, 'Digital Fortress', 'Dan Brown'),
	(3, 'World War z', 'Max Brooks');

create table users(
	username text,
	password text
);

insert into users values
	('john', 'john123'),
	('saymon', 'saymon123'),
	('alex', 'alex123');