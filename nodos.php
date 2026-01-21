<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Rutas planificadas</title>

  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet/dist/leaflet.css"
  />
  <style>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    #map {
      width: calc(100% - 400px);
      height: 100vh;
      
    }
    #nodos{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 400px;
      height: 100vh;
      overflow: auto;
      background: #b1dcff;
      border-left: 2px solid #000;
    }
    body{
      font-family: Arial, Helvetica, sans-serif;
      display: flex;
      flex-wrap: nowrap;
    }
    button,input{
      margin: 10px;
      padding: 10px;
      font-size: 16px;
      height: 40px;
      width: calc(100% - 40px);
      border: none;
      border-radius: 5px;
    }
    input{
      height:200px;
      background: #fff;
      border: 2px solid #000;
      flex-wrap: wrap;
      overflow-X:scroll
    }
    h1{
      font-size: 30px;
      line-height: 40px;
    }
  </style>
</head>
<body>

<div id="map"></div>
<div id="nodos">
  <h1>RUTA</h1>
  <input id="nodosInput" disabled type="text">
  <button id="dibujarRutaBtn" onclick="dibujarRutaOSRM(nodos)">Dibujar ruta</button>
  <button id="guardarRutaBtn">Guardar ruta</button>
  <button>Borrar ruta</button>
</div>

<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

<script src="app.js?v=<?php echo time(); ?>"></script>
</body>
</html>
