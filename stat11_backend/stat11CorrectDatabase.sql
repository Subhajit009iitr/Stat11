-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: stat11CorrectDatabase
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add user',6,'add_user'),(22,'Can change user',6,'change_user'),(23,'Can delete user',6,'delete_user'),(24,'Can view user',6,'view_user'),(25,'Can add match',7,'add_match'),(26,'Can change match',7,'change_match'),(27,'Can delete match',7,'delete_match'),(28,'Can view match',7,'view_match'),(29,'Can add player',8,'add_player'),(30,'Can change player',8,'change_player'),(31,'Can delete player',8,'delete_player'),(32,'Can view player',8,'view_player'),(33,'Can add tournament',9,'add_tournament'),(34,'Can change tournament',9,'change_tournament'),(35,'Can delete tournament',9,'delete_tournament'),(36,'Can view tournament',9,'view_tournament'),(37,'Can add team',10,'add_team'),(38,'Can change team',10,'change_team'),(39,'Can delete team',10,'delete_team'),(40,'Can view team',10,'view_team'),(41,'Can add bowler scoreboard',11,'add_bowlerscoreboard'),(42,'Can change bowler scoreboard',11,'change_bowlerscoreboard'),(43,'Can delete bowler scoreboard',11,'delete_bowlerscoreboard'),(44,'Can view bowler scoreboard',11,'view_bowlerscoreboard'),(45,'Can add batter scoreboard',12,'add_batterscoreboard'),(46,'Can change batter scoreboard',12,'change_batterscoreboard'),(47,'Can delete batter scoreboard',12,'delete_batterscoreboard'),(48,'Can view batter scoreboard',12,'view_batterscoreboard');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_stat11_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_stat11_user_id` FOREIGN KEY (`user_id`) REFERENCES `stat11_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'contenttypes','contenttype'),(5,'sessions','session'),(12,'stat11','batterscoreboard'),(11,'stat11','bowlerscoreboard'),(7,'stat11','match'),(8,'stat11','player'),(10,'stat11','team'),(9,'stat11','tournament'),(6,'stat11','user');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2023-04-20 20:39:06.184900'),(2,'contenttypes','0002_remove_content_type_name','2023-04-20 20:39:06.434253'),(3,'auth','0001_initial','2023-04-20 20:39:07.117617'),(4,'auth','0002_alter_permission_name_max_length','2023-04-20 20:39:07.234431'),(5,'auth','0003_alter_user_email_max_length','2023-04-20 20:39:07.247520'),(6,'auth','0004_alter_user_username_opts','2023-04-20 20:39:07.260025'),(7,'auth','0005_alter_user_last_login_null','2023-04-20 20:39:07.277433'),(8,'auth','0006_require_contenttypes_0002','2023-04-20 20:39:07.288432'),(9,'auth','0007_alter_validators_add_error_messages','2023-04-20 20:39:07.303474'),(10,'auth','0008_alter_user_username_max_length','2023-04-20 20:39:07.321403'),(11,'auth','0009_alter_user_last_name_max_length','2023-04-20 20:39:07.337379'),(12,'auth','0010_alter_group_name_max_length','2023-04-20 20:39:07.378545'),(13,'auth','0011_update_proxy_permissions','2023-04-20 20:39:07.402039'),(14,'auth','0012_alter_user_first_name_max_length','2023-04-20 20:39:07.419124'),(15,'stat11','0001_initial','2023-04-20 20:39:10.080208'),(16,'admin','0001_initial','2023-04-20 20:39:10.393547'),(17,'admin','0002_logentry_remove_auto_add','2023-04-20 20:39:10.410610'),(18,'admin','0003_logentry_add_action_flag_choices','2023-04-20 20:39:10.428032'),(19,'sessions','0001_initial','2023-04-20 20:39:10.544396'),(20,'stat11','0002_remove_user_is_admin_alter_batterscoreboard_status','2023-04-20 20:39:10.601255'),(21,'stat11','0003_alter_user_email','2023-04-20 20:39:10.696194'),(22,'stat11','0004_team_bye_team_college_team_legbye_team_noball_and_more','2023-04-20 20:39:12.281555'),(23,'stat11','0005_remove_match_tournament','2023-04-20 20:39:12.443237');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stat11_batterscoreboard`
--

DROP TABLE IF EXISTS `stat11_batterscoreboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stat11_batterscoreboard` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `runs` int NOT NULL,
  `balls` int NOT NULL,
  `fours` int NOT NULL,
  `sixes` int NOT NULL,
  `status` varchar(16) NOT NULL,
  `wicket_type` varchar(16) NOT NULL,
  `entry_time` time(6) DEFAULT NULL,
  `exit_time` time(6) DEFAULT NULL,
  `bowled_out_by_id` bigint DEFAULT NULL,
  `player_id` bigint NOT NULL,
  `team_id` bigint NOT NULL,
  `wicket_taker_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `stat11_batterscoreboard_player_id_530764e6_fk_stat11_player_id` (`player_id`),
  KEY `stat11_batterscoreboard_team_id_702498f2_fk_stat11_team_id` (`team_id`),
  KEY `stat11_batterscorebo_bowled_out_by_id_e2c2207d_fk_stat11_pl` (`bowled_out_by_id`),
  KEY `stat11_batterscorebo_wicket_taker_id_8d0dfabb_fk_stat11_pl` (`wicket_taker_id`),
  CONSTRAINT `stat11_batterscorebo_bowled_out_by_id_e2c2207d_fk_stat11_pl` FOREIGN KEY (`bowled_out_by_id`) REFERENCES `stat11_player` (`id`),
  CONSTRAINT `stat11_batterscorebo_wicket_taker_id_8d0dfabb_fk_stat11_pl` FOREIGN KEY (`wicket_taker_id`) REFERENCES `stat11_player` (`id`),
  CONSTRAINT `stat11_batterscoreboard_player_id_530764e6_fk_stat11_player_id` FOREIGN KEY (`player_id`) REFERENCES `stat11_player` (`id`),
  CONSTRAINT `stat11_batterscoreboard_team_id_702498f2_fk_stat11_team_id` FOREIGN KEY (`team_id`) REFERENCES `stat11_team` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_batterscoreboard`
--

LOCK TABLES `stat11_batterscoreboard` WRITE;
/*!40000 ALTER TABLE `stat11_batterscoreboard` DISABLE KEYS */;
INSERT INTO `stat11_batterscoreboard` VALUES (1,4,3,1,0,'out','catch','03:15:00.000000','03:15:00.000000',21,1,1,21),(2,45,34,4,1,'out','catch','03:15:00.000000','03:15:00.000000',23,2,1,14),(3,20,19,2,0,'out','run_out','03:15:00.000000','03:15:00.000000',NULL,3,1,16),(4,28,19,3,1,'out','catch','03:15:00.000000','03:15:00.000000',24,4,1,13),(5,46,30,3,2,'out','catch','03:15:00.000000','03:15:00.000000',23,5,1,18),(6,27,13,0,3,'out','catch','03:15:00.000000','03:15:00.000000',22,6,1,15),(7,1,1,0,0,'not_out','catch','03:15:00.000000',NULL,NULL,7,1,NULL),(8,1,1,0,0,'out','run_out','03:15:00.000000','03:23:00.000000',NULL,8,1,23),(9,0,0,0,0,'not_out','run_out','03:15:00.000000',NULL,NULL,9,1,NULL),(10,1,7,0,0,'out','catch','03:15:00.000000','03:24:00.000000',4,13,2,2),(11,0,5,0,0,'out','bowled','03:15:00.000000','03:24:00.000000',10,14,2,NULL),(12,26,25,2,2,'out','catch','03:15:00.000000','03:24:00.000000',8,15,2,11),(13,60,32,3,6,'out','catch','03:15:00.000000','03:24:00.000000',12,16,2,5),(14,5,7,0,0,'out','catch','03:15:00.000000','03:24:00.000000',8,17,2,5),(15,56,26,2,5,'not_out','catch','03:15:00.000000',NULL,NULL,18,2,NULL),(16,18,10,2,1,'out','catch','03:15:00.000000','03:32:00.000000',10,19,2,11),(17,10,3,1,1,'out','catch','03:15:00.000000','03:32:00.000000',10,20,2,7),(18,0,1,0,0,'not_out','catch','03:15:00.000000',NULL,NULL,21,2,NULL),(19,51,47,6,0,'out','catch','14:18:00.000000','14:18:00.000000',46,26,3,47),(20,15,10,3,0,'out','catch','14:18:00.000000','14:18:00.000000',44,25,3,42),(21,26,18,5,0,'out','catch','14:18:00.000000','14:18:00.000000',48,27,3,46),(22,2,4,0,0,'out','catch','14:18:00.000000','14:18:00.000000',47,28,3,43),(23,4,4,1,0,'out','lbw','14:18:00.000000','14:18:00.000000',48,31,3,NULL),(24,2,4,0,0,'out','bowled','14:18:00.000000','14:18:00.000000',48,29,3,NULL),(25,54,25,4,5,'out','catch','14:18:00.000000','14:18:00.000000',46,30,3,45),(26,1,3,0,0,'out','catch','14:18:00.000000','14:18:00.000000',46,32,3,42),(27,0,1,0,0,'out','run_out','14:18:00.000000','14:18:00.000000',NULL,33,3,43),(28,5,3,1,0,'out','bowled','14:18:00.000000','14:18:00.000000',47,34,3,NULL),(29,1,1,0,0,'not_out','bowled','14:18:00.000000',NULL,NULL,36,3,NULL),(30,65,45,6,4,'out','catch','14:18:00.000000','14:29:00.000000',36,37,4,32),(31,31,26,6,0,'out','run_out','14:18:00.000000','14:29:00.000000',NULL,38,4,29),(32,41,29,1,4,'out','catch','14:18:00.000000','14:29:00.000000',35,39,4,27),(33,0,1,0,0,'out','catch','14:18:00.000000','14:29:00.000000',35,40,4,33),(34,13,11,0,0,'not_out','catch','14:18:00.000000',NULL,NULL,41,4,NULL),(35,17,8,1,1,'not_out','catch','14:18:00.000000',NULL,NULL,42,4,NULL);
/*!40000 ALTER TABLE `stat11_batterscoreboard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stat11_bowlerscoreboard`
--

DROP TABLE IF EXISTS `stat11_bowlerscoreboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stat11_bowlerscoreboard` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `runs` int NOT NULL,
  `balls` int NOT NULL,
  `wickets` int NOT NULL,
  `maidens` int NOT NULL,
  `status` varchar(10) NOT NULL,
  `entry_time` time(6) DEFAULT NULL,
  `exit_time` time(6) DEFAULT NULL,
  `player_id` bigint NOT NULL,
  `team_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `stat11_bowlerscoreboard_player_id_7d667b9f_fk_stat11_player_id` (`player_id`),
  KEY `stat11_bowlerscoreboard_team_id_5c914019_fk_stat11_team_id` (`team_id`),
  CONSTRAINT `stat11_bowlerscoreboard_player_id_7d667b9f_fk_stat11_player_id` FOREIGN KEY (`player_id`) REFERENCES `stat11_player` (`id`),
  CONSTRAINT `stat11_bowlerscoreboard_team_id_5c914019_fk_stat11_team_id` FOREIGN KEY (`team_id`) REFERENCES `stat11_team` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_bowlerscoreboard`
--

LOCK TABLES `stat11_bowlerscoreboard` WRITE;
/*!40000 ALTER TABLE `stat11_bowlerscoreboard` DISABLE KEYS */;
INSERT INTO `stat11_bowlerscoreboard` VALUES (1,46,24,1,0,'bowling',NULL,NULL,21,2),(2,25,24,2,0,'bowling',NULL,NULL,23,2),(3,32,24,1,0,'bowling',NULL,NULL,22,2),(4,37,24,0,0,'bowling',NULL,NULL,20,2),(5,36,24,1,0,'bowling',NULL,NULL,24,2),(6,25,24,3,1,'bowling',NULL,NULL,10,1),(7,24,24,1,0,'bowling',NULL,NULL,4,1),(8,47,18,0,0,'bowling',NULL,NULL,9,1),(9,46,24,2,0,'bowling',NULL,NULL,8,1),(10,7,12,0,0,'bowling',NULL,NULL,11,1),(11,29,14,1,0,'bowling',NULL,NULL,12,1),(12,23,18,3,0,'bowling',NULL,NULL,46,4),(13,12,6,0,0,'bowling',NULL,NULL,45,4),(14,30,18,0,0,'bowling',NULL,NULL,42,4),(15,43,24,1,0,'bowling',NULL,NULL,44,4),(16,34,22,2,0,'bowling',NULL,NULL,47,4),(17,22,24,3,0,'bowling',NULL,NULL,48,4),(18,7,6,0,0,'bowling',NULL,NULL,39,4),(19,30,12,2,0,'bowling',NULL,NULL,35,3),(20,38,24,1,0,'bowling',NULL,NULL,36,3),(21,35,24,0,0,'bowling',NULL,NULL,34,3),(22,23,24,0,0,'bowling',NULL,NULL,29,3),(23,20,24,0,0,'bowling',NULL,NULL,30,3),(24,23,12,0,0,'bowling',NULL,NULL,33,3);
/*!40000 ALTER TABLE `stat11_bowlerscoreboard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stat11_match`
--

DROP TABLE IF EXISTS `stat11_match`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stat11_match` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_on` date NOT NULL,
  `date` date NOT NULL,
  `time` time(6) NOT NULL,
  `overs_no` int NOT NULL,
  `location` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_match`
--

LOCK TABLES `stat11_match` WRITE;
/*!40000 ALTER TABLE `stat11_match` DISABLE KEYS */;
INSERT INTO `stat11_match` VALUES (1,'2023-04-21','2023-04-07','02:48:00.000000',20,'Narendra Modi Stadium, Ahmedabad'),(2,'2023-04-21','2023-04-14','14:11:00.000000',20,'Arun Jaitley Stadium, Delhi');
/*!40000 ALTER TABLE `stat11_match` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stat11_player`
--

DROP TABLE IF EXISTS `stat11_player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stat11_player` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_on` date NOT NULL,
  `type` varchar(16) NOT NULL,
  `person_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `stat11_player_person_id_f680222a_fk_stat11_user_id` (`person_id`),
  CONSTRAINT `stat11_player_person_id_f680222a_fk_stat11_user_id` FOREIGN KEY (`person_id`) REFERENCES `stat11_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_player`
--

LOCK TABLES `stat11_player` WRITE;
/*!40000 ALTER TABLE `stat11_player` DISABLE KEYS */;
INSERT INTO `stat11_player` VALUES (1,'2023-04-21','batter',1),(2,'2023-04-21','batter',2),(3,'2023-04-21','batter',3),(4,'2023-04-21','all_rounder',4),(5,'2023-04-21','batter',5),(6,'2023-04-21','batter',6),(7,'2023-04-21','batter',7),(8,'2023-04-21','all_rounder',8),(9,'2023-04-21','bowler',9),(10,'2023-04-21','bowler',10),(11,'2023-04-21','bowler',11),(12,'2023-04-21','bowler',12),(13,'2023-04-21','batter',13),(14,'2023-04-21','batter',14),(15,'2023-04-21','batter',15),(16,'2023-04-21','batter',16),(17,'2023-04-21','batter',17),(18,'2023-04-21','batter',18),(19,'2023-04-21','batter',19),(20,'2023-04-21','all_rounder',20),(21,'2023-04-21','bowler',21),(22,'2023-04-21','bowler',22),(23,'2023-04-21','bowler',23),(24,'2023-04-21','bowler',24),(25,'2023-04-21','batter',25),(26,'2023-04-21','batter',26),(27,'2023-04-21','batter',27),(28,'2023-04-21','batter',28),(29,'2023-04-21','all_rounder',29),(30,'2023-04-21','all_rounder',30),(31,'2023-04-21','batter',31),(32,'2023-04-21','batter',32),(33,'2023-04-21','bowler',33),(34,'2023-04-21','bowler',34),(35,'2023-04-21','bowler',35),(36,'2023-04-21','bowler',36),(37,'2023-04-21','batter',37),(38,'2023-04-21','batter',38),(39,'2023-04-21','batter',39),(40,'2023-04-21','batter',40),(41,'2023-04-21','batter',41),(42,'2023-04-21','all_rounder',42),(43,'2023-04-21','batter',43),(44,'2023-04-21','all_rounder',44),(45,'2023-04-21','bowler',45),(46,'2023-04-21','bowler',46),(47,'2023-04-21','bowler',47),(48,'2023-04-21','bowler',48);
/*!40000 ALTER TABLE `stat11_player` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stat11_team`
--

DROP TABLE IF EXISTS `stat11_team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stat11_team` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `flag` varchar(255) DEFAULT NULL,
  `toss` tinyint(1) NOT NULL,
  `turn` tinyint(1) NOT NULL,
  `match_id` bigint NOT NULL,
  `bye` int NOT NULL,
  `college` varchar(255) NOT NULL,
  `legbye` int NOT NULL,
  `noball` int NOT NULL,
  `wide` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `stat11_team_match_id_57558b09_fk_stat11_match_id` (`match_id`),
  CONSTRAINT `stat11_team_match_id_57558b09_fk_stat11_match_id` FOREIGN KEY (`match_id`) REFERENCES `stat11_match` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_team`
--

LOCK TABLES `stat11_team` WRITE;
/*!40000 ALTER TABLE `stat11_team` DISABLE KEYS */;
INSERT INTO `stat11_team` VALUES (1,'Gujarat Titans','',0,1,1,0,'',1,0,4),(2,'Rajasthan Royals','',1,0,1,0,'',1,0,2),(3,'Delhi Capitals','',0,1,2,0,'',1,2,8),(4,'Mumbai Indians','',1,0,2,0,'',4,0,2);
/*!40000 ALTER TABLE `stat11_team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stat11_team_players`
--

DROP TABLE IF EXISTS `stat11_team_players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stat11_team_players` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `team_id` bigint NOT NULL,
  `player_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `stat11_team_players_team_id_player_id_11d8d5c2_uniq` (`team_id`,`player_id`),
  KEY `stat11_team_players_player_id_98bbb948_fk_stat11_player_id` (`player_id`),
  CONSTRAINT `stat11_team_players_player_id_98bbb948_fk_stat11_player_id` FOREIGN KEY (`player_id`) REFERENCES `stat11_player` (`id`),
  CONSTRAINT `stat11_team_players_team_id_ee1692e6_fk_stat11_team_id` FOREIGN KEY (`team_id`) REFERENCES `stat11_team` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_team_players`
--

LOCK TABLES `stat11_team_players` WRITE;
/*!40000 ALTER TABLE `stat11_team_players` DISABLE KEYS */;
INSERT INTO `stat11_team_players` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,1,6),(7,1,7),(8,1,8),(9,1,9),(10,1,10),(11,1,11),(12,1,12),(13,2,13),(14,2,14),(15,2,15),(16,2,16),(17,2,17),(18,2,18),(19,2,19),(20,2,20),(21,2,21),(22,2,22),(23,2,23),(24,2,24),(30,3,25),(31,3,26),(32,3,27),(33,3,28),(34,3,29),(35,3,30),(36,3,31),(25,3,32),(26,3,33),(27,3,34),(28,3,35),(29,3,36),(37,4,37),(38,4,38),(39,4,39),(40,4,40),(41,4,41),(42,4,42),(43,4,43),(44,4,44),(45,4,45),(46,4,46),(47,4,47),(48,4,48);
/*!40000 ALTER TABLE `stat11_team_players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stat11_tournament`
--

DROP TABLE IF EXISTS `stat11_tournament`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stat11_tournament` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `start` date DEFAULT NULL,
  `end` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_tournament`
--

LOCK TABLES `stat11_tournament` WRITE;
/*!40000 ALTER TABLE `stat11_tournament` DISABLE KEYS */;
/*!40000 ALTER TABLE `stat11_tournament` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stat11_user`
--

DROP TABLE IF EXISTS `stat11_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stat11_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(255) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `date_joined` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `stat11_user_email_42a48647_uniq` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_user`
--

LOCK TABLES `stat11_user` WRITE;
/*!40000 ALTER TABLE `stat11_user` DISABLE KEYS */;
INSERT INTO `stat11_user` VALUES (1,'qwerty',NULL,0,'ws18','Wriddhiman','Saha','ws18@gmail.com',0,0,'','2023-04-21'),(2,'qwerty',NULL,0,'sg18','Shubhman','Gill','sg18@gmail.com',0,0,'','2023-04-21'),(3,'qwerty',NULL,0,'ss18','Sai','Sudharsan','ss18@gmail.com',0,0,'','2023-04-21'),(4,'qwerty',NULL,0,'hp18','Hardik','Pandya','hp18@gmail.com',0,0,'','2023-04-21'),(5,'qwerty',NULL,0,'dm18','David','Miller','dm18@gmail.com',0,0,'','2023-04-21'),(6,'qwerty',NULL,0,'am18','Abhinav','Manohar','am18@gmail.com',0,0,'','2023-04-21'),(7,'qwerty',NULL,0,'rt18','Rahul','Tewatia','rt18@gmail.com',0,0,'','2023-04-21'),(8,'qwerty',NULL,0,'rk18','Rashid','Khan','rk18@gmail.com',0,0,'','2023-04-21'),(9,'qwerty',NULL,0,'aj18','Alzarri','Joseph','aj18@gmail.com',0,0,'','2023-04-21'),(10,'qwerty',NULL,0,'ms18','Mohammed','Shami','ms18@gmail.com',0,0,'','2023-04-21'),(11,'qwerty',NULL,0,'ms118','Mohit','Sharma','ms118@gmail.com',0,0,'','2023-04-21'),(12,'qwerty',NULL,0,'na18','Noor','Ahmad','na18@gmail.com',0,0,'','2023-04-21'),(13,'qwerty',NULL,0,'yj18','Yashasvi','Jaiswal','yj18@gmail.com',0,0,'','2023-04-21'),(14,'qwerty',NULL,0,'jb18','Jos','Buttler','jb18@gmail.com',0,0,'','2023-04-21'),(15,'qwerty',NULL,0,'dp18','Devdutt','Paddikal','dp18@gmail.com',0,0,'','2023-04-21'),(16,'qwerty',NULL,0,'ss118','Sanju','Samson','ss118@gmail.com',0,0,'','2023-04-21'),(17,'qwerty',NULL,0,'rp18','Riyan','Parag','rp18@gmail.com',0,0,'','2023-04-21'),(18,'qwerty',NULL,0,'sh18','Shimron','Hetmyer','sh18@gmail.com',0,0,'','2023-04-21'),(19,'qwerty',NULL,0,'dj18','Dhruv','Jurel','dj18@gmail.com',0,0,'','2023-04-21'),(20,'qwerty',NULL,0,'ra18','Ravichandran','Ashwin','ra18@gmail.com',0,0,'','2023-04-21'),(21,'qwerty',NULL,0,'tb18','Trent','Boult','tb18@gmail.com',0,0,'','2023-04-21'),(22,'qwerty',NULL,0,'az18','Adam','Zampa','az18@gmail.com',0,0,'','2023-04-21'),(23,'qwerty',NULL,0,'ss218','Sandeep','Sharma','ss218@gmail.com',0,0,'','2023-04-21'),(24,'qwerty',NULL,0,'yc18','Yuzvendra','Chahal','yc18@gmail.com',0,0,'','2023-04-21'),(25,'qwerty',NULL,0,'ps18','Prithvi','Shaw','ps18@gmail.com',0,0,'','2023-04-21'),(26,'qwerty',NULL,0,'dw18','David','Warner','dw18@gmail.com',0,0,'','2023-04-21'),(27,'qwerty',NULL,0,'mp18','Manish','Pandey','mp18@gmail.com',0,0,'','2023-04-21'),(28,'qwerty',NULL,0,'yd18','Yash','Dhull','yd18@gmail.com',0,0,'','2023-04-21'),(29,'qwerty',NULL,0,'ly18','Lalit','Yadav','ly18@gmail.com',0,0,'','2023-04-21'),(30,'qwerty',NULL,0,'ap18','Axar','Patel','ap18@gmail.com',0,0,'','2023-04-21'),(31,'qwerty',NULL,0,'rp118','Rovman','Powell','rp118@gmail.com',0,0,'','2023-04-21'),(32,'qwerty',NULL,0,'ap118','Abhishek','Porel','ap118@gmail.com',0,0,'','2023-04-21'),(33,'qwerty',NULL,0,'ky18','Kuldeep','Yadav','ky18@gmail.com',0,0,'','2023-04-21'),(34,'qwerty',NULL,0,'an18','Anrich','Nortje','an18@gmail.com',0,0,'','2023-04-21'),(35,'qwerty',NULL,0,'mk18','Mukesh','Kumar','mk18@gmail.com',0,0,'','2023-04-21'),(36,'qwerty',NULL,0,'mr18','Mustafizur','Rehman','mr18@gmail.com',0,0,'','2023-04-21'),(37,'qwerty',NULL,0,'rs18','Rohit','Sharma','rs18@gmail.com',0,0,'','2023-04-21'),(38,'qwerty',NULL,0,'ik18','Ishan','Kishan','ik18@gmail.com',0,0,'','2023-04-21'),(39,'qwerty',NULL,0,'tv18','Tilak','Verma','tv18@gmail.com',0,0,'','2023-04-21'),(40,'qwerty',NULL,0,'sy18','Suryakumar','Yadav','sy18@gmail.com',0,0,'','2023-04-21'),(41,'qwerty',NULL,0,'td18','Tim','David','td18@gmail.com',0,0,'','2023-04-21'),(42,'qwerty',NULL,0,'cd18','Cameron','Green','cg18@gmail.com',0,0,'','2023-04-21'),(43,'qwerty',NULL,0,'nw18','Nehal','Wadhera','nw18@gmail.com',0,0,'','2023-04-21'),(44,'qwerty',NULL,0,'hs18','Hrithik','Shokeen','hs18@gmail.com',0,0,'','2023-04-21'),(45,'qwerty',NULL,0,'ak18','Arshad','Khan','ak18@gmail.com',0,0,'','2023-04-21'),(46,'qwerty',NULL,0,'jb118','Jason','Behrendorff','jb118@gmail.com',0,0,'','2023-04-21'),(47,'qwerty',NULL,0,'rm118','Riley','Meredith','rm118@gmail.com',0,0,'','2023-04-21'),(48,'qwerty',NULL,0,'pc18','Piyush','Chawla','pc18@gmail.com',0,0,'','2023-04-21');
/*!40000 ALTER TABLE `stat11_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stat11_user_groups`
--

DROP TABLE IF EXISTS `stat11_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stat11_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `stat11_user_groups_user_id_group_id_f111f11b_uniq` (`user_id`,`group_id`),
  KEY `stat11_user_groups_group_id_68df7708_fk_auth_group_id` (`group_id`),
  CONSTRAINT `stat11_user_groups_group_id_68df7708_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `stat11_user_groups_user_id_5b9e58f5_fk_stat11_user_id` FOREIGN KEY (`user_id`) REFERENCES `stat11_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_user_groups`
--

LOCK TABLES `stat11_user_groups` WRITE;
/*!40000 ALTER TABLE `stat11_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `stat11_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stat11_user_user_permissions`
--

DROP TABLE IF EXISTS `stat11_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stat11_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `stat11_user_user_permissions_user_id_permission_id_d53a4af9_uniq` (`user_id`,`permission_id`),
  KEY `stat11_user_user_per_permission_id_39b3c1f2_fk_auth_perm` (`permission_id`),
  CONSTRAINT `stat11_user_user_per_permission_id_39b3c1f2_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `stat11_user_user_permissions_user_id_bfe9c594_fk_stat11_user_id` FOREIGN KEY (`user_id`) REFERENCES `stat11_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_user_user_permissions`
--

LOCK TABLES `stat11_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `stat11_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `stat11_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-21 14:45:44
