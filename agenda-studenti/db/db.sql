USE prova102;
SELECT * FROM studenti;
SELECT * FROM materie;
SELECT * FROM eventi;

CREATE TABLE studenti(
login_id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50),
password VARCHAR(50),
email VARCHAR(50)
);

INSERT INTO prova (username, password, email)
VALUES ('Stephen', 123, 'stephen@gmail.com');
INSERT INTO prova (username, password, email)
VALUES ('Joseph', 321, 'joseph@gmail.com');
INSERT INTO prova (username, password, email)
VALUES ('Eva', 654, 'eva@gmail.com');
INSERT INTO prova (username, password, email)
VALUES ('Atena', 456, 'atena@gmail.com');
INSERT INTO prova (username, password, email)
VALUES ('Diana', 789, 'diana@gmail.com');
INSERT INTO prova (username, password, email)
VALUES ('Leo', 987, 'leo@gmail.com');
INSERT INTO prova (username, password, email)
VALUES ('Ettore', 0, 'ettore@gmail.com');
INSERT INTO prova (username, password, email)
VALUES ('Blues', 111, 'blues@gmail.com');
INSERT INTO prova (username, password, email)
VALUES ('Hope', 222, 'hope@gmail.com');

CREATE TABLE materie(
materie_id INT AUTO_INCREMENT PRIMARY KEY,
subject VARCHAR(40),
teacher VARCHAR(40)
);

INSERT INTO materie( subject, teacher)
Values ('Matematica', 'Fardin');
INSERT INTO materi(subject, teacher)
VALUES ('Italiano', 'Francesca');
INSERT INTO materi(subject, teacher)
VALUES ('Manutenzione', 'Marco');
INSERT INTO materi(subject, teacher)
VALUES ('Storia', 'Christian');
INSERT INTO materi(subject, teacher)
VALUES ('Scienze', 'Filippo');

CREATE TABLE eventi(
eventi_id INT NOT NULL AUTO_INCREMENT,
Date DATE NOT NULL,
description VARCHAR(40)
);

INSERT INTO eventi(date, description)
VALUES ('2023-03-20', riunione);
INSERT INTO eventi(date, description)
VALUES ('2023-03-25', partita);


