/* ================= MAPA ================= */
const map = L.map('map').setView([-33.2526, -58.0796], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

/* ================= CAMIÓN ================= */
const camion = { id: 1, posicion: { lat: -33.2526, lng: -58.0796 } };

const iconCamion = L.icon({
  iconUrl: 'imgs/garbage-truck.png', // ruta de tu icono
  iconSize: [32, 32],
  iconAnchor: [16, 16]
});

const markerCamion = L.marker(camion.posicion, { icon: iconCamion }).addTo(map);

/* ================= NODOS ================= */
let nodos = [];
const nodoIcon = L.icon({
  iconUrl: 'imgs/nodo.png', // icono para los nodos
  iconSize: [24, 24],
  iconAnchor: [12, 12]
});

map.on('click', e => {
  const nodo = { lat: e.latlng.lat, lng: e.latlng.lng };
  nodos.push(nodo);
  L.marker(nodo, { icon: nodoIcon }).addTo(map);
  actualizarInputNodos();
});

/* ================= INPUT ================= */
const showNodos = document.getElementById('nodosInput');

function actualizarInputNodos() {
  const valor = nodos.map(n => `[${n.lat.toFixed(5)}, ${n.lng.toFixed(5)}]`);
  showNodos.value = valor.join(", ");
  console.log("Nodos actuales:", valor);
}

/* ================= DIBUJAR RUTA (Map Matching) ================= */
async function dibujarRutaMapMatching(nodos) {
  if (nodos.length < 2) {
    alert("Necesitás al menos 2 nodos");
    return nodos;
  }

  const coordenadas = nodos.map(n => `${n.lng},${n.lat}`).join(";");
  const url = `https://router.project-osrm.org/match/v1/driving/${coordenadas}?overview=full&geometries=geojson`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error OSRM Map Matching");
    const data = await res.json();

    if (!data.matchings || data.matchings.length === 0) {
      console.warn("OSRM no pudo mapear la ruta, dibujando línea directa");
      dibujarLineaDirecta(nodos);
      return nodos;
    }

    const geometria = data.matchings[0].geometry.coordinates;
    const latlngs = geometria.map(c => [c[1], c[0]]);
    L.polyline(latlngs, { color: 'blue', weight: 4 }).addTo(map);

    return nodos; // Retornamos solo los nodos del admin para guardar

  } catch (err) {
    console.error(err);
    dibujarLineaDirecta(nodos);
    return nodos;
  }
}

/* ================= DIBUJAR LÍNEA DIRECTA ================= */
function dibujarLineaDirecta(nodos) {
  const latlngs = nodos.map(n => [n.lat, n.lng]);
  L.polyline(latlngs, { color: 'blue', weight: 4, dashArray: '5,5' }).addTo(map);
}

/* ================= SIMULAR CAMIÓN ================= */
function simularCamion(nodos) {
  if (!nodos || nodos.length === 0) return;
  let i = 0;
  const intervalo = setInterval(() => {
    if (i >= nodos.length) {
      clearInterval(intervalo);
      return;
    }
    markerCamion.setLatLng(nodos[i]);
    i++;
  }, 300);
}

/* ================= GUARDAR RUTA ================= */
async function guardarRuta() {
  if (nodos.length < 2) {
    alert("Agregá al menos 2 nodos antes de guardar");
    return;
  }

  const nodosFinales = await dibujarRutaMapMatching(nodos);

  simularCamion(nodosFinales);

  fetch('php/guardar_ruta.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nodos: nodosFinales })
  })
  .then(res => res.json())
  .then(data => {
    if (!data.ok) {
      console.error("Error BD:", data.error);
      return;
    }
    console.log("Ruta guardada OK, ID:", data.id_ruta);
  })
  .catch(err => console.error("Error guardando ruta:", err));
}

/* ================= BOTÓN ================= */
document.getElementById('guardarRutaBtn').addEventListener('click', guardarRuta);
