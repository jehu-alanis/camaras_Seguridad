-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: seguridad
-- ------------------------------------------------------
-- Server version	5.7.21-log

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
-- Table structure for table `camara`
--

DROP TABLE IF EXISTS `camara`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `camara` (
  `id_camara` int(11) NOT NULL AUTO_INCREMENT,
  `n_serie` varchar(45) DEFAULT NULL,
  `vida_util` int(11) DEFAULT NULL,
  `longitud` double DEFAULT NULL,
  `latitud` double DEFAULT NULL,
  `id_cat_estado_camara` int(11) NOT NULL,
  `id_cat_modelo` int(11) NOT NULL,
  `id_cat_proveedor` int(11) NOT NULL,
  `id_cat_tipo_camara` int(11) NOT NULL,
  `id_cat_resolucion` int(11) NOT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `id_cat_poste` int(11) NOT NULL,
  PRIMARY KEY (`id_camara`),
  KEY `cam_provedor_idx` (`id_cat_proveedor`),
  KEY `cam_modelo_idx` (`id_cat_modelo`),
  KEY `cam_estado_idx` (`id_cat_estado_camara`),
  KEY `cam_tipo_idx` (`id_cat_tipo_camara`),
  KEY `cam_poste_idx` (`id_cat_poste`),
  KEY `cam_reso_idx` (`id_cat_resolucion`),
  CONSTRAINT `cam_estado` FOREIGN KEY (`id_cat_estado_camara`) REFERENCES `estados_camara` (`id_estado`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cam_modelo` FOREIGN KEY (`id_cat_modelo`) REFERENCES `modelo` (`id_modelo`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cam_poste` FOREIGN KEY (`id_cat_poste`) REFERENCES `postes` (`id_poste`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cam_provedor` FOREIGN KEY (`id_cat_proveedor`) REFERENCES `proveedores` (`id_proveedores`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cam_reso` FOREIGN KEY (`id_cat_resolucion`) REFERENCES `resolucion` (`id_resolucion`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cam_tipo` FOREIGN KEY (`id_cat_tipo_camara`) REFERENCES `tipo_camara` (`id_tipo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `camara`
--

LOCK TABLES `camara` WRITE;
/*!40000 ALTER TABLE `camara` DISABLE KEYS */;
INSERT INTO `camara` VALUES (1,'R4TT6',2,-65.7525248,3.7525248,1,1,1,1,1,'BUENA',1),(2,'34TEW',3,-16.089088,56.089088,2,1,1,1,1,'BUENA',1),(3,'45GBN',1,-45.7525248,65.7525248,1,1,2,2,3,'BUENA',1),(4,'5T67J',2,-12.7525248,77.7525248,1,3,1,2,2,'BUENA',3),(5,'TT578',3,-88.7525248,57.7525248,1,2,3,3,3,'BUENA',2),(6,'22SWF',9,-93.7525248,16.089088,1,4,1,1,1,'BUENA',1),(7,'34WSSF',6,23.7525248,-56.7525248,1,3,1,1,1,'MALA',4);
/*!40000 ALTER TABLE `camara` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_ciudades`
--

DROP TABLE IF EXISTS `cat_ciudades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_ciudades` (
  `id_ciudades` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_ciudad` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_ciudades`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_ciudades`
--

LOCK TABLES `cat_ciudades` WRITE;
/*!40000 ALTER TABLE `cat_ciudades` DISABLE KEYS */;
INSERT INTO `cat_ciudades` VALUES (1,'TONALA'),(2,'ARRIAGA'),(3,'TAPACHULA');
/*!40000 ALTER TABLE `cat_ciudades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_colonias`
--

DROP TABLE IF EXISTS `cat_colonias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_colonias` (
  `id_colonias` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_col` varchar(45) DEFAULT NULL,
  `id_cat_ciudad` int(11) NOT NULL,
  PRIMARY KEY (`id_colonias`),
  KEY `col_ciudad_idx` (`id_cat_ciudad`),
  CONSTRAINT `col_ciudad` FOREIGN KEY (`id_cat_ciudad`) REFERENCES `cat_ciudades` (`id_ciudades`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_colonias`
--

LOCK TABLES `cat_colonias` WRITE;
/*!40000 ALTER TABLE `cat_colonias` DISABLE KEYS */;
INSERT INTO `cat_colonias` VALUES (1,'LAS FLORES',1),(2,'NICATAN',2),(3,'ARISTA',3);
/*!40000 ALTER TABLE `cat_colonias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estados_camara`
--

DROP TABLE IF EXISTS `estados_camara`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estados_camara` (
  `id_estado` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_estado` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_estado`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados_camara`
--

LOCK TABLES `estados_camara` WRITE;
/*!40000 ALTER TABLE `estados_camara` DISABLE KEYS */;
INSERT INTO `estados_camara` VALUES (1,'En servicio'),(2,'Mantenimiento');
/*!40000 ALTER TABLE `estados_camara` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fabricante`
--

DROP TABLE IF EXISTS `fabricante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fabricante` (
  `id_fabricante` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_fabricante` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_fabricante`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fabricante`
--

LOCK TABLES `fabricante` WRITE;
/*!40000 ALTER TABLE `fabricante` DISABLE KEYS */;
INSERT INTO `fabricante` VALUES (1,'CANON'),(2,'FUJIFI'),(3,'SONY'),(4,'KODAC');
/*!40000 ALTER TABLE `fabricante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marca` (
  `id_marca` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_marca` varchar(45) DEFAULT NULL,
  `id_cat_fabricante` int(11) NOT NULL,
  PRIMARY KEY (`id_marca`),
  KEY `marc_fabr_idx` (`id_cat_fabricante`),
  CONSTRAINT `marc_fabr` FOREIGN KEY (`id_cat_fabricante`) REFERENCES `fabricante` (`id_fabricante`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'POWERR',1),(2,'COOLPIX',2),(3,'TOUCHT',1),(4,'OLYMPUS',4);
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modelo`
--

DROP TABLE IF EXISTS `modelo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modelo` (
  `id_modelo` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_modelo` varchar(45) DEFAULT NULL,
  `id_cat_marca` int(11) NOT NULL,
  PRIMARY KEY (`id_modelo`),
  KEY `mod_marc_idx` (`id_cat_marca`),
  CONSTRAINT `mod_marc` FOREIGN KEY (`id_cat_marca`) REFERENCES `marca` (`id_marca`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modelo`
--

LOCK TABLES `modelo` WRITE;
/*!40000 ALTER TABLE `modelo` DISABLE KEYS */;
INSERT INTO `modelo` VALUES (1,'XP90',1),(2,'AW130',2),(3,'TG-4',3),(4,'AWS',3),(5,'7MKE',4);
/*!40000 ALTER TABLE `modelo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal`
--

DROP TABLE IF EXISTS `personal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal` (
  `id_personal` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `ap_paterno` varchar(45) DEFAULT NULL,
  `ap_materno` varchar(45) DEFAULT NULL,
  `clave_personal` varchar(15) NOT NULL,
  `id_cat_usuario` int(11) NOT NULL,
  `pregunta_secreta` int(11) DEFAULT NULL,
  `respuesta_secreta` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_personal`),
  KEY `XD_idx` (`id_cat_usuario`),
  KEY `pre_idx` (`pregunta_secreta`),
  CONSTRAINT `pe_se` FOREIGN KEY (`id_personal`) REFERENCES `sesion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `pe_usu` FOREIGN KEY (`id_cat_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `pre` FOREIGN KEY (`pregunta_secreta`) REFERENCES `preguntas` (`idpreguntas`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal`
--

LOCK TABLES `personal` WRITE;
/*!40000 ALTER TABLE `personal` DISABLE KEYS */;
INSERT INTO `personal` VALUES (2,'Jose','juarez','cruz','1234',1,3,'PASTEL'),(8,'ALAN','MARTINES','MARTINES','W434',2,1,'TECNICO'),(9,'marlen itzel','herrera','jimenez','025',1,1,'chispa'),(10,'JESSECKA','ALBA','HERNÁNDEZ','123',1,1,'DUSTY'),(11,'itzel','jimenez','herrera','1995',2,1,'chispa'),(12,'jehu','alanis','ozuna','TFRF',2,1,'PIPO');
/*!40000 ALTER TABLE `personal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `postes`
--

DROP TABLE IF EXISTS `postes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `postes` (
  `id_poste` int(11) NOT NULL AUTO_INCREMENT,
  `clave_poste` varchar(15) DEFAULT NULL,
  `calle_principal` varchar(45) DEFAULT NULL,
  `calle_lateral1` varchar(45) DEFAULT NULL,
  `calle_lateral2` varchar(45) DEFAULT NULL,
  `id_cat_colonia` int(11) NOT NULL,
  `latitud` double DEFAULT NULL,
  `longitud` double DEFAULT NULL,
  `ano_instalacion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_poste`),
  KEY `vfv_idx` (`id_cat_colonia`),
  CONSTRAINT `postes_colonia` FOREIGN KEY (`id_cat_colonia`) REFERENCES `cat_colonias` (`id_colonias`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postes`
--

LOCK TABLES `postes` WRITE;
/*!40000 ALTER TABLE `postes` DISABLE KEYS */;
INSERT INTO `postes` VALUES (1,'RF456','ALLENDE','ALDAMA','BELIZARIO',1,16.089088,-93.7525248,2010),(2,'345DD','10 FEBRERO','1 MAYO','3 MARZO',3,56.089088,-16.089088,2009),(3,'DE554','7 JULIO','3 ABRIL','11 SEPTIEMBRE',2,3.7525248,-65.7525248,2018),(4,'33EWF','7 MAYO','30 OCTUBRE','2 ENERO',1,37.7525248,-43.7525248,2019);
/*!40000 ALTER TABLE `postes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preguntas`
--

DROP TABLE IF EXISTS `preguntas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `preguntas` (
  `idpreguntas` int(11) NOT NULL AUTO_INCREMENT,
  `nom_preguntas` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idpreguntas`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preguntas`
--

LOCK TABLES `preguntas` WRITE;
/*!40000 ALTER TABLE `preguntas` DISABLE KEYS */;
INSERT INTO `preguntas` VALUES (1,'NOMBRE DE TU PRIMERA MASCOTA'),(2,'NOMBRE DE TU HEROE NACIONAL'),(3,'COSA FAVORITA');
/*!40000 ALTER TABLE `preguntas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proveedores` (
  `id_proveedores` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_provedor` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_proveedores`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
INSERT INTO `proveedores` VALUES (1,'AMAZON'),(2,'MXLIBRE'),(3,'GOOGLE'),(4,'ASD'),(5,'VYORSA');
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reportes`
--

DROP TABLE IF EXISTS `reportes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reportes` (
  `id_reporte` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_solicitud` date DEFAULT NULL,
  `hora_solicitud` time NOT NULL,
  `fecha_de_mantenimiento` date DEFAULT NULL,
  `id_camara` int(11) NOT NULL,
  `id_tipo_mantenimiento` int(11) NOT NULL,
  `id_personal` int(11) NOT NULL,
  `observaciones` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_reporte`),
  KEY `rep_timan_idx` (`id_tipo_mantenimiento`),
  KEY `rep_camara_idx` (`id_camara`),
  KEY `dw_idx` (`id_personal`),
  CONSTRAINT `dw` FOREIGN KEY (`id_personal`) REFERENCES `personal` (`id_personal`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `rep_camara` FOREIGN KEY (`id_camara`) REFERENCES `camara` (`id_camara`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `rep_timan` FOREIGN KEY (`id_tipo_mantenimiento`) REFERENCES `tipo_mantenimiento` (`id_mantenimiento`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reportes`
--

LOCK TABLES `reportes` WRITE;
/*!40000 ALTER TABLE `reportes` DISABLE KEYS */;
INSERT INTO `reportes` VALUES (1,'2020-07-23','02:42:00','2020-07-24',6,1,2,'se cayo'),(2,'2020-09-29','21:29:00','2020-09-30',6,1,2,'se cayo'),(3,'2020-09-29','21:46:00','2020-10-07',2,1,2,'se cayo');
/*!40000 ALTER TABLE `reportes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resolucion`
--

DROP TABLE IF EXISTS `resolucion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resolucion` (
  `id_resolucion` int(11) NOT NULL AUTO_INCREMENT,
  `name_resolucion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_resolucion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resolucion`
--

LOCK TABLES `resolucion` WRITE;
/*!40000 ALTER TABLE `resolucion` DISABLE KEYS */;
INSERT INTO `resolucion` VALUES (1,'1Mpx'),(2,'5Mpx'),(3,'8Mpx');
/*!40000 ALTER TABLE `resolucion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sesion`
--

DROP TABLE IF EXISTS `sesion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sesion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sesion`
--

LOCK TABLES `sesion` WRITE;
/*!40000 ALTER TABLE `sesion` DISABLE KEYS */;
INSERT INTO `sesion` VALUES (2,'AZUL123@HOTMAIL.COM','$2a$10$PDq4oCRLht4cNLTUvBf8lOeuqlhzmjfHKLAYeStm3KET.1P39T7IW'),(7,'AZUL1234@HOTMAIL.COM','$2a$10$KdWmGCidXQvVluypTilNKuFtl5jVWiXL/H8B6D7JzTkraSIcS7PsW'),(8,'tecnico1@hotmail.com','$2a$10$ynzxGZ73UKE1Xt6eLCl4gOAnZQkv8mJMGn4DCXZpVDYBbrto7nv1q'),(9,'marlen_1995_10@hotmail.com','$2a$10$N2DhUVIaqQc.Q2Mv/6/dw.iaBUiMuLm4T5SmsMA1Y4sfyIqW5JQ.y'),(10,'ing_jalba@hotmail.com','$2a$10$pIq5Io80KUu.QRE5ADO8p.bQs5M4IVlLG4jJ0QMmWL8W.rpTzp2SC'),(11,'marlencitha2595@gmail.com','$2a$10$s8vBMaPz5b5zDo89MXoL0u4u8o57VrYgExMZrstfoioEcckNj6iGu'),(12,'alanis@hotmail.com','$2a$10$hXvnth.p19ylJ4/KXdWuzOU7fUZh282lWZOHmMJ/UeueKXXdRLOwG');
/*!40000 ALTER TABLE `sesion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('8yjxg7AdFbbmlA25Yl06rLga-8IqSJtC',1601520491,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":8}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_camara`
--

DROP TABLE IF EXISTS `tipo_camara`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_camara` (
  `id_tipo` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_camara` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_tipo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_camara`
--

LOCK TABLES `tipo_camara` WRITE;
/*!40000 ALTER TABLE `tipo_camara` DISABLE KEYS */;
INSERT INTO `tipo_camara` VALUES (1,'Mini-Domo'),(2,'compacta'),(3,'Domo-motorizado'),(5,'IP Cube');
/*!40000 ALTER TABLE `tipo_camara` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_mantenimiento`
--

DROP TABLE IF EXISTS `tipo_mantenimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_mantenimiento` (
  `id_mantenimiento` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_mantenimiento` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id_mantenimiento`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_mantenimiento`
--

LOCK TABLES `tipo_mantenimiento` WRITE;
/*!40000 ALTER TABLE `tipo_mantenimiento` DISABLE KEYS */;
INSERT INTO `tipo_mantenimiento` VALUES (1,'PREVENTIVO'),(2,'CORRECTIVO');
/*!40000 ALTER TABLE `tipo_mantenimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_usuario` varchar(25) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'ADMNISTRADOR'),(2,'TECNICO');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-04  2:02:37
