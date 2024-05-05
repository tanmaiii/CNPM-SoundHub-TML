-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: music
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `favourite_playlists`
--

LOCK TABLES `favourite_playlists` WRITE;
/*!40000 ALTER TABLE `favourite_playlists` DISABLE KEYS */;
INSERT INTO `favourite_playlists` VALUES ('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','016b4054-6109-40a3-a13e-09ab2c05d365','2024-04-30 14:28:45'),('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','3fac11c2-c1e4-4da6-8fa1-0854447146b0','2024-04-30 14:26:29'),('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','70383645-b568-4996-bdba-b0bbe6148bd3','2024-05-01 04:59:15'),('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','d494bff1-5d26-48a0-8fb2-18a46fead6d0','2024-04-30 13:59:51'),('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','e75930c4-becd-4e1b-8094-b187164bd24c','2024-04-30 14:23:23'),('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','ff154c91-0b59-4645-a6ef-e684fa96c9c7','2024-05-01 05:08:58'),('e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','0ed159c8-94f7-450d-86be-ce48b7ec787b','2024-04-28 04:49:23'),('e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','3fac11c2-c1e4-4da6-8fa1-0854447146b0','2024-05-02 15:12:59'),('e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','713445d9-8db5-42b7-953a-a21b045c18ad','2024-04-28 04:49:17'),('e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','c2e96309-8245-43b7-9fb3-ec8be0cefa8c','2024-04-28 04:49:29'),('e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','d494bff1-5d26-48a0-8fb2-18a46fead6d0','2024-04-27 17:19:03'),('e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','d5dfe80b-14b5-44fc-8e68-554187a9355a','2024-04-28 04:49:04'),('e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','ff154c91-0b59-4645-a6ef-e684fa96c9c7','2024-04-28 09:00:29');
/*!40000 ALTER TABLE `favourite_playlists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `favourite_songs`
--

LOCK TABLES `favourite_songs` WRITE;
/*!40000 ALTER TABLE `favourite_songs` DISABLE KEYS */;
INSERT INTO `favourite_songs` VALUES ('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','51c1a7f6-f243-4c4e-aca7-06dfae56a517','2024-05-01 04:57:47'),('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','5463eeb8-4288-4412-a527-89b1f073a0cf','2024-04-30 13:58:19'),('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','5898a40d-d33e-411f-b022-5ba51be8cee3','2024-05-02 15:11:22'),('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','5ecf4831-2764-47d9-b171-beee40c37799','2024-04-30 13:58:23'),('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','77e5b6ad-c155-4b42-bbb0-1b148b8c7070','2024-05-01 04:57:57'),('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','85e901f7-fbfe-4dae-82bf-1b4084b082fb','2024-04-30 11:42:41'),('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','b3096212-fc5e-42c1-a43d-f33958de8127','2024-04-30 11:42:37'),('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','b8167d65-107a-4972-8ce6-34147ccf4df8','2024-04-30 13:58:21'),('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','ed01f831-4bec-4bfd-9eb3-15b1e4f551d5','2024-05-01 16:32:12'),('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','fb95a41a-0d9b-4805-811b-e77ff4773c31','2024-04-30 11:42:49'),('e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','2a801568-725c-4ceb-855f-6d35de19aa15','2024-04-29 16:08:53'),('e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','5898a40d-d33e-411f-b022-5ba51be8cee3','2024-05-02 14:56:56'),('e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','85e901f7-fbfe-4dae-82bf-1b4084b082fb','2024-05-01 16:31:49'),('e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','c20b1e79-c9a1-4f2f-b772-4922d918b9af','2024-05-01 16:31:43'),('e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','db7b919e-710a-4f1f-b11e-f2f7e8993805','2024-05-01 16:31:46'),('e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','fb95a41a-0d9b-4805-811b-e77ff4773c31','2024-05-01 16:31:41');
/*!40000 ALTER TABLE `favourite_songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `follows`
--

LOCK TABLES `follows` WRITE;
/*!40000 ALTER TABLE `follows` DISABLE KEYS */;
INSERT INTO `follows` VALUES ('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','17fa26a7-f486-4cff-8858-a3998ab22cae','2024-05-04 17:39:51'),('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','8f912d16-bcb2-460b-a329-291be4a44512','2024-05-01 05:01:26'),('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','2024-05-01 06:22:15'),('e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','17fa26a7-f486-4cff-8858-a3998ab22cae','2024-04-30 07:48:02'),('e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','35b2c4aa-6ffe-4bcd-990f-e56754a81573','2024-04-28 05:17:43'),('e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','8f912d16-bcb2-460b-a329-291be4a44512','2024-04-29 17:42:02');
/*!40000 ALTER TABLE `follows` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES ('1','Nhạc Pop',NULL,'2024-03-03 08:10:26'),('10','Nhạc Jazz',NULL,'2024-03-03 08:10:26'),('11','Nhạc Indie',NULL,'2024-03-03 08:10:26'),('12','Nhạc Hòa tấu',NULL,'2024-03-03 08:10:26'),('13','Nhạc Thiếu nhi',NULL,'2024-03-03 08:10:26'),('14','Nhạc Nhật',NULL,'2024-03-03 08:10:26'),('15','Nhạc Hàn',NULL,'2024-03-03 08:10:26'),('16','Nhạc Trung',NULL,'2024-03-03 08:10:26'),('17','Nhạc Phim',NULL,'2024-03-03 08:10:26'),('18','Nhạc Game',NULL,'2024-03-03 08:10:26'),('19','Nhạc Remix',NULL,'2024-03-03 08:10:26'),('2','Nhạc Rock',NULL,'2024-03-03 08:10:26'),('20','Nhạc Chế',NULL,'2024-03-03 08:10:26'),('3','Nhạc Rap/Hip-hop',NULL,'2024-03-03 08:10:26'),('4','Nhạc Ballad',NULL,'2024-03-03 08:10:26'),('5','Nhạc EDM',NULL,'2024-03-03 08:10:26'),('6','Nhạc Trữ tình',NULL,'2024-03-03 08:10:26'),('7','Nhạc Đỏ',NULL,'2024-03-03 08:10:26'),('8','Nhạc Dân ca',NULL,'2024-03-03 08:10:26'),('9','Nhạc Cổ điển',NULL,'2024-03-03 08:10:26');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `playlist_songs`
--

LOCK TABLES `playlist_songs` WRITE;
/*!40000 ALTER TABLE `playlist_songs` DISABLE KEYS */;
INSERT INTO `playlist_songs` VALUES ('016b4054-6109-40a3-a13e-09ab2c05d365','b3096212-fc5e-42c1-a43d-f33958de8127',3,'2024-05-01 12:00:36'),('016b4054-6109-40a3-a13e-09ab2c05d365','c20b1e79-c9a1-4f2f-b772-4922d918b9af',2,'2024-04-30 23:47:18'),('016b4054-6109-40a3-a13e-09ab2c05d365','ed01f831-4bec-4bfd-9eb3-15b1e4f551d5',4,'2024-05-01 20:19:42'),('016b4054-6109-40a3-a13e-09ab2c05d365','fb95a41a-0d9b-4805-811b-e77ff4773c31',1,'2024-04-30 23:47:17'),('02b4a15e-e344-4e0e-98d5-8c7b37fb28bb','2a801568-725c-4ceb-855f-6d35de19aa15',3,'2024-04-30 00:03:25'),('02b4a15e-e344-4e0e-98d5-8c7b37fb28bb','85e901f7-fbfe-4dae-82bf-1b4084b082fb',4,'2024-04-30 00:13:39'),('02b4a15e-e344-4e0e-98d5-8c7b37fb28bb','b3096212-fc5e-42c1-a43d-f33958de8127',2,'2024-04-29 23:56:21'),('0ed159c8-94f7-450d-86be-ce48b7ec787b','b3096212-fc5e-42c1-a43d-f33958de8127',2,'2024-04-29 23:56:53'),('3fac11c2-c1e4-4da6-8fa1-0854447146b0','2a801568-725c-4ceb-855f-6d35de19aa15',11,'2024-05-01 00:32:59'),('3fac11c2-c1e4-4da6-8fa1-0854447146b0','51c1a7f6-f243-4c4e-aca7-06dfae56a517',13,'2024-05-01 00:33:51'),('3fac11c2-c1e4-4da6-8fa1-0854447146b0','5463eeb8-4288-4412-a527-89b1f073a0cf',10,'2024-05-01 00:11:48'),('3fac11c2-c1e4-4da6-8fa1-0854447146b0','77e5b6ad-c155-4b42-bbb0-1b148b8c7070',12,'2024-05-01 00:33:51'),('3fac11c2-c1e4-4da6-8fa1-0854447146b0','85e901f7-fbfe-4dae-82bf-1b4084b082fb',16,'2024-05-01 11:54:50'),('3fac11c2-c1e4-4da6-8fa1-0854447146b0','9279eead-2f3f-4784-a27e-d6840f04384c',8,'2024-05-01 00:11:46'),('3fac11c2-c1e4-4da6-8fa1-0854447146b0','9bef92d8-ef01-4628-9cd0-75c1e71d8a53',9,'2024-05-01 00:11:47'),('3fac11c2-c1e4-4da6-8fa1-0854447146b0','c42ee98d-b18f-4084-943f-58371863588c',13,'2024-05-01 00:33:51'),('70383645-b568-4996-bdba-b0bbe6148bd3','2a801568-725c-4ceb-855f-6d35de19aa15',4,'2024-05-02 21:23:49'),('70383645-b568-4996-bdba-b0bbe6148bd3','51c1a7f6-f243-4c4e-aca7-06dfae56a517',7,'2024-05-03 12:45:32'),('70383645-b568-4996-bdba-b0bbe6148bd3','5898a40d-d33e-411f-b022-5ba51be8cee3',1,'2024-05-02 21:23:45'),('70383645-b568-4996-bdba-b0bbe6148bd3','77e5b6ad-c155-4b42-bbb0-1b148b8c7070',2,'2024-05-02 21:23:46'),('70383645-b568-4996-bdba-b0bbe6148bd3','85e901f7-fbfe-4dae-82bf-1b4084b082fb',6,'2024-05-02 21:26:38'),('70383645-b568-4996-bdba-b0bbe6148bd3','9279eead-2f3f-4784-a27e-d6840f04384c',8,'2024-05-03 12:45:33'),('70383645-b568-4996-bdba-b0bbe6148bd3','9bef92d8-ef01-4628-9cd0-75c1e71d8a53',9,'2024-05-03 12:45:35'),('70383645-b568-4996-bdba-b0bbe6148bd3','b3096212-fc5e-42c1-a43d-f33958de8127',5,'2024-05-02 21:23:50'),('70383645-b568-4996-bdba-b0bbe6148bd3','c42ee98d-b18f-4084-943f-58371863588c',3,'2024-05-02 21:23:46'),('705e7117-f10e-44b5-ae7b-e66696557f83','2a801568-725c-4ceb-855f-6d35de19aa15',1,'2024-04-29 23:40:41'),('705e7117-f10e-44b5-ae7b-e66696557f83','85e901f7-fbfe-4dae-82bf-1b4084b082fb',4,'2024-04-30 00:13:38'),('705e7117-f10e-44b5-ae7b-e66696557f83','b3096212-fc5e-42c1-a43d-f33958de8127',2,'2024-04-29 23:56:19'),('705e7117-f10e-44b5-ae7b-e66696557f83','fb95a41a-0d9b-4805-811b-e77ff4773c31',3,'2024-04-30 00:12:06'),('713445d9-8db5-42b7-953a-a21b045c18ad','2a801568-725c-4ceb-855f-6d35de19aa15',1,'2024-04-29 23:40:49'),('713445d9-8db5-42b7-953a-a21b045c18ad','b3096212-fc5e-42c1-a43d-f33958de8127',2,'2024-04-29 23:56:58'),('918c9846-5ea7-4026-bd01-796881784a72','2a801568-725c-4ceb-855f-6d35de19aa15',1,'2024-04-29 23:41:25'),('918c9846-5ea7-4026-bd01-796881784a72','b3096212-fc5e-42c1-a43d-f33958de8127',2,'2024-04-29 23:56:52'),('a44241a7-9812-4b1e-83d1-f71604d28cad','2a801568-725c-4ceb-855f-6d35de19aa15',3,'2024-04-30 00:03:17'),('a44241a7-9812-4b1e-83d1-f71604d28cad','b3096212-fc5e-42c1-a43d-f33958de8127',2,'2024-04-29 23:56:57'),('a44241a7-9812-4b1e-83d1-f71604d28cad','fb95a41a-0d9b-4805-811b-e77ff4773c31',4,'2024-04-30 00:12:19'),('c2e96309-8245-43b7-9fb3-ec8be0cefa8c','2a801568-725c-4ceb-855f-6d35de19aa15',1,'2024-04-29 23:41:27'),('c2e96309-8245-43b7-9fb3-ec8be0cefa8c','b3096212-fc5e-42c1-a43d-f33958de8127',2,'2024-04-29 23:57:13'),('d494bff1-5d26-48a0-8fb2-18a46fead6d0','85e901f7-fbfe-4dae-82bf-1b4084b082fb',2,'2024-04-28 16:54:11'),('d494bff1-5d26-48a0-8fb2-18a46fead6d0','b3096212-fc5e-42c1-a43d-f33958de8127',7,'2024-04-29 23:56:36'),('d494bff1-5d26-48a0-8fb2-18a46fead6d0','c20b1e79-c9a1-4f2f-b772-4922d918b9af',4,'2024-04-28 16:54:15'),('d494bff1-5d26-48a0-8fb2-18a46fead6d0','db7b919e-710a-4f1f-b11e-f2f7e8993805',5,'2024-04-28 16:54:12'),('d5dfe80b-14b5-44fc-8e68-554187a9355a','2a801568-725c-4ceb-855f-6d35de19aa15',3,'2024-04-30 00:03:24'),('d5dfe80b-14b5-44fc-8e68-554187a9355a','b3096212-fc5e-42c1-a43d-f33958de8127',2,'2024-04-29 23:56:16'),('d5dfe80b-14b5-44fc-8e68-554187a9355a','fb95a41a-0d9b-4805-811b-e77ff4773c31',4,'2024-04-30 00:13:14'),('e75930c4-becd-4e1b-8094-b187164bd24c','5898a40d-d33e-411f-b022-5ba51be8cee3',1,'2024-04-30 21:25:53'),('e75930c4-becd-4e1b-8094-b187164bd24c','77e5b6ad-c155-4b42-bbb0-1b148b8c7070',2,'2024-04-30 21:25:53'),('e75930c4-becd-4e1b-8094-b187164bd24c','b3096212-fc5e-42c1-a43d-f33958de8127',6,'2024-05-01 12:00:36'),('e75930c4-becd-4e1b-8094-b187164bd24c','c20b1e79-c9a1-4f2f-b772-4922d918b9af',3,'2024-04-30 21:26:00'),('e75930c4-becd-4e1b-8094-b187164bd24c','db7b919e-710a-4f1f-b11e-f2f7e8993805',4,'2024-04-30 21:26:00'),('e75930c4-becd-4e1b-8094-b187164bd24c','ed01f831-4bec-4bfd-9eb3-15b1e4f551d5',7,'2024-05-01 20:19:42'),('e75930c4-becd-4e1b-8094-b187164bd24c','fb95a41a-0d9b-4805-811b-e77ff4773c31',5,'2024-05-01 00:09:10'),('ff154c91-0b59-4645-a6ef-e684fa96c9c7','2a801568-725c-4ceb-855f-6d35de19aa15',8,'2024-04-30 00:03:11'),('ff154c91-0b59-4645-a6ef-e684fa96c9c7','5898a40d-d33e-411f-b022-5ba51be8cee3',10,'2024-05-02 21:21:34'),('ff154c91-0b59-4645-a6ef-e684fa96c9c7','77e5b6ad-c155-4b42-bbb0-1b148b8c7070',11,'2024-05-02 21:21:35'),('ff154c91-0b59-4645-a6ef-e684fa96c9c7','85e901f7-fbfe-4dae-82bf-1b4084b082fb',9,'2024-04-30 00:04:12'),('ff154c91-0b59-4645-a6ef-e684fa96c9c7','b3096212-fc5e-42c1-a43d-f33958de8127',7,'2024-04-29 23:57:47'),('ff154c91-0b59-4645-a6ef-e684fa96c9c7','c42ee98d-b18f-4084-943f-58371863588c',12,'2024-05-02 21:21:36');
/*!40000 ALTER TABLE `playlist_songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `playlists`
--

LOCK TABLES `playlists` WRITE;
/*!40000 ALTER TABLE `playlists` DISABLE KEYS */;
INSERT INTO `playlists` VALUES ('016b4054-6109-40a3-a13e-09ab2c05d365','chill private ',NULL,NULL,NULL,'bd6b6989-6c7f-4ae3-ae8a-f156b8694cba',0,0,'2024-04-30 14:28:45'),('02b4a15e-e344-4e0e-98d5-8c7b37fb28bb','Late Night Grooves',NULL,'db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','1','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee',1,0,'2024-04-27 15:54:33'),('0ed159c8-94f7-450d-86be-ce48b7ec787b','Summer Sunset',NULL,'db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','1','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee',1,0,'2024-04-27 15:54:19'),('3fac11c2-c1e4-4da6-8fa1-0854447146b0','Chill public ',NULL,NULL,NULL,'bd6b6989-6c7f-4ae3-ae8a-f156b8694cba',1,0,'2024-04-30 14:26:29'),('596ea684-57d0-4539-94b4-98147d56755a','Tuyển tập hay nhất 2021',NULL,'db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','1','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee',1,0,'2024-04-27 15:51:41'),('6674038c-8b4f-4a2e-a1da-4c38d8afcfea','Tuyển tập hay nhất 2022',NULL,'db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','1','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee',0,0,'2024-04-27 15:52:43'),('70383645-b568-4996-bdba-b0bbe6148bd3','Xin chào',NULL,NULL,NULL,'e3d5d919-0673-4dc5-8f03-e81dce2ac0ee',1,0,'2024-04-30 14:15:31'),('705e7117-f10e-44b5-ae7b-e66696557f83','Morning Melodies',NULL,'db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','1','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee',1,0,'2024-04-27 15:54:38'),('713445d9-8db5-42b7-953a-a21b045c18ad','Feel Good Beats',NULL,'db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','1','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee',0,0,'2024-04-27 15:54:28'),('74b8db7f-90ba-4ec1-ac07-8029bd188860','Tuyển tập hay nhất 2023',NULL,'db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','1','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee',1,0,'2024-04-27 15:52:46'),('918c9846-5ea7-4026-bd01-796881784a72','Chill Vibes',NULL,'db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','1','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee',1,0,'2024-04-27 15:54:15'),('a44241a7-9812-4b1e-83d1-f71604d28cad','Throwback Jams',NULL,'db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','1','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee',0,0,'2024-04-27 15:54:24'),('c2e96309-8245-43b7-9fb3-ec8be0cefa8c','Tuyển tập hay nhất 2024',NULL,'db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','1','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee',1,0,'2024-04-27 15:52:49'),('d494bff1-5d26-48a0-8fb2-18a46fead6d0','B Study Session Sounds',NULL,'db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','1','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee',1,0,'2024-04-27 15:54:48'),('d5dfe80b-14b5-44fc-8e68-554187a9355a','Road Trip Mix',NULL,'db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','1','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee',1,0,'2024-04-27 15:54:43'),('e75930c4-becd-4e1b-8094-b187164bd24c','Chill cung toi ',NULL,NULL,NULL,'bd6b6989-6c7f-4ae3-ae8a-f156b8694cba',0,0,'2024-04-30 14:23:23'),('ff154c91-0b59-4645-a6ef-e684fa96c9c7','Party Anthems',NULL,'db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','1','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee',1,0,'2024-04-27 15:54:53');
/*!40000 ALTER TABLE `playlists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `song_plays`
--

LOCK TABLES `song_plays` WRITE;
/*!40000 ALTER TABLE `song_plays` DISABLE KEYS */;
/*!40000 ALTER TABLE `song_plays` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES ('2a801568-725c-4ceb-855f-6d35de19aa15','Song 4','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','be1bc3e8-964d-41f1-9d8f-72dd296ee111.png','1a22e6af-fdaf-4a89-92d3-a1f31a78f6b5.mp3','1',1,0,'2024-04-27 16:24:53',NULL),('51c1a7f6-f243-4c4e-aca7-06dfae56a517','Song 7','bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','1a22e6af-fdaf-4a89-92d3-a1f31a78f6b5.mp3','1',1,0,'2024-04-30 13:56:22',NULL),('5463eeb8-4288-4412-a527-89b1f073a0cf','Song 4','bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','','1a22e6af-fdaf-4a89-92d3-a1f31a78f6b5.mp3','1',1,0,'2024-04-30 13:56:10',NULL),('5898a40d-d33e-411f-b022-5ba51be8cee3','Song 10','bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','1a22e6af-fdaf-4a89-92d3-a1f31a78f6b5.mp3','1',1,0,'2024-04-30 13:56:31',NULL),('5ecf4831-2764-47d9-b171-beee40c37799','Song 1','bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','1a22e6af-fdaf-4a89-92d3-a1f31a78f6b5.mp3','1',1,0,'2024-04-30 13:56:02',NULL),('77e5b6ad-c155-4b42-bbb0-1b148b8c7070','Song 9','bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','','1a22e6af-fdaf-4a89-92d3-a1f31a78f6b5.mp3','1',1,0,'2024-04-30 13:56:28',NULL),('85e901f7-fbfe-4dae-82bf-1b4084b082fb','Song 2','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','be1bc3e8-964d-41f1-9d8f-72dd296ee111.png','1a22e6af-fdaf-4a89-92d3-a1f31a78f6b5.mp3','1',0,0,'2024-04-27 16:24:49',NULL),('9279eead-2f3f-4784-a27e-d6840f04384c','Song 6','bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','94487ce5-c768-4ac8-bc41-e68c9a39e0fc.mp3','1',1,0,'2024-04-30 13:56:16',NULL),('9bef92d8-ef01-4628-9cd0-75c1e71d8a53','Song 5','bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','94487ce5-c768-4ac8-bc41-e68c9a39e0fc.mp3','1',1,0,'2024-04-30 13:56:13',NULL),('b3096212-fc5e-42c1-a43d-f33958de8127','Song 3','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','be1bc3e8-964d-41f1-9d8f-72dd296ee111.png','94487ce5-c768-4ac8-bc41-e68c9a39e0fc.mp3','1',1,0,'2024-04-27 16:24:51',NULL),('b8167d65-107a-4972-8ce6-34147ccf4df8','Song 3','bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','94487ce5-c768-4ac8-bc41-e68c9a39e0fc.mp3','1',1,0,'2024-04-30 13:56:08',NULL),('c20b1e79-c9a1-4f2f-b772-4922d918b9af','Em của ngày hôm qua1','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','be1bc3e8-964d-41f1-9d8f-72dd296ee111.png','94487ce5-c768-4ac8-bc41-e68c9a39e0fc.mp3','1',1,0,'2024-04-27 16:24:17',NULL),('c42ee98d-b18f-4084-943f-58371863588c','Song 8','bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','94487ce5-c768-4ac8-bc41-e68c9a39e0fc.mp3','1',1,0,'2024-04-30 13:56:25',NULL),('db7b919e-710a-4f1f-b11e-f2f7e8993805','Song 1','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','be1bc3e8-964d-41f1-9d8f-72dd296ee111.png','94487ce5-c768-4ac8-bc41-e68c9a39e0fc.mp3','1',1,0,'2024-04-27 16:24:47',NULL),('ed01f831-4bec-4bfd-9eb3-15b1e4f551d5','Song 2','bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','db5b8a14-d284-4c49-beb4-c76af3a81cd0.png','94487ce5-c768-4ac8-bc41-e68c9a39e0fc.mp3','1',0,0,'2024-04-30 13:56:05',NULL),('fb95a41a-0d9b-4805-811b-e77ff4773c31','Em của ngày hôm qua2','e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','be1bc3e8-964d-41f1-9d8f-72dd296ee111.png','94487ce5-c768-4ac8-bc41-e68c9a39e0fc.mp3','1',0,0,'2024-04-27 16:23:56',NULL);
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_songs`
--

LOCK TABLES `user_songs` WRITE;
/*!40000 ALTER TABLE `user_songs` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('17fa26a7-f486-4cff-8858-a3998ab22cae','Ai đó 1','3@g.com','$2b$10$HLRNNirDEvvRzQ/LBBOuuOqa2yusmyg.lJbq/f9pl5wU4KDmazWJ.','c75b4c99-ccd7-4cbb-82cc-e997adc38092.png',NULL,NULL,'2024-04-27 15:40:58',NULL,NULL),('35b2c4aa-6ffe-4bcd-990f-e56754a81573','Ai đó 2','1@g.com','$2b$10$JHBAv7IOUT3tUmcfaryWV.4NANIPaKXRd2fi/53C9fdvrrvrr9N5K',NULL,NULL,NULL,'2024-04-27 15:40:36',NULL,NULL),('8f912d16-bcb2-460b-a329-291be4a44512','Bi do 3','2@g.com','$2b$10$.v7XFwco6HBuCdk64/h1nu1agrgiQXR1KXKRxmakUkBf3PzUBTsIK','c75b4c99-ccd7-4cbb-82cc-e997adc38092.png',NULL,NULL,NULL,NULL,NULL),('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','tanmai','6@g.com','$2b$10$q1jbiA5P.eku4nUkymxMs.34RtNsiLWxHEpln5cQCvgnjO0vbvDru','995db5ab-8bf7-4e6b-87b0-f53e4f542f5e.jpg',NULL,NULL,'2024-04-30 11:41:56',NULL,NULL),('e3d5d919-0673-4dc5-8f03-e81dce2ac0ee','Hòa Minzy','4@g.com','$2b$10$ZxljxbzT418kNENUJYU2te1sPeZxRznIBK0Ux.kS3igH1tzCFszLq','ce161da4-59ad-4862-bc2a-5a0d704f07a6.jpg',NULL,NULL,'2024-04-27 15:41:39',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `verification_codes`
--

LOCK TABLES `verification_codes` WRITE;
/*!40000 ALTER TABLE `verification_codes` DISABLE KEYS */;
INSERT INTO `verification_codes` VALUES ('bd6b6989-6c7f-4ae3-ae8a-f156b8694cba','4816','2024-05-05 13:13:36');
/*!40000 ALTER TABLE `verification_codes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-05 22:09:22
