drop table fuser;
drop table fcard;
drop table collections;

create table collections(
col_id number(5) primary key,
col_subject varchar2(100) not null
);

create table fuser(
user_id number(5) primary key,
user_name varchar2(50) unique,
names varchar2(75),
passcode varchar2(50) not null
);

create table fcard(
card_id number(5) primary key,
card_que varchar(500) not null,
card_ans varchar(500) not null,
card_rating number(5),
col_id number(5),
CONSTRAINT fk_collection FOREIGN KEY (col_id) REFERENCES collections(col_id)
);

