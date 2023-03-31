USE prova102;
flush privileges;

USE prova102;

SELECT * FROM studenti;
SELECT * FROM materie;
SELECT * FROM eventi;

CREATE TABLE studenti(
login_id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50),
password VARCHAR(256),
email VARCHAR(50)
);

INSERT INTO studenti (username, password, email)
VALUES ('Joseph', 321, 'joseph@gmail.com');
INSERT INTO studenti (username, password, email)
VALUES ('Eva', 654, 'eva@gmail.com');
INSERT INTO studenti (username, password, email)
VALUES ('Atena', 456, 'Atena@gmail.com');
INSERT INTO studenti (username, password, email)
VALUES ('Diana', 456, 'Diana@gmail.com');
INSERT INTO studenti (username, password, email)
VALUES ('Leo', 987, 'Leo@gmail.com');
INSERT INTO studenti (username, password, email)
VALUES ('Ettore', 0, 'Ettore@gmail.com');
INSERT INTO studenti (username, password, email)
VALUES ('Blues', 111, 'Blues@gmail.com');
INSERT INTO studenti (username, password, email)
VALUES ('Giorgio', 333, 'giorgio@gmail.com');
INSERT INTO studenti (username, password, email)
VALUES ('Hope', 123, 'hope@gmail.com');
INSERT INTO studenti (username, password, email)
INSERT INTO studenti (username, password, email)
VALUES ('Stephen', 123, 'stephen@gmail.com');
INSERT INTO studenti (username, password, email)
VALUES ('Usef', 999, 'usef@gmail.com');

UPDATE studenti SET password=SHA2('321',  512) WHERE username='Joseph' AND login_id > 0
UPDATE studenti SET password=SHA2('654',  512) WHERE username='Eva' AND login_id > 0
UPDATE studenti SET password=SHA2('456',  512) WHERE username='Atena' AND login_id > 0
UPDATE studenti SET password=SHA2('456',  512) WHERE username='Diana' AND login_id > 0
UPDATE studenti SET password=SHA2('987',  512) WHERE username='Leo' AND login_id > 0
UPDATE studenti SET password=SHA2('0',  512) WHERE username='Ettore' AND login_id > 0
UPDATE studenti SET password=SHA2('111',  512) WHERE username='Blues' AND login_id > 0
UPDATE studenti SET password=SHA2('333',  512) WHERE username='Giorgio' AND login_id > 0
UPDATE studenti SET password=SHA2('123',  512) WHERE username='Hope' AND login_id > 0

CREATE TABLE materie(
materie_id INT AUTO_INCREMENT PRIMARY KEY,
subject VARCHAR(40),
teacher VARCHAR(40)
);

INSERT INTO materie( subject, teacher)
Values ('Matematica', 'Fardin');
INSERT INTO materie(subject, teacher)
VALUES ('Italiano', 'Francesca');
INSERT INTO materie(subject, teacher)
VALUES ('Manutenzione', 'Marco');
INSERT INTO materie(subject, teacher)
VALUES ('Storia', 'Christian');
INSERT INTO materie(subject, teacher)
VALUES ('Scienze', 'Filippo');

CREATE TABLE eventi(
eventi_id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50),
teacher VARCHAR(40),
subject VARCHAR(40),
Date DATE NOT NULL,
description varchar(256)
);

INSERT INTO eventi(username, subject, teacher, date, description)
VALUES (Hope, Fardin, Matematica, '2023-03-25', verifica sul teorema di pitagora);



