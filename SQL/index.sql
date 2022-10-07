CREATE TABLE pokemon (
    id serial PRIMARY KEY ,
    pokedexnumber int,
    name varchar(150),
    img varchar (350),
    type1 varchar (150),
    type2 varchar (150),
    weight int,
    height int,
    move1 varchar (300),
    move2 varchar (300),
    details varchar (500),
    hp int,
    atk int,
    def int,
    satk int,
    sdef int,
    spd int
)

CREATE TABLE users (
username varchar(30),
password varchar(30)
)
