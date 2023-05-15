LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/GITHUB/techman/docs/dados/perfis.csv"
INTO TABLE perfil
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/GITHUB/techman/docs/dados/usuarios.csv"
INTO TABLE usuario
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/GITHUB/techman/docs/dados/equipamentos.csv"
INTO TABLE equipamento
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/GITHUB/techman/docs/dados/comentarios.csv"
INTO TABLE comentario
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from perfil;
select * from usuario;
select * from equipamento;
select * from comentario;