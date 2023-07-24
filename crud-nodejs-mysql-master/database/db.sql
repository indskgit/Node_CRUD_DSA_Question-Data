-- to create a new database
CREATE DATABASE customersdb;

-- to use database
use customersdb;

-- creating a new table
CREATE TABLE `customer` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `qtitle` varchar(50) NOT NULL,
  `qDesc` varchar(100) NOT NULL,
  `input` varchar(100) NOT NULL,
  `output` varchar(45) NOT NULL,
  `exp` varchar(45) NOT NULL,
  `constraints` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
-- to show all tables
show tables;

-- to describe table
describe customer;