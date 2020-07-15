CREATE DATABASE P2TEC;

USE P2TEC;

CREATE TABLE categories (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY ,
name VARCHAR(30),
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
deletedAt DATETIME); 

CREATE TABLE products (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY , 
name VARCHAR(100), 
price INT,
categoryId INT UNSIGNED, 
image VARCHAR(30),
 descripcion VARCHAR(100), 
 createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
deletedAt DATETIME);

CREATE TABLE users (
username VARCHAR(30),
email VARCHAR(30),
password VARCHAR(30),
image VARCHAR(30), 
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
deletedAt DATETIME);


ALTER TABLE products
ADD FOREIGN KEY (categoryId) REFERENCES categories(id);


INSERT INTO categories(name) VALUES ('Componentes');
INSERT INTO categories(name) VALUES ('Notebook'); 
INSERT INTO categories(name) VALUES ('Monitores'); 
INSERT INTO categories(name) VALUES ('Perifericos');
INSERT INTO categories(name) VALUES ('PC Streaming'); 
INSERT INTO categories(name) VALUES ('PC Home Office'); 



INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('Disco Solido Ssd 480 GB', 7471, 1 ,"1 (5).jpg", "Disco Solido Ssd 480 Gb Kingston A400");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ("STREAMING  Y VIDEO  CAPTURADORA GAMING ", 16619, 4 ,"1 (1).png", "Elgato Capturadora Game Streaming HD 6");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('Fuente Cooler Master MWE 500w 80 Plus Bronze', 7514, 1 ,"1 (26).jpg", "Disco Solido Ssd 480 Gb Kingston A400");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('MEMORIA', 8274, 1 ,"1 (12).jpg", "Memoria Ddr4 16Gb 2400Mhz CL17 (KVR24N17D8/16) Kingston");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('Monitor Led AOC 15.6B', 7504, 3 ,"1 (37).jpg", "Monitor Led AOC 15.6 Wide E1670SWU-E USB (incluye imp interno)");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('Monitor Samsung 22', 15094, 3,"1 (38).jpg", "Monitor Samsung 22 Full HD S22F350FH - c/Hdmi");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('CONECTIVIDAD SWITCHS', 11092, 4 ,"1 (44).jpg", "Switch 16-port Tp-Link 10/1000 + 2 Slots SFP Combo 10/1000 (TL-SG2216)");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('CONECTIVIDAD SWITCHS 24 PUERTOS', 7394, 4 ,"conectividad.jpg", "Switch 24 Ports 10/100/1000 TEG1024D Tenda");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('CONECTIVIDAD SWITCHS 16 PUERTOS', 6669, 4 ,"1 (13).jpg", "Switch 16-port Tp-Link 10/1000 (TL-SG1016)R19");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('TECLADO GAMER', 15357, 4 ,"1 (45).jpg", "Teclado Gamer Corsair K70 RGB MK.2 Mechanical Gaming CHERRY® MX Blue");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('Notebook Alienware I7', 240000, 2 ,"alien.jpg", "17r5 Intel Core I7-8750h X6 2.2ghz 16gb 1.1tb 17");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('Monitor Gamer Curvo 34', 15094, 3 ,"monitorcurvo.jpg", "Monitor Ultrawide Ips Gsync Wfhd 144hz 1ms H");
INSERT INTO products(name,price, categoryId, image,descripcion)	VALUES ('PC Home Office', 40261, 6 ,"PC-Oficina-2_800.jpg", "Intel Core I3 8100 - H310 - 8GB - 240GB SS");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('PC Home Office', 39660, 6 ,"PC-Oficina-2_800.jpg", "Intel Core I3 9100F - H310 - 8GB - GT 210 - 240GB SS");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('PC Home Office', 32343, 6 ,"PC-Oficina-2_800.jpg", "Intel Pentium G5400 - H310 - 8GB - 240GB SSD");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('ACCESS POINT', 6954, 4 ,"1 (18).jpg", "Sistema Wi-Fi Mesh Tenda Nova MW3 2-pack AC1200");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('PC Streaming', 82768, 5 ,"PC-Streaming-5_800.jpg", "Intel I5 9400 - B365 - 8GB - GTX 1650 S - 1TB");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('PC Streaming', 108012, 5 ,"PC-Streaming-5_800.jpg", "Intel I5 9400 - B365 - 16GB - GTX 1660 Ti - 240GB SSD - 1TB");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('PC Streaming', 110554, 5 ,"PC-Streaming-5_800.jpg", "AMD Ryzen 5 3600 - B450 - 16GB - RX 5600 XT - 240GB SSD - 1T");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('Notebook Hp I5', 111096, 2 ,"1 (23).jpg", "Notebook Hp I5 250 G7 8265U 8GB 1TB 15.6");
INSERT INTO products(name,price, categoryId, image,descripcion) VALUES ('Notebook Hp I7', 163224, 2 ,"1 (40).jpg", "Notebook Hp I7 10510U 8Gb !tb Windows 10 15,6 + GeForece MX 130");



