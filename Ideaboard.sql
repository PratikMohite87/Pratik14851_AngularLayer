create database ideaboard;

use ideaboard;

create table section (
sectionId int primary key auto_increment,
sectionName varchar(30) default "Enter Title"
);

insert into section values(1,"xyz");



create table messages (
messageId int primary key auto_increment,
message tinytext default "No Message",
sectionId int,
foreign key (sectionId) references section(sectionId)
);

select * from messages;
select * from section;

drop table messages;
drop table section;

desc messages;
desc section;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';