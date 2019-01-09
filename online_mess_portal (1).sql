use mess_portal;

-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3300
-- Generation Time: Oct 28, 2018 at 07:29 PM
-- Server version: 5.5.60-log
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_mess_portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `allotment`
--

CREATE TABLE `allotment` (
  `user_id` char(30) NOT NULL DEFAULT '',
  `month` int(11) NOT NULL DEFAULT '0',
  `mess_name` char(30) NOT NULL DEFAULT '',
  `month_bill` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `allotment`
--

INSERT INTO `allotment` (`user_id`, `month`, `mess_name`, `month_bill`) VALUES
('B160038CS', 9, 'A', 0),
('B160046CS', 9, 'C', 0),
('B160057CS', 9, 'E', 0),
('B160072CS', 9, 'F', 0),
('B160083CS', 9, 'D', 0),
('B160087CS', 9, 'G', 0),
('B160093CS', 9, 'F', 0),
('B160099CS', 10, 'A', 0),
('B160099CS', 9, 'G', 0),
('b160109cs', 10, 'B', 0),
('b160109cs', 11, 'B', 0),
('B160109CS', 9, 'LH', 0),
('B160116CS', 9, 'PG1', 0),
('B160124CS', 9, 'B', 0),
('B160139CS', 9, 'PG2', 0),
('B160146CS', 9, 'B', 0),
('B160153CS', 9, 'C', 0),
('B160158CS', 9, 'C', 0),
('B160175CS', 9, 'PG2', 0),
('B160185CS', 9, 'LH', 0),
('B160198CS', 9, 'A', 0),
('B160210CS', 9, 'PG2', 0),
('B160214CS', 9, 'PG1', 0),
('B160228CS', 9, 'F', 0),
('B160230CS', 9, 'B', 0),
('B160246CS', 9, 'A', 0),
('B160253CS', 9, 'A', 0),
('B160268CS', 9, 'IH', 0),
('B160275CS', 9, 'C', 0),
('B160278CS', 9, 'D', 0),
('B160286CS', 9, 'A', 0),
('B160326CS', 9, 'IH', 0),
('B160333CS', 9, 'PG1', 0),
('B160340CS', 9, 'PG2', 0),
('B160346CS', 9, 'PG2', 0),
('B160356CS', 9, 'D', 0),
('B160376CS', 9, 'LH', 0),
('B160405CS', 9, 'G', 0),
('B160428CS', 9, 'D', 0),
('B160470CS', 9, 'E', 0),
('B160473CS', 9, 'LH', 0),
('B160483CS', 9, 'D', 0),
('B160497CS', 9, 'IH', 0),
('B160506CS', 10, 'D', 10),
('B160506CS', 9, 'F', 0),
('B160511CS', 9, 'G', 0),
('B160517CS', 9, 'PG1', 0),
('B160536CS', 9, 'LH', 0),
('B160547CS', 9, 'D', 0),
('B160555CS', 9, 'E', 0),
('B160581CS', 9, 'IH', 0),
('B160589CS', 9, 'F', 0),
('B160606CS', 9, 'C', 0),
('B160610CS', 9, 'PG1', 0),
('B160632CS', 9, 'E', 0),
('B160642CS', 9, 'B', 0),
('B160653CS', 9, 'LH', 0),
('b160660cs', 10, 'LH', 126),
('B160660CS', 9, 'PG1', 0),
('B160668CS', 9, 'PG2', 0),
('B160683CS', 9, 'B', 0),
('B160688CS', 9, 'E', 0),
('B160710CS', 9, 'G', 0),
('B160716CS', 9, 'IH', 0),
('B160733CS', 9, 'E', 0),
('B160741CS', 9, 'D', 0),
('B160747CS', 9, 'G', 0),
('B160756CS', 9, 'C', 0),
('B160769CS', 9, 'C', 0),
('B160799CS', 9, 'B', 0),
('B160829CS', 9, 'B', 0),
('B160850CS', 9, 'A', 0),
('b160854ec', 10, 'LH', 1000),
('B160855CS', 9, 'E', 0),
('B160865CS', 10, 'A', 3900),
('B160865CS', 11, 'A', 0),
('B160865CS', 9, 'F', 0),
('B160886CS', 9, 'IH', 0),
('B160901CS', 9, 'G', 0),
('B160932CS', 9, 'F', 0),
('B160999CS', 10, 'D', 0);

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `user_id` char(15) NOT NULL DEFAULT '',
  `name` char(50) DEFAULT NULL,
  `mess_name` char(20) DEFAULT NULL,
  `month` int(11) NOT NULL DEFAULT '0',
  `room` char(50) DEFAULT NULL,
  `mobile_no` char(20) DEFAULT NULL,
  `fa` char(50) DEFAULT NULL,
  `duration` char(20) DEFAULT NULL,
  `type` char(20) DEFAULT NULL,
  `f1` int(11) DEFAULT NULL,
  `f2` int(11) DEFAULT NULL,
  `f3` int(11) DEFAULT NULL,
  `f4` int(11) DEFAULT NULL,
  `f5` int(11) DEFAULT NULL,
  `f6` int(11) DEFAULT NULL,
  `f7` int(11) DEFAULT NULL,
  `f8` int(11) DEFAULT NULL,
  `f9` int(11) DEFAULT NULL,
  `f10` int(11) DEFAULT NULL,
  `cont` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`user_id`, `name`, `mess_name`, `month`, `room`, `mobile_no`, `fa`, `duration`, `type`, `f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`, `f8`, `f9`, `f10`, `cont`) VALUES
('b160109cs', 'vamsi', 'a', 10, 'g-360', '7994311756', 'subhasree', '30 days', 'NON-VEG', 7, 6, 8, 7, 6, 8, 7, 7, 7, 6, 'yes'),
('B160865CS', '', '', 1, '', '', '', '', '', 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 'yes'),
('B160865CS', 'ALLU SAI PRUDHVI', 'B', 10, 'B-127', '9533244333', 'JAYRAJ PB', '2 MONTHS', 'MIXED', 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 'YES');

-- --------------------------------------------------------

--
-- Table structure for table `incharge`
--

CREATE TABLE `incharge` (
  `incharge_id` char(30) NOT NULL DEFAULT '',
  `password` char(50) DEFAULT NULL,
  `mess_name` char(30) DEFAULT NULL,
  `email_id` char(50) DEFAULT NULL,
  `phone_no` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `incharge`
--

INSERT INTO `incharge` (`incharge_id`, `password`, `mess_name`, `email_id`, `phone_no`) VALUES
('a_mess', 'a_mess', 'A', 'a_mess@gmail.com', '7632632872'),
('b_mess', 'b_mess', 'B', 'b_mess@gmail.com', '9999999999'),
('c_mess', '', 'C', 'c_mess@gmail.com', '4534654666'),
('d_mess', 'd_mess', 'D', 'd_mess@gmail.com', '9533244333'),
('e_mess', 'e_mess', 'E', 'e_mess@gmail.com', '7632561881'),
('f_mess', 'f_mess', 'F', 'f_mess@gmail.com', '8500044646'),
('g_mess', 'g_mess', 'G', 'g_mess@gmail.com', '786538299'),
('ih_mess', 'ih_mess', 'IH', 'ih_mess@gmail.com', '9898989898'),
('lh_mess', 'lh_mess', 'LH', 'lh_mess@gmail.com', NULL),
('mlh_mess', 'mlh_mess', 'MLH', 'mlh_mess@gmail.com', NULL),
('pg1_mess', 'pg1_mess', 'PG1', 'pg1_mess@gmail.com', NULL),
('pg2_mess', 'pg2_mess', 'PG2', 'pg2_mess@gmail.com', '9834479202');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `mess_name` char(30) DEFAULT NULL,
  `day` char(20) DEFAULT NULL,
  `m_item` char(200) DEFAULT NULL,
  `a_item` char(200) DEFAULT NULL,
  `e_item` char(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`mess_name`, `day`, `m_item`, `a_item`, `e_item`) VALUES
('B', 'sunday', 'asjlasklaasld', 'sakd;jsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad', 'asdjasgjdgsajkdasdksagdaskdsasakbdxccccxzcdsdds'),
('B', 'monday', 'asjlasklaasld', 'sakd;jsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad', 'asdjasgjdgsajkdasdksagdaskdsasakbdxccccxzcdsdds'),
('B', 'tuesday', 'asjlasklaasld', 'sakd;jsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad', 'asdjasgjdgsajkdasdksagdaskdsasakbdxccccxzcdsdds'),
('B', 'wednesday', 'asjlasklaasld', 'sakd;jsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad', 'asdjasgjdgsajkdasdksagdaskdsasakbdxccccxzcdsdds'),
('B', 'thursday', 'asjlasklaasld', 'sakd;jsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad', 'asdjasgjdgsajkdasdksagdaskdsasakbdxccccxzcdsdds'),
('B', 'friday', 'asjlasklaasld', 'sakd;jsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad', 'asdjasgjdgsajkdasdksagdaskdsasakbdxccccxzcdsdds'),
('C', 'monday', 'asjlasklaasld', 'sakd;jsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad', 'asdjasgjdgsajkdasdksagdaskdsasakbdxccccxzcdsdds'),
('C', 'tuesday', 'asjlasklaasld', 'sakd;jsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad', 'asdjasgjdgsajkdasdksagdaskdsasakbdxccccxzcdsdds'),
('C', 'wednesday', 'asjlasklaasld', 'sakd;jsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad', 'asdjasgjdgsajkdasdksagdaskdsasakbdxccccxzcdsdds'),
('C', 'thursday', 'asjlasklaasld', 'sakd;jsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad', 'asdjasgjdgsajkdasdksagdaskdsasakbdxccccxzcdsdds'),
('C', 'friday', 'asjlasklaasld', 'sakd;jsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad', 'asdjasgjdgsajkdasdksagdaskdsasakbdxccccxzcdsdds'),
('C', 'saturday', 'asjlasklaasld', 'sakd;jsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad', 'asdjasgjdgsajkdasdksagdaskdsasakbdxccccxzcdsdds'),
('C', 'sunday', 'asjlasklaasld', 'sakd;jsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad', 'asdjasgjdgsajkdasdksagdaskdsasakbdxccccxzcdsdds'),
('A', 'monday', 'IDLI', 'PAPPU SAMBAR, BIRYANI', 'MUTTON, TOMATO'),
('A', 'tuesday', 'DOSA', 'BRINJAL, SAMBAR', 'LADYSFINGER, CHICKEN'),
('A', 'wednesday', 'POORI', 'LADYSFINGER, CHICKEN', 'BRINJAL, SAMBAR'),
('A', 'thursday', 'UTAPPA', 'MUTTON, TOMATO', 'MUTTON, TOMATO'),
('A', 'friday', 'DOSA', 'FISH, BIRYANI', 'PAPPU SAMBAR, BIRYANI'),
('A', 'saturday', 'PAROTA', 'LADYSFINGER, CHICKEN', 'BRINJAL, SAMBAR'),
('A', 'sunday', 'POORI', 'MUTTON, TOMATO', 'LADYSFINGER, CHICKEN'),
('D', 'monday', 'Appam: Rice and Coconut Pancake. ...', 'Cauliflower with potatoes sautéed with garam masala, turmeric, sometimes kalonji and curry leaves.', 'Main or side dish. Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'),
('D', 'tuesday', 'Medu Vada. ...', 'Methi leaves and potatoes nicely flavoured. Potato, fresh Methi leaves.', 'Main or side dish. Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.'),
('D', 'wednesday', 'Ven Pongal. ...', 'Green capsicum with potatoes sauted with cumin seeds, onions, tomatoes, ginger-garlic paste, turmeric, red chilli powder and garam masala', 'Methi leaves and potatoes nicely flavoured. Potato, fresh Methi leaves.'),
('D', 'thursday', 'Rawa Upma. ...', 'Fried fish made with curry, ginger and garlic', 'Methi leaves and potatoes nicely flavoured. Potato, fresh Methi leaves.'),
('D', 'friday', 'Puttu.', 'Main or side dish. Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.', 'Fried fish made with curry, ginger and garlic'),
('D', 'saturday', 'Kerala Vegetable Stew Recipe', 'Methi leaves and potatoes nicely flavoured. Potato, fresh Methi leaves.', 'Cauliflower with potatoes sautéed with garam masala, turmeric, sometimes kalonji and curry leaves.'),
('D', 'sunday', 'Rawa Upma. ...', 'Methi leaves and potatoes nicely flavoured. Potato, fresh Methi leaves.', 'Green capsicum with potatoes sauted with cumin seeds, onions, tomatoes, ginger-garlic paste, turmeric, red chilli powder and garam masala');

-- --------------------------------------------------------

--
-- Table structure for table `mess`
--

CREATE TABLE `mess` (
  `mess_name` char(30) NOT NULL DEFAULT '',
  `mess_type` char(30) NOT NULL,
  `mess_capacity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mess`
--

INSERT INTO `mess` (`mess_name`, `mess_type`, `mess_capacity`) VALUES
('A', 'NORTH_MESS', 200),
('B', 'SOUTH_MESS', 300),
('C', 'NORTH AND SOUTH_MESS', 300),
('D', 'MALAYALAM_MESS', 200),
('E', 'SOUTH AND MALAYALAM_MESS', 20),
('F', 'VEG_MESS', 90),
('G', 'mixed_mess', 100),
('IH', 'ANDHRA_MESS', 180),
('LH', 'MIXED_MESS', 190),
('MLH', 'SOUTH_MESS', 350),
('PG1', 'ANDHRA_MESS', 350),
('PG2', 'MIXED_MESS', 350);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` char(30) NOT NULL DEFAULT '',
  `name` char(50) DEFAULT NULL,
  `password` char(50) DEFAULT NULL,
  `dues` int(11) DEFAULT NULL,
  `phone_no` char(36) DEFAULT NULL,
  `email_id` char(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `password`, `dues`, `phone_no`, `email_id`) VALUES
('B160038CS', 'ROSHAN ANTONY BHANU XAVIER PAUL', 'B160038CS', 1000, NULL, 'roshan@nitc.ac.in'),
('B160046CS', 'THOMAS MANAKALATHIL PHILIP', 'B160046CS', 2000, NULL, 'thomas@nitc.ac.in'),
('B160057CS', 'RAHUL MENON', 'B160057CS', 5000, NULL, 'rahul@nitc.ac.in'),
('B160072CS', 'JOSSY JOSEPH', 'B160072CS', -3253, NULL, NULL),
('B160083CS', 'SANJU ALEX JACOB', 'B160083CS', -3000, NULL, NULL),
('B160087CS', 'AMALU PRADEEP THEVALAKARA', 'B160087CS', 4000, NULL, NULL),
('B160093CS', 'RAINA', 'B160093CS', -3253, NULL, NULL),
('B160099CS', 'YALAMARTI SRI RAM PAVAN\r\n', 'B160099CS', 1, NULL, NULL),
('B160109CS', 'RAYIPALLI VAMSI KRISHNA', 'B160109CS', -1200, NULL, NULL),
('B160116CS', 'APARNA M', 'B160116CS', 7000, NULL, NULL),
('B160124CS', 'MANDYAM REDDYSEKHAR', 'B160124CS', -1500, NULL, NULL),
('B160139CS', 'ASWIN A', 'B160139CS', -3253, NULL, NULL),
('B160146CS', 'PUNIT KUMAR', 'B160146CS', -1500, NULL, NULL),
('B160153CS', 'SANGEETH JOHN', 'B160153CS', 2000, NULL, NULL),
('B160158CS', 'MANU JOSE PHILIP', 'B160158CS', 2000, NULL, NULL),
('B160175CS', 'SUDHI MOHAN', 'B160175CS', -3253, NULL, NULL),
('B160185CS', 'SREERAJ R MENON', 'B160185CS', -1200, NULL, NULL),
('B160198CS', 'T BHARAT BHUSHAN REDDY', 'B160198CS', 1000, NULL, NULL),
('B160210CS', 'HANAMKONDA VAMSHI', 'B160210CS', -3253, NULL, NULL),
('B160214CS', 'REDNAM SAI SUJITHA', 'B160214CS', 7000, NULL, NULL),
('B160228CS', 'VRINDHA K', 'B160228CS', -3253, NULL, NULL),
('B160230CS', 'ABHIJITH S', 'B160230CS', -1500, NULL, NULL),
('B160246CS', 'HARISHANKAR S', 'B160246CS', 1000, NULL, NULL),
('B160253CS', 'BINIL BABU G', 'B160253CS', 1000, NULL, NULL),
('B160268CS', 'SNEHA K', 'B160268CS', 2000, NULL, NULL),
('B160275CS', 'ADHERSH KRISHNA V', 'B160275CS', 2000, NULL, NULL),
('B160278CS', 'RAHUL M S', 'B160278CS', -3000, NULL, NULL),
('B160286CS', 'PILLA VIJAYA LAKSHMI', 'B160286CS', 1000, NULL, NULL),
('B160326CS', 'NIRMALA VAISHALINI', 'B160326CS', 2000, NULL, NULL),
('B160333CS', 'KOPPARTHI ANNARAPU SIVA VARDHAN RED', 'B160333CS', 7000, NULL, NULL),
('B160340CS', 'PASUPULETI SATYANARAYANA', 'B160340CS', -3253, NULL, NULL),
('B160346CS', 'RISHAD C', 'B160346CS', -3253, NULL, NULL),
('B160356CS', 'AJISHA T.P', 'B160356CS', -3000, NULL, NULL),
('B160376CS', 'ANUPAMA KUMARI', 'B160376CS', -1200, NULL, NULL),
('B160405CS', 'MUHAMMAD NIYAS T T K', 'B160405CS', 4000, NULL, NULL),
('B160428CS', 'MARUBOYINA SAI ANEESHA', 'B160428CS', -3000, NULL, NULL),
('B160470CS', 'AKHIL JOSEPH SUNNY', 'B160470CS', -5000, NULL, NULL),
('B160473CS', 'NUKALA SAI DHANUJ', 'B160473CS', -1200, NULL, NULL),
('B160483CS', 'VISAKH S', 'B160483CS', -3000, NULL, NULL),
('B160497CS', 'GHORADKAR PRAJWAL PANDURANG', 'B160497CS', 2000, NULL, NULL),
('B160506CS', 'SHAIK MOHAMMAD SHAREEF', 'B160506CS', -3253, NULL, NULL),
('B160511CS', 'SHIRSWAR MALHAR HEMANTKUMAR', 'B160511CS', 4000, NULL, NULL),
('B160517CS', 'GURUDU KALYAN KUMAR', 'B160517CS', 7000, NULL, NULL),
('B160536CS', 'KONDIPUDI KRUPA PRAKASH', 'B160536CS', -1200, NULL, NULL),
('B160547CS', 'CHEDURUPALLI JAGADEESH', 'B160547CS', -3000, NULL, NULL),
('B160555CS', 'CHUNDRU PRUDHVI SAIRAM', 'B160555CS', 5000, NULL, NULL),
('B160581CS', 'ANJITHA S BABU', 'B160581CS', 2000, NULL, NULL),
('B160589CS', 'MOHAMMAD HUSAIN', 'B160589CS', -3253, NULL, NULL),
('B160606CS', 'BYRI YOGESWAR BHARAT KUMAR', 'B160606CS', 2000, NULL, NULL),
('B160610CS', 'STEBIN JOSEPH', 'B160610CS', 7000, NULL, NULL),
('B160632CS', 'SHAH KENIL RAMESHBHAI', 'B160632CS', 5000, NULL, NULL),
('B160642CS', 'BISHAIN NAVRANGE', 'B160642CS', -1500, NULL, NULL),
('B160653CS', 'GOGINENI BHARATH', 'B160653CS', -1200, NULL, NULL),
('B160660CS', 'PACHCHIPULUSU VINEELA', 'B160660CS', 0, NULL, NULL),
('B160668CS', 'LINGAMANENI DIVYA', 'B160668CS', 143, NULL, NULL),
('B160683CS', 'TARITLA RAHUL', 'B160683CS', -1500, NULL, NULL),
('B160688CS', 'VISHNU POOTHERY', 'B160688CS', 5000, NULL, NULL),
('B160710CS', 'RAKESH CHOWDARY YARLAGADDA', 'B160710CS', 4000, NULL, NULL),
('B160716CS', 'RAVURI ANUSHA', 'B160716CS', 2000, NULL, NULL),
('B160733CS', 'JONNALAGADDA VISHNU VARDHAN SAI', 'B160733CS', 5000, NULL, NULL),
('B160741CS', 'JISHNU V', 'B160741CS', -3000, NULL, NULL),
('B160747CS', 'GAJJARAPU HEMANTHNATH CHOWDARY', 'B160747CS', 4000, NULL, NULL),
('B160756CS', 'RAHUL KUMAR', 'B160756CS', 2000, NULL, NULL),
('B160769CS', 'JAMMALA VINOD KUMAR REDDY', 'B160769CS', 2000, NULL, NULL),
('B160799CS', 'SAI GOPAL RATHOD', 'B160799CS', -1500, NULL, NULL),
('B160829CS', 'HARSHITHA POTLA', 'B160829CS', -1500, NULL, NULL),
('B160850CS', 'M RAM PRABHU', 'B160850CS', 1000, NULL, NULL),
('b160854ec', 'sumanth', 'b160854ec', 0, '7994311111', 'sumanth@gmail.com'),
('B160855CS', 'MERUGU SHARATH', 'B160855CS', 99995, NULL, NULL),
('B160865CS', 'ALLU SAI PRUDHVI', 'b160865cs', 0, NULL, NULL),
('B160866CS', 'SRI LAKSHMI', 'B160866CS', 0, 'sri_b160866cs@gmail.com', '9533344333'),
('B160886CS', 'KOLLI SAI SARANYA', 'B160886CS', 2000, NULL, NULL),
('B160901CS', 'JYOTHSNA SHAJI', 'B160901CS', 4000, NULL, NULL),
('B160932CS', 'FARSANA.K', 'B160932CS', -3253, NULL, NULL),
('b160999cs', 'srinivas', 'b160999cs', 0, 'srinivas@gmail.com', '98346644572');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allotment`
--
ALTER TABLE `allotment`
  ADD PRIMARY KEY (`user_id`,`month`);
  

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`user_id`,`month`);

--
-- Indexes for table `incharge`
--
ALTER TABLE `incharge`
  ADD PRIMARY KEY (`incharge_id`),
  ADD KEY `mess_name` (`mess_name`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD KEY `mess_name` (`mess_name`);

--
-- Indexes for table `mess`
--
ALTER TABLE `mess`
  ADD PRIMARY KEY (`mess_name`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `allotment`
--
ALTER TABLE `allotment`
  ADD CONSTRAINT `allotment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `allotment_ibfk_2` FOREIGN KEY (`mess_name`) REFERENCES `mess` (`mess_name`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `incharge`
--
ALTER TABLE `incharge`
  ADD CONSTRAINT `incharge_ibfk_1` FOREIGN KEY (`mess_name`) REFERENCES `mess` (`mess_name`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`mess_name`) REFERENCES `mess` (`mess_name`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
