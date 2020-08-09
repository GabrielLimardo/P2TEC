-- MariaDB dump 10.17  Distrib 10.4.13-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: p2tec
-- ------------------------------------------------------
-- Server version	10.4.13-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Componentes','2020-07-15 11:34:38',NULL,NULL),(2,'Notebook','2020-07-15 11:34:38',NULL,NULL),(3,'Monitores','2020-07-15 11:34:38',NULL,NULL),(4,'Perifericos','2020-07-15 11:34:38',NULL,NULL),(5,'PC Streaming','2020-07-15 11:34:38',NULL,NULL),(6,'PC Home Office','2020-07-15 11:34:38',NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `categoryId` int(10) unsigned DEFAULT NULL,
  `image` varchar(30) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Disco Solido Ssd 480 GB',7471,1,'1 (5).jpg','Disco Solido Ssd 480 Gb Kingston A400','2020-07-15 11:34:38','2020-07-25 22:35:12','2020-07-25 22:35:12'),(2,'STREAMING  Y VIDEO  CAPTURADORA GAMING ',16619,4,'1 (1).png','Elgato Capturadora Game Streaming HD 6','2020-07-15 11:34:38',NULL,NULL),(3,'Fuente Cooler Master MWE 500w 80 Plus Bronze',7514,1,'1 (26).jpg','Disco Solido Ssd 480 Gb Kingston A400','2020-07-15 11:34:38',NULL,NULL),(4,'MEMORIA',8274,1,'1 (12).jpg','Memoria Ddr4 16Gb 2400Mhz CL17 (KVR24N17D8/16) Kingston','2020-07-15 11:34:38',NULL,NULL),(5,'Monitor Led AOC 15.6B',7504,3,'1 (37).jpg','Monitor Led AOC 15.6 Wide E1670SWU-E USB (incluye imp interno)','2020-07-15 11:34:38',NULL,NULL),(6,'Monitor Samsung 22',15094,3,'1 (38).jpg','Monitor Samsung 22 Full HD S22F350FH - c/Hdmi','2020-07-15 11:34:38',NULL,NULL),(7,'CONECTIVIDAD SWITCHS',11092,4,'1 (44).jpg','Switch 16-port Tp-Link 10/1000 + 2 Slots SFP Combo 10/1000 (TL-SG2216)','2020-07-15 11:34:38',NULL,NULL),(8,'CONECTIVIDAD SWITCHS 24 PUERTOS',7394,4,'conectividad.jpg','Switch 24 Ports 10/100/1000 TEG1024D Tenda','2020-07-15 11:34:38',NULL,NULL),(9,'CONECTIVIDAD SWITCHS 16 PUERTOS',6669,4,'1 (13).jpg','Switch 16-port Tp-Link 10/1000 (TL-SG1016)R19','2020-07-15 11:34:38',NULL,NULL),(10,'TECLADO GAMER',15357,4,'1 (45).jpg','Teclado Gamer Corsair K70 RGB MK.2 Mechanical Gaming CHERRY® MX Blue','2020-07-15 11:34:38',NULL,NULL),(11,'Notebook Alienware I7',240000,2,'alien.jpg','17r5 Intel Core I7-8750h X6 2.2ghz 16gb 1.1tb 17','2020-07-15 11:34:38',NULL,NULL),(12,'Monitor Gamer Curvo 34',15094,3,'monitorcurvo.jpg','Monitor Ultrawide Ips Gsync Wfhd 144hz 1ms H','2020-07-15 11:34:38',NULL,NULL),(13,'PC Home Office',40261,6,'PC-Oficina-2_800.jpg','Intel Core I3 8100 - H310 - 8GB - 240GB SS','2020-07-15 11:34:38',NULL,NULL),(14,'PC Home Office',39660,6,'PC-Oficina-2_800.jpg','Intel Core I3 9100F - H310 - 8GB - GT 210 - 240GB SS','2020-07-15 11:34:38',NULL,NULL),(15,'PC Home Office',32343,6,'PC-Oficina-2_800.jpg','Intel Pentium G5400 - H310 - 8GB - 240GB SSD','2020-07-15 11:34:38',NULL,NULL),(16,'ACCESS POINT',6954,4,'1 (18).jpg','Sistema Wi-Fi Mesh Tenda Nova MW3 2-pack AC1200','2020-07-15 11:34:38',NULL,NULL),(17,'PC Streaming',82768,5,'PC-Streaming-5_800.jpg','Intel I5 9400 - B365 - 8GB - GTX 1650 S - 1TB','2020-07-15 11:34:38',NULL,NULL),(18,'PC Streaming',108012,5,'PC-Streaming-5_800.jpg','Intel I5 9400 - B365 - 16GB - GTX 1660 Ti - 240GB SSD - 1TB','2020-07-15 11:34:38',NULL,NULL),(19,'PC Streaming',110554,5,'PC-Streaming-5_800.jpg','AMD Ryzen 5 3600 - B450 - 16GB - RX 5600 XT - 240GB SSD - 1T','2020-07-15 11:34:38',NULL,NULL),(20,'Notebook Hp I5',111096,2,'1 (23).jpg','Notebook Hp I5 250 G7 8265U 8GB 1TB 15.6','2020-07-15 11:34:38',NULL,NULL),(21,'Notebook Hp I7',163224,2,'1 (40).jpg','Notebook Hp I7 10510U 8Gb !tb Windows 10 15,6 + GeForece MX 130','2020-07-15 11:34:38',NULL,NULL),(22,'blabla',1231,1,'','asda','2020-07-25 22:35:44','2020-07-25 22:35:50','2020-07-25 22:35:50');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `rol_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`rol_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `username` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `image` varchar(30) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  `rol` int(11) NOT NULL DEFAULT 0,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('belen@gmail.com','belen@gmail.com','$2a$10$SX6Qqs95QXRCeIDWwO236OQ','Grafico.png','2020-08-05 22:27:39','2020-08-05 19:28:05',NULL,1,8);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-09 16:35:15
