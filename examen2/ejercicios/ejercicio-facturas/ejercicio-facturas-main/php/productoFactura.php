<?php
// $datos = json_encode("hola");
// echo $datos;

// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");

$datos = obtenerProductoFactura();
$datos = json_encode($datos);
echo $datos;


function obtenerProductoFactura() {
    $conexion = null;
    try {
        $dsn = "mysql:host=localhost;dbname=ajax";
        $conexion = new PDO($dsn, "root", "");
    } catch (PDOException $e){
        echo $e->getMessage();
    }
    $producto= file_get_contents('php://input');
    //$producto = json_decode($producto);
    //return $producto;
    $stmt = $conexion -> prepare("SELECT * from productos where descripcion = :producto");
    $stmt->bindParam(':producto', $producto);
    //para devolver un array asociativo
    // $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $stmt->execute();
    $producto = $stmt-> fetchAll(PDO::FETCH_ASSOC);
    return $producto;
 }
?>