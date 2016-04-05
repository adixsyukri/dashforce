-- MySQL dump 10.13  Distrib 5.7.10, for Linux (x86_64)
--
-- Host: localhost    Database: dashforce
-- ------------------------------------------------------
-- Server version	5.5.5-10.0.17-MariaDB-log

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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` int(15) NOT NULL AUTO_INCREMENT,
  `perm_level` varchar(15) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `created_by` varchar(8) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_by` varchar(15) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'p1','admin@dashforce.com','5f4dcc3b5aa765d61d8327deb882cf99','1','2016-01-31 19:49:00',NULL,NULL),(2,'p3','aidil@dashforce.com','5f4dcc3b5aa765d61d8327deb882cf99','1','2016-02-14 08:41:00',NULL,NULL),(3,'p4','sya@dashforce.com','5f4dcc3b5aa765d61d8327deb882cf99','1','2016-02-14 08:42:00',NULL,NULL),(4,'p4','linda@dashforce.com','5f4dcc3b5aa765d61d8327deb882cf99','1','2016-02-14 08:59:00',NULL,NULL),(5,'p4','rafika@dashforce.com','5f4dcc3b5aa765d61d8327deb882cf99','1','2016-02-14 09:01:00',NULL,NULL),(6,'p2','dashforce-admin@dashforce.com','5f4dcc3b5aa765d61d8327deb882cf99','1','2016-02-14 09:02:00',NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_perm`
--

DROP TABLE IF EXISTS `user_perm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_perm` (
  `data_id` int(15) NOT NULL AUTO_INCREMENT,
  `perm_id` varchar(15) DEFAULT NULL,
  `perm_group` varchar(100) DEFAULT NULL,
  `perm_desc` text,
  `recorded_by` varchar(15) DEFAULT NULL,
  `recorded_date` datetime DEFAULT NULL,
  `updated_by` varchar(15) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`data_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_perm`
--

LOCK TABLES `user_perm` WRITE;
/*!40000 ALTER TABLE `user_perm` DISABLE KEYS */;
INSERT INTO `user_perm` VALUES (1,'p1','Admin','Administrator - Super user privileges','1','2016-02-14 00:00:00',NULL,NULL),(2,'p2','Management','Dashboard Privileges / Approval','1','2016-02-14 00:00:00',NULL,NULL),(3,'p3','Finance','Account Control / Supervisor Privileges','1','2016-02-14 00:00:00',NULL,NULL),(4,'p4','Staff','Transaction Privileges Level','1','2016-02-14 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `user_perm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profile`
--

DROP TABLE IF EXISTS `user_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_profile` (
  `data_id` int(15) NOT NULL AUTO_INCREMENT,
  `user_id` int(15) DEFAULT NULL,
  `firstname` varchar(150) DEFAULT NULL,
  `lastname` varchar(150) DEFAULT NULL,
  `idno` varchar(12) DEFAULT NULL,
  `registered_date` date DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` char(6) DEFAULT NULL,
  `home_address` text,
  `mobile_phone` varchar(25) DEFAULT NULL,
  `home_phone` varchar(25) DEFAULT NULL,
  `recorded_by` varchar(15) DEFAULT NULL,
  `recorded_date` datetime DEFAULT NULL,
  `updated_by` varchar(15) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`data_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile`
--

LOCK TABLES `user_profile` WRITE;
/*!40000 ALTER TABLE `user_profile` DISABLE KEYS */;
INSERT INTO `user_profile` VALUES (1,4,'Haslinda','Aziz','781112053446','2016-01-31','1978-11-12','FEMALE','CYBERJAYA, SELANGOR','+0138567211','+6033856721','1','2016-02-14 00:00:00',NULL,NULL),(2,2,'Aidil','Mohammed','710512036731','2016-03-07','1971-05-12','MALE','CHERAS, SELANGOR','+0146543987','+6037654321','1','2016-03-07 00:00:00',NULL,NULL),(3,3,'Sya','Azhar','900228917332','2016-03-07','1990-02-28','FEMALE','JOHOR BAHRU, JOHOR','+0143456789','+6037896782','1','2016-03-07 00:00:00',NULL,NULL),(4,5,'Rafika','Razak','921125104332','2016-03-07','1992-11-25','FEMALE','KUALA SELANGOR, SELANGOR','+0123891221','+6037861122','1','2016-03-07 00:00:00',NULL,NULL),(5,6,'dashforce','Admin #1','','2016-03-07','0000-00-00','','KUALA SELANGOR, SELANGOR','+0124561002','+6038716100','1','2016-03-07 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `user_profile` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-03-25 16:40:29
