<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$datos = obtenerProductos();
$datos = json_encode($datos);
echo $datos;


function obtenerProductos() {
    $conexion = null;
    try {
        $dsn = "mysql:host=localhost;dbname=ajax";
        $conexion = new PDO($dsn, "root", "");
    } catch (PDOException $e){
        echo $e->getMessage();
    }
    
    $stmt = $conexion -> prepare("SELECT * from productos");
    //para devolver un array asociativo
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $stmt->execute();
    $productos = $stmt-> fetchAll(PDO::FETCH_OBJ);
    return $productos;
}
?>