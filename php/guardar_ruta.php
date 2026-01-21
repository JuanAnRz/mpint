<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

$mysqli = new mysqli("localhost", "root", "", "recoleccion_basura");

if ($mysqli->connect_error) {
  echo json_encode(["ok" => false, "error" => "Error conexión BD"]);
  exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data["nodos"])) {
  echo json_encode(["ok" => false, "error" => "Datos inválidos"]);
  exit;
}

$nodos = $data["nodos"];

/* 1️⃣ Crear ruta */
$nombre = "Ruta planificada";
$stmt = $mysqli->prepare(
  "INSERT INTO rutas_programadas (nombre, fecha_creacion) VALUES (?, NOW())"
);
$stmt->bind_param("s", $nombre);
$stmt->execute();

$idRuta = $stmt->insert_id;
$stmt->close();

/* 2️⃣ Insertar nodos */
$stmt = $mysqli->prepare(
  "INSERT INTO rutas_nodos (id_ruta, orden, lat, lng)
   VALUES (?, ?, ?, ?)"
);

$orden = 0;
foreach ($nodos as $n) {
  $stmt->bind_param(
    "iidd",
    $idRuta,
    $orden,
    $n["lat"],
    $n["lng"]
  );
  $stmt->execute();
  $orden++;
}

$stmt->close();

echo json_encode([
  "ok" => true,
  "id_ruta" => $idRuta,
  "nodos_guardados" => count($nodos)
]);
