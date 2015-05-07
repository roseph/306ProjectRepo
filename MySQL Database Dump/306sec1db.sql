-- MySQL dump 10.13  Distrib 5.5.41, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	5.5.41-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `admin_number` int(11) NOT NULL,
  `JacCard` char(9) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Phone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`admin_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (2,'111111111','Paul Rose','ur3cadm1n@aol.com',NULL);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dependants`
--

DROP TABLE IF EXISTS `dependants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dependants` (
  `User ID` int(11) NOT NULL,
  `URAC ID` int(11) NOT NULL,
  `Name of Guest` varchar(45) NOT NULL,
  `Relationship to User` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`User ID`,`URAC ID`),
  CONSTRAINT `fk_Dependants/Alumni_User1` FOREIGN KEY (`User ID`) REFERENCES `user` (`User_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dependants`
--

LOCK TABLES `dependants` WRITE;
/*!40000 ALTER TABLE `dependants` DISABLE KEYS */;
/*!40000 ALTER TABLE `dependants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historical_data`
--

DROP TABLE IF EXISTS `historical_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `historical_data` (
  `Room_ID` int(11) NOT NULL,
  `time_weekday` varchar(45) NOT NULL,
  `avg_ppl` int(11) DEFAULT NULL,
  `sets_of_data` int(11) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Room_ID`,`time_weekday`),
  CONSTRAINT `fk_Historical_data_Room1` FOREIGN KEY (`Room_ID`) REFERENCES `room` (`Room_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historical_data`
--

LOCK TABLES `historical_data` WRITE;
/*!40000 ALTER TABLE `historical_data` DISABLE KEYS */;
INSERT INTO `historical_data` VALUES (1,'00 00 Friday',0,1,'00 00'),(1,'00 00 Monday',0,1,'00 00'),(1,'00 00 Saturday',0,1,'00 00'),(1,'00 00 Sunday',0,1,'00 00'),(1,'00 00 Thursday',0,2,'00 00'),(1,'00 00 Tuesday',0,1,'00 00'),(1,'00 00 Wednesday',0,2,'00 00'),(1,'01 00 Friday',0,1,'01 00'),(1,'01 00 Monday',5,1,'01 00'),(1,'01 00 Saturday',0,1,'01 00'),(1,'01 00 Sunday',0,1,'01 00'),(1,'01 00 Thursday',0,2,'01 00'),(1,'01 00 Tuesday',0,1,'01 00'),(1,'01 00 Wednesday',0,2,'01 00'),(1,'02 00 Friday',1,1,'02 00'),(1,'02 00 Monday',1,1,'02 00'),(1,'02 00 Saturday',5,1,'02 00'),(1,'02 00 Sunday',5,1,'02 00'),(1,'02 00 Thursday',5,1,'02 00'),(1,'02 00 Tuesday',5,1,'02 00'),(1,'02 00 Wednesday',5,2,'02 00'),(1,'03 00 Friday',5,1,'03 00'),(1,'03 00 Monday',5,1,'03 00'),(1,'03 00 Saturday',5,1,'03 00'),(1,'03 00 Sunday',5,1,'03 00'),(1,'03 00 Thursday',5,1,'03 00'),(1,'03 00 Tuesday',5,1,'03 00'),(1,'03 00 Wednesday',5,2,'03 00'),(1,'04 00 Friday',5,1,'04 00'),(1,'04 00 Monday',5,1,'04 00'),(1,'04 00 Saturday',5,1,'04 00'),(1,'04 00 Sunday',5,1,'04 00'),(1,'04 00 Thursday',5,1,'04 00'),(1,'04 00 Tuesday',5,1,'04 00'),(1,'04 00 Wednesday',5,2,'04 00'),(1,'05 00 Friday',5,1,'05 00'),(1,'05 00 Monday',5,1,'05 00'),(1,'05 00 Saturday',5,1,'05 00'),(1,'05 00 Sunday',5,1,'05 00'),(1,'05 00 Thursday',5,1,'05 00'),(1,'05 00 Tuesday',5,1,'05 00'),(1,'05 00 Wednesday',5,2,'05 00'),(1,'06 00 Friday',5,1,'06 00'),(1,'06 00 Monday',5,1,'06 00'),(1,'06 00 Saturday',5,1,'06 00'),(1,'06 00 Sunday',5,1,'06 00'),(1,'06 00 Thursday',5,1,'06 00'),(1,'06 00 Tuesday',5,1,'06 00'),(1,'06 00 Wednesday',5,2,'06 00'),(1,'07 00 Friday',5,1,'07 00'),(1,'07 00 Monday',5,1,'07 00'),(1,'07 00 Saturday',5,1,'07 00'),(1,'07 00 Sunday',5,1,'07 00'),(1,'07 00 Thursday',5,1,'07 00'),(1,'07 00 Tuesday',5,1,'07 00'),(1,'07 00 Wednesday',8,2,'07 00'),(1,'08 00 Friday',5,1,'08 00'),(1,'08 00 Monday',5,1,'08 00'),(1,'08 00 Saturday',5,1,'08 00'),(1,'08 00 Sunday',5,1,'08 00'),(1,'08 00 Thursday',7,1,'08 00'),(1,'08 00 Tuesday',5,1,'08 00'),(1,'08 00 Wednesday',7,2,'08 00'),(1,'09 00 Friday',5,1,'09 00'),(1,'09 00 Monday',5,1,'09 00'),(1,'09 00 Saturday',5,1,'09 00'),(1,'09 00 Sunday',5,1,'09 00'),(1,'09 00 Thursday',5,2,'09 00'),(1,'09 00 Tuesday',5,1,'09 00'),(1,'09 00 Wednesday',4,2,'09 00'),(1,'10 00 Friday',5,1,'10 00'),(1,'10 00 Monday',5,1,'10 00'),(1,'10 00 Saturday',5,1,'10 00'),(1,'10 00 Sunday',5,1,'10 00'),(1,'10 00 Thursday',5,1,'10 00'),(1,'10 00 Tuesday',5,1,'10 00'),(1,'10 00 Wednesday',9,2,'10 00'),(1,'11 00 Friday',5,1,'11 00'),(1,'11 00 Monday',5,1,'11 00'),(1,'11 00 Saturday',5,1,'11 00'),(1,'11 00 Sunday',5,1,'11 00'),(1,'11 00 Thursday',5,1,'11 00'),(1,'11 00 Tuesday',5,1,'11 00'),(1,'11 00 Wednesday',10,2,'11 00'),(1,'12 00 Friday',5,1,'12 00'),(1,'12 00 Monday',5,1,'12 00'),(1,'12 00 Saturday',5,1,'12 00'),(1,'12 00 Sunday',5,1,'12 00'),(1,'12 00 Thursday',5,1,'12 00'),(1,'12 00 Tuesday',5,1,'12 00'),(1,'12 00 Wednesday',6,2,'12 00'),(1,'13 00 Friday',5,1,'13 00'),(1,'13 00 Monday',5,1,'13 00'),(1,'13 00 Saturday',5,1,'13 00'),(1,'13 00 Sunday',5,1,'13 00'),(1,'13 00 Thursday',5,1,'13 00'),(1,'13 00 Tuesday',5,1,'13 00'),(1,'13 00 Wednesday',3,2,'13 00'),(1,'14 00 Friday',5,4,'14 00'),(1,'14 00 Monday',5,4,'14 00'),(1,'14 00 Saturday',5,4,'14 00'),(1,'14 00 Sunday',5,4,'14 00'),(1,'14 00 Thursday',5,4,'14 00'),(1,'14 00 Tuesday',5,4,'14 00'),(1,'14 00 Wednesday',5,5,'14 00'),(1,'15 00 Friday',5,1,'15 00'),(1,'15 00 Monday',5,1,'15 00'),(1,'15 00 Saturday',5,1,'15 00'),(1,'15 00 Sunday',5,1,'15 00'),(1,'15 00 Thursday',5,1,'15 00'),(1,'15 00 Tuesday',5,1,'15 00'),(1,'15 00 Wednesday',13,2,'15 00'),(1,'16 00 Friday',5,1,'16 00'),(1,'16 00 Monday',5,1,'16 00'),(1,'16 00 Saturday',5,1,'16 00'),(1,'16 00 Sunday',5,1,'16 00'),(1,'16 00 Thursday',5,1,'16 00'),(1,'16 00 Tuesday',5,1,'16 00'),(1,'16 00 Wednesday',4,2,'16 00'),(1,'17 00 Friday',5,1,'17 00'),(1,'17 00 Monday',5,1,'17 00'),(1,'17 00 Saturday',5,1,'17 00'),(1,'17 00 Sunday',5,1,'17 00'),(1,'17 00 Thursday',5,1,'17 00'),(1,'17 00 Tuesday',5,1,'17 00'),(1,'17 00 Wednesday',4,2,'17 00'),(1,'18 00 Friday',5,1,'18 00'),(1,'18 00 Monday',5,1,'18 00'),(1,'18 00 Saturday',5,1,'18 00'),(1,'18 00 Sunday',5,1,'18 00'),(1,'18 00 Thursday',5,1,'18 00'),(1,'18 00 Tuesday',5,1,'18 00'),(1,'18 00 Wednesday',6,2,'18 00'),(1,'19 00 Friday',5,1,'19 00'),(1,'19 00 Monday',5,1,'19 00'),(1,'19 00 Saturday',5,1,'19 00'),(1,'19 00 Sunday',5,1,'19 00'),(1,'19 00 Thursday',5,1,'19 00'),(1,'19 00 Tuesday',5,1,'19 00'),(1,'19 00 Wednesday',8,2,'19 00'),(1,'20 00 Friday',5,1,'20 00'),(1,'20 00 Monday',5,1,'20 00'),(1,'20 00 Saturday',5,1,'20 00'),(1,'20 00 Sunday',5,1,'20 00'),(1,'20 00 Thursday',5,1,'20 00'),(1,'20 00 Tuesday',5,1,'20 00'),(1,'20 00 Wednesday',7,2,'20 00'),(1,'21 00 Friday',5,1,'21 00'),(1,'21 00 Monday',5,1,'21 00'),(1,'21 00 Saturday',5,1,'21 00'),(1,'21 00 Sunday',5,1,'21 00'),(1,'21 00 Thursday',5,1,'21 00'),(1,'21 00 Tuesday',5,1,'21 00'),(1,'21 00 Wednesday',7,2,'21 00'),(1,'22 00 Friday',5,1,'22 00'),(1,'22 00 Monday',5,1,'22 00'),(1,'22 00 Saturday',5,1,'22 00'),(1,'22 00 Sunday',5,1,'22 00'),(1,'22 00 Thursday',5,1,'22 00'),(1,'22 00 Tuesday',5,1,'22 00'),(1,'22 00 Wednesday',6,2,'22 00'),(1,'23 00 Friday',5,1,'23 00'),(1,'23 00 Monday',5,1,'23 00'),(1,'23 00 Saturday',5,1,'23 00'),(1,'23 00 Sunday',5,1,'23 00'),(1,'23 00 Thursday',5,1,'23 00'),(1,'23 00 Tuesday',5,1,'23 00'),(1,'23 00 Wednesday',5,2,'23 00');
/*!40000 ALTER TABLE `historical_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reservations` (
  `Room_ID` int(11) NOT NULL,
  `DateTime` datetime NOT NULL,
  `User_ID` int(11) NOT NULL,
  `Time` time NOT NULL,
  `Reservation code` varchar(45) NOT NULL,
  `Date` date NOT NULL,
  `Duration` varchar(20) NOT NULL,
  PRIMARY KEY (`Room_ID`,`DateTime`),
  KEY `fk_Room_has_User_Room1_idx` (`Room_ID`),
  CONSTRAINT `fk_Room_has_User_Room1` FOREIGN KEY (`Room_ID`) REFERENCES `room` (`Room_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
INSERT INTO `reservations` VALUES (1,'2015-04-01 15:00:00',123456789,'15:00:00','36677','2015-04-01','30 Minutes'),(1,'2015-04-22 10:00:00',123456789,'10:00:00','89842','2015-04-22','30 Minutes'),(1,'2015-04-23 10:00:00',123456789,'10:00:00','77710','2015-04-23','30 Minutes'),(1,'2015-04-28 10:00:00',123456789,'10:00:00','66002','2015-04-28','30 Minutes'),(1,'2015-04-28 15:00:00',123456789,'15:00:00','82170','2015-04-28','30 Minutes'),(1,'2015-04-28 15:30:00',123456789,'15:30:00','3450','2015-04-28','1 Hour'),(1,'2015-04-28 18:00:00',123456789,'18:00:00','32146','2015-04-28','30 Minutes'),(1,'2015-04-29 13:00:00',123456789,'13:00:00','22059','2015-04-29','30 Minutes'),(1,'2015-05-02 10:30:00',1084,'10:30:00','47032','2015-05-02','1 Hour'),(2,'2015-04-23 09:00:00',123456789,'09:00:00','14174','2015-04-23','30 Minutes'),(2,'2015-04-23 10:00:00',123456789,'10:00:00','33975','2015-04-23','30 Minutes'),(2,'2015-04-28 15:00:00',123456789,'15:00:00','40485','2015-04-28','30 Minutes'),(2,'2015-05-08 13:30:00',18045093,'13:30:00','94435','2015-05-08','1 Hour'),(2,'2015-05-10 10:30:00',108450934,'10:30:00','65109','2015-05-10','1 Hour'),(3,'2015-04-01 15:00:00',123456789,'15:00:00','13267','2015-04-01','30 Minutes'),(3,'2015-04-28 15:00:00',123456789,'15:00:00','9660','2015-04-28','30 Minutes'),(7,'2015-04-25 10:20:00',345678934,'10:20:00','71054','2015-04-25','30 Minutes'),(12,'2015-04-26 04:20:00',-18934509,'04:20:00','39210','2015-04-26','30 Minutes'),(13,'2015-05-08 10:00:00',123456789,'10:00:00','18980','2015-05-08','30 Minutes'),(16,'2015-04-30 19:50:00',-945345123,'19:50:00','58438','2015-04-30','30 Minutes');
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room` (
  `Room_ID` int(11) NOT NULL,
  `Cur_ppl` int(11) DEFAULT NULL,
  `Max_ppl` int(11) NOT NULL,
  `reservable` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Room_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (1,5,40,NULL),(2,2,5,NULL),(3,5,40,NULL),(4,10,20,NULL),(5,10,20,NULL),(6,15,20,NULL),(7,20,35,NULL),(8,20,35,NULL),(9,20,35,NULL),(10,35,40,NULL),(11,20,40,NULL),(12,30,60,NULL),(13,30,40,NULL),(14,50,60,NULL),(15,59,60,NULL),(16,59,60,NULL),(17,25,100,NULL),(18,20,60,NULL),(19,40,60,NULL),(20,55,100,NULL),(21,25,70,NULL),(22,25,100,NULL),(23,25,100,NULL),(24,25,100,NULL),(25,25,100,NULL),(26,50,100,NULL),(27,25,100,NULL),(28,25,100,NULL),(29,99,100,NULL),(30,25,100,NULL);
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `User_ID` int(11) NOT NULL,
  `Status of User` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Needs to pay` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`User_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (123,'good','Noah',NULL),(2147483647,'good','Noah',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-05-07 12:05:18
