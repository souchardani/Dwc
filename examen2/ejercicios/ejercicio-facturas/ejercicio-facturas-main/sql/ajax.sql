-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS ajax;

-- Seleccionar la base de datos
USE ajax;

-- Crear la tabla productos
CREATE TABLE IF NOT EXISTS productos (
    codigo INT PRIMARY KEY,
    descripcion VARCHAR(255),
    precio DECIMAL(10, 2)
);

-- Insertar 10 datos de prueba en la tabla productos
INSERT INTO productos (codigo, descripcion, precio) VALUES
(1, 'Reloj', 49.99),
(2, 'Ordenador portátil', 899.99),
(3, 'Martillo', 12.99),
(4, 'Cargador de teléfono', 19.99),
(5, 'Zapatillas deportivas', 59.99),
(6, 'Botella de vino', 24.99),
(7, 'Mochila', 34.99),
(8, 'Teclado inalámbrico', 29.99),
(9, 'Gafas de sol', 39.99),
(10, 'Libreta de cuero', 14.99);
