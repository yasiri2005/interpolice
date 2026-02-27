-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-02-2026 a las 16:28:02
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `interpolice`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudadano`
--

CREATE TABLE `ciudadano` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(200) NOT NULL,
  `apodo` varchar(200) DEFAULT NULL,
  `fechaNace` date NOT NULL,
  `planetaOrigen` varchar(200) NOT NULL,
  `planetaReside` varchar(200) NOT NULL,
  `foto` varchar(200) DEFAULT NULL,
  `codigoQr` varchar(250) NOT NULL,
  `estado` varchar(1) NOT NULL DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ciudadano`
--

INSERT INTO `ciudadano` (`codigo`, `nombre`, `apellidos`, `apodo`, `fechaNace`, `planetaOrigen`, `planetaReside`, `foto`, `codigoQr`, `estado`) VALUES
(1, 'cristiano', 'ronaldo', 'el bicho', '1985-02-06', 'tierra', 'jupiter', NULL, '123456789', 'A'),
(2, 'james', 'rodriguez', 'el gago', '1995-02-15', 'tierra', 'saturno', 'eo.png', '9999999', 'A'),
(4, 'mario', 'bros', 'mariorrea', '1995-02-15', 'tierra', 'saturno', 'eo.png', '123654', 'A'),
(5, 'fausto', 'asprilla', 'mariorrea', '1995-02-15', 'tierra', 'marte', 'eo.png', '123654', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) DEFAULT NULL,
  `apellidos` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `avatar` varchar(200) DEFAULT NULL,
  `rol` varchar(200) DEFAULT 'USER'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellidos`, `email`, `password`, `avatar`, `rol`) VALUES
(1, 'cristiano', 'ronaldo', 'elbicho@gmail.com', '12345', 'elbicho.png', 'USER'),
(3, 'luigi el mka', 'bros', 'luigibros@gmail.com', '12345', 'luigi.png', 'USER'),
(4, 'yesli', 'llazury', 'llazury@gmail.com', '12345', 'eo.png', 'ADMIN');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ciudadano`
--
ALTER TABLE `ciudadano`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ciudadano`
--
ALTER TABLE `ciudadano`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
