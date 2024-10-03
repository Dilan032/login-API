-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 03, 2024 at 01:12 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs-login`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'sirimal', 'sirimal@gmail.com', '$2a$08$HOCVeCQK7Dh1focRmG4d6uguVm1jbTaN2NaF4CokPQn.B9zLeJeZ.'),
(2, 'dilan', 'dilankanishka032@gmail.com', '$2a$08$IVVOzjxiLLEHRsvcAa9IBur638g4bn1KTsde3W01FucncUjWQFtEK'),
(3, 'amal ', 'amal@gmail.com', '$2a$08$BeIsLxLT/I1RDIJyX6k3Mu58KaRPvdJvgwFKrPH42lhoDpvN3ja2S'),
(4, 'amal', 'amali@gmail.com', '$2a$08$PiywC0mPUaRlTzY7TQ8M7.WyZmpPCbSdtONtcrcCitpM.RpKH.wTC'),
(5, 'amalaa', 'amaliaa@gmail.com', '$2a$08$c78Qg.AliBH1bI6Wib0WTu8mJ3eztgjHyCNUDZZ0nWN.Z4hXVr3je'),
(6, 'aa', 'aa@gmail.com', '$2a$08$YcZ6EZxSrmyBcSejVu3yT./dMK/VVcSHQgItX0e0NScRLr5pnoism');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
