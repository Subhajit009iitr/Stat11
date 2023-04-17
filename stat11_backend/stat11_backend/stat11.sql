-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: stat11
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2023-04-16 05:49:27.699176'),(2,'contenttypes','0002_remove_content_type_name','2023-04-16 05:49:27.853858'),(3,'auth','0001_initial','2023-04-16 05:49:28.558526'),(4,'auth','0002_alter_permission_name_max_length','2023-04-16 05:49:28.664595'),(5,'auth','0003_alter_user_email_max_length','2023-04-16 05:49:28.675906'),(6,'auth','0004_alter_user_username_opts','2023-04-16 05:49:28.691608'),(7,'auth','0005_alter_user_last_login_null','2023-04-16 05:49:28.705607'),(8,'auth','0006_require_contenttypes_0002','2023-04-16 05:49:28.729604'),(9,'auth','0007_alter_validators_add_error_messages','2023-04-16 05:49:28.746246'),(10,'auth','0008_alter_user_username_max_length','2023-04-16 05:49:28.759663'),(11,'auth','0009_alter_user_last_name_max_length','2023-04-16 05:49:28.776030'),(12,'auth','0010_alter_group_name_max_length','2023-04-16 05:49:28.810222'),(13,'auth','0011_update_proxy_permissions','2023-04-16 05:49:28.828734'),(14,'auth','0012_alter_user_first_name_max_length','2023-04-16 05:49:28.843156'),(15,'stat11','0001_initial','2023-04-16 05:49:31.012177'),(16,'admin','0001_initial','2023-04-16 05:49:31.293798'),(17,'admin','0002_logentry_remove_auto_add','2023-04-16 05:49:31.308329'),(18,'admin','0003_logentry_add_action_flag_choices','2023-04-16 05:49:31.325368'),(19,'sessions','0001_initial','2023-04-16 05:49:31.420838'),(20,'stat11','0002_remove_user_is_admin_alter_batterscoreboard_status','2023-04-16 05:49:31.488986'),(21,'stat11','0003_alter_user_email','2023-04-16 05:49:31.573256'),(22,'stat11','0004_team_bye_team_college_team_legbye_team_noball_and_more','2023-04-16 05:49:31.914582'),(23,'stat11','0004_alter_batterscoreboard_balls_and_more','2023-04-17 11:45:40.452513'),(24,'stat11','0005_alter_batterscoreboard_bowled_out_by_and_more','2023-04-17 11:45:42.151875');
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_batterscoreboard`
--

LOCK TABLES `stat11_batterscoreboard` WRITE;
/*!40000 ALTER TABLE `stat11_batterscoreboard` DISABLE KEYS */;
INSERT INTO `stat11_batterscoreboard` VALUES (1,61,44,4,4,'out','catch','16:25:00.000000','16:26:00.000000',23,1,1,16),(2,79,46,5,5,'not_out','catch','16:25:00.000000','16:26:00.000000',23,2,1,16),(3,59,29,3,6,'out','bowled','16:25:00.000000','16:26:00.000000',20,3,1,16),(4,1,1,0,0,'not_out','bowled','16:25:00.000000','16:26:00.000000',20,4,1,16),(5,0,3,0,0,'out','bowled','16:25:00.000000','16:26:00.000000',10,12,2,16),(6,18,20,1,0,'out','catch','16:25:00.000000','16:26:00.000000',10,13,2,1),(7,9,10,1,0,'out','catch','16:25:00.000000','16:26:00.000000',8,14,2,4),(8,0,2,0,0,'out','catch','16:25:00.000000','16:26:00.000000',8,15,2,4),(9,65,30,6,5,'out','catch','16:25:00.000000','16:26:00.000000',11,16,2,6),(10,62,19,4,7,'out','catch','16:25:00.000000','16:26:00.000000',10,17,2,6),(11,30,24,4,0,'out','bowled','16:25:00.000000','16:26:00.000000',8,18,2,6),(12,9,7,1,0,'out','catch','16:25:00.000000','16:26:00.000000',9,19,2,2),(13,1,2,0,0,'out','bowled','16:25:00.000000','16:26:00.000000',9,20,2,2),(14,3,2,0,0,'not_out','bowled','16:25:00.000000','16:26:00.000000',9,21,2,2),(15,0,1,0,0,'not_out','bowled','16:25:00.000000','16:26:00.000000',9,22,2,2);
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_bowlerscoreboard`
--

LOCK TABLES `stat11_bowlerscoreboard` WRITE;
/*!40000 ALTER TABLE `stat11_bowlerscoreboard` DISABLE KEYS */;
INSERT INTO `stat11_bowlerscoreboard` VALUES (1,27,12,0,0,'idle','16:05:00.000000','16:05:00.000000',19,2),(2,53,24,0,0,'idle','16:05:00.000000','16:05:00.000000',22,2),(3,35,24,0,0,'idle','16:05:00.000000','16:05:00.000000',15,2),(4,32,24,0,1,'idle','16:05:00.000000','16:05:00.000000',20,2),(5,39,24,0,0,'idle','16:05:00.000000','16:05:00.000000',21,2),(6,18,12,1,0,'idle','16:05:00.000000','16:05:00.000000',23,2),(7,22,24,3,0,'idle','16:15:00.000000','16:15:00.000000',10,1),(8,32,24,0,0,'idle','16:15:00.000000','16:15:00.000000',7,1),(9,41,24,3,0,'idle','16:15:00.000000','16:15:00.000000',8,1),(10,48,24,2,0,'idle','16:15:00.000000','16:15:00.000000',9,1),(11,48,18,1,0,'idle','16:15:00.000000','16:15:00.000000',11,1),(12,15,6,0,0,'idle','16:15:00.000000','16:15:00.000000',6,1);
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
  `tournament_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `stat11_match_tournament_id_14b22e4f_fk_stat11_tournament_id` (`tournament_id`),
  CONSTRAINT `stat11_match_tournament_id_14b22e4f_fk_stat11_tournament_id` FOREIGN KEY (`tournament_id`) REFERENCES `stat11_tournament` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_match`
--

LOCK TABLES `stat11_match` WRITE;
/*!40000 ALTER TABLE `stat11_match` DISABLE KEYS */;
INSERT INTO `stat11_match` VALUES (1,'2023-04-16','2023-04-16','15:56:00.000000',20,'M. Chinnaswamy Stadium, Bengaluru',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_player`
--

LOCK TABLES `stat11_player` WRITE;
/*!40000 ALTER TABLE `stat11_player` DISABLE KEYS */;
INSERT INTO `stat11_player` VALUES (1,'2023-04-16','batter',1),(2,'2023-04-16','batter',2),(3,'2023-04-16','batter',3),(4,'2023-04-16','batter',4),(5,'2023-04-16','batter',5),(6,'2023-04-16','all_rounder',6),(7,'2023-04-16','all_rounder',7),(8,'2023-04-16','all_rounder',8),(9,'2023-04-16','all_rounder',9),(10,'2023-04-16','bowler',10),(11,'2023-04-16','bowler',11),(12,'2023-04-16','batter',12),(13,'2023-04-16','batter',13),(14,'2023-04-16','all_rounder',14),(15,'2023-04-16','all_rounder',15),(16,'2023-04-16','all_rounder',16),(17,'2023-04-16','batter',17),(18,'2023-04-16','batter',18),(19,'2023-04-16','bowler',19),(20,'2023-04-16','bowler',20),(21,'2023-04-16','bowler',21),(22,'2023-04-16','bowler',22),(23,'2023-04-16','bowler',23);
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_team`
--

LOCK TABLES `stat11_team` WRITE;
/*!40000 ALTER TABLE `stat11_team` DISABLE KEYS */;
INSERT INTO `stat11_team` VALUES (1,'Royal Challengers Bangalore','',0,1,1,0,'',8,0,4),(2,'Lucknow Super Giants','',1,0,1,1,'',6,0,9);
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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_team_players`
--

LOCK TABLES `stat11_team_players` WRITE;
/*!40000 ALTER TABLE `stat11_team_players` DISABLE KEYS */;
INSERT INTO `stat11_team_players` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,1,6),(7,1,7),(8,1,8),(9,1,9),(10,1,10),(11,1,11),(12,2,12),(13,2,13),(14,2,14),(15,2,15),(16,2,16),(17,2,17),(18,2,18),(19,2,19),(20,2,20),(21,2,21),(22,2,22),(23,2,23);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_tournament`
--

LOCK TABLES `stat11_tournament` WRITE;
/*!40000 ALTER TABLE `stat11_tournament` DISABLE KEYS */;
INSERT INTO `stat11_tournament` VALUES (1,'Indian Premier League','2023-04-16','2023-04-17');
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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat11_user`
--

LOCK TABLES `stat11_user` WRITE;
/*!40000 ALTER TABLE `stat11_user` DISABLE KEYS */;
INSERT INTO `stat11_user` VALUES (1,'qwerty','2023-04-16 15:34:00.000000',0,'vk18','Virat','Kohli','vk18@gmail.com',0,1,'','2023-04-16'),(2,'qwerty','2023-04-16 15:34:00.000000',0,'fdp18','Faf','du Plessis','fdp18@gmail.com',0,1,'','2023-04-16'),(3,'qwerty','2023-04-16 15:34:00.000000',0,'gm18','Glenn','Maxwell','gm18@gmail.com',0,1,'','2023-04-16'),(4,'qwerty','2023-04-16 15:34:00.000000',0,'dk18','Dinesh','Karthik','dk18@gmail.com',0,1,'','2023-04-16'),(5,'qwerty','2023-04-16 15:34:00.000000',0,'ml18','Mahipal','Lomror','ml18@gmail.com',0,1,'','2023-04-16'),(6,'qwerty','2023-04-16 15:34:00.000000',0,'sa18','Shahbaz','Ahmed','sa18@gmail.com',0,1,'','2023-04-16'),(7,'qwerty','2023-04-16 15:34:00.000000',0,'dw18','David','Willey','dw18@gmail.com',0,1,'','2023-04-16'),(8,'qwerty','2023-04-16 15:34:00.000000',0,'wp18','Wayne','Parnell','wp18@gmail.com',0,1,'','2023-04-16'),(9,'qwerty','2023-04-16 15:34:00.000000',0,'hp18','Harshal','Patel','hp18@gmail.com',0,1,'','2023-04-16'),(10,'qwerty','2023-04-16 15:34:00.000000',0,'ms18','Mohammed','Siraj','ms18@gmail.com',0,1,'','2023-04-16'),(11,'qwerty','2023-04-16 15:34:00.000000',0,'ks18','Karn','Sharma','ks18@gmail.com',0,1,'','2023-04-16'),(12,'qwerty','2023-04-16 15:34:00.000000',0,'km18','Kyle','Mayers','km18@gmail.com',0,1,'','2023-04-16'),(13,'qwerty','2023-04-16 15:34:00.000000',0,'klr18','KL','Rahul','klr18@gmail.com',0,1,'','2023-04-16'),(14,'qwerty','2023-04-16 15:34:00.000000',0,'dh18','Deepak','Hooda','dh18@gmail.com',0,1,'','2023-04-16'),(15,'qwerty','2023-04-16 15:34:00.000000',0,'kp18','Krunal','Pandya','kp18@gmail.com',0,1,'','2023-04-16'),(16,'qwerty','2023-04-16 15:34:00.000000',0,'mcs18','Marcus','Stoinis','mcs18@gmail.com',0,1,'','2023-04-16'),(17,'qwerty','2023-04-16 15:34:00.000000',0,'np18','Nicholas','Pooran','np18@gmail.com',0,1,'','2023-04-16'),(18,'qwerty','2023-04-16 15:34:00.000000',0,'ab18','Ayush','Badoni','ab18@gmail.com',0,1,'','2023-04-16'),(19,'qwerty','2023-04-16 15:34:00.000000',0,'ju18','Jaydev','Unadkat','ju18@gmail.com',0,1,'','2023-04-16'),(20,'qwerty','2023-04-16 15:34:00.000000',0,'mw18','Mark','Wood','mw18@gmail.com',0,1,'','2023-04-16'),(21,'qwerty','2023-04-16 15:34:00.000000',0,'rb18','Ravi','Bishnoi','rb18@gmail.com',0,1,'','2023-04-16'),(22,'qwerty','2023-04-16 15:34:00.000000',0,'ak18','Avesh','Khan','ak18@gmail.com',0,1,'','2023-04-16'),(23,'qwerty','2023-04-16 15:34:00.000000',0,'am18','Amit','Mishra','am18@gmail.com',0,1,'','2023-04-16');
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

-- Dump completed on 2023-04-17 22:02:02
