--
-- Database: `cs595_musicamaze`
--

DROP SCHEMA IF EXISTS `cs595_musicamaze`;
CREATE SCHEMA `cs595_musicamaze` ;
use `cs595_musicamaze`;

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
`userId` int(4) NOT NULL AUTO_INCREMENT,
`username` varchar(30) NOT NULL,
`email` varchar(30) NOT NULL,
`password` varchar(15) NOT NULL,
primary key (`userId`))
ENGINE=InnoDB
DEFAULT CHARACTER SET = latin1;

--
-- Inserting data for table `user`
--

INSERT INTO `user` (`userId`, `username`, `email`, `password`) VALUES
(1001, 'olive', 'olive@gmail.com', 'olive123'),
(1002, 'mia_g', 'mia@gmail.com', 'mia123'),
(1003, 'kyle.g', 'kyle@gmail.com','kyle123');