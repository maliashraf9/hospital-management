-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2019 at 11:46 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `login_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `first_name` text DEFAULT NULL,
  `last_name` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `diagnosis` text DEFAULT NULL,
  `did` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `first_name`, `last_name`, `email`, `diagnosis`, `did`) VALUES
(17, 'Brandi', 'Fleming', 'brandi.fleming@xyz.com', 'Fever', 3),
(18, 'Thomas', 'Burkhead', 'thomas.burkhead@xyz.com', 'Celiac Disease', 4),
(19, 'Robert', 'Woodward', 'robert.woodward@xyz.com', 'Autism', 1),
(20, 'Amalia', 'Winslow', 'amalia.winslow@xyz.com', 'Asthma', 2),
(21, 'Darlene', 'Ortega', 'darlene.ortega@xyz.com', 'Infection', 2),
(22, 'Joseph', 'Parker', 'joseph.parker@xyz.com', 'Flu', 3),
(23, 'Luis', 'King', 'luis.king@xyz.com', 'ACE', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` text DEFAULT NULL,
  `last_name` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `password` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`) VALUES
(1, 'Nicolle', 'Shepherd', 'nicolle.shepherd@xyz.com', '$2b$10$9IMJQD0yWRlCEhPStmO66u/3NsINXV1kHVuyX4AkQosbK6GxLzjbG'),
(2, 'Charles', 'Friedman', 'charles.friedman@xyz.com', '$2b$10$V6rnlcFNw6yQeZXVdRX5/OdcIoWN.27F1LwVp5lDAPr1npKOWwZOO'),
(3, 'Louis', 'Reed', 'louis.reed@xyz.com', '$2b$10$41RI2S1whYRjeyfovgPqu.zuImLsb9cjN1ag8XwhIeRUS2lbpYxve'),
(4, 'Anthony', 'Warren', 'anthony.warren@xyz.com', '$2b$10$lp9W2ESHauanbKha811IEO4NNhRPYgqBsKveK4INhdvzYO0k8E3si');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
