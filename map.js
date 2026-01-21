// Inicializar el mapa centrado en coordenadas
let map = L.map('map').setView([-33.25844722222, -58.029869444444], 15);

// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

// ======= POLÍGONOS =======

    // LUNES (azul) - 3 polígonos
    const lunes1 = L.polygon([
      [-33.25670499607213, -58.020279894338486],
      [-33.258412121563836, -58.03186763072304],
      [-33.26053010247772, -58.031578158992005],
      [-33.26253969455958, -58.03220585639838],
      [-33.26552860768585, -58.03313557448135],
      [-33.26627917069896, -58.03344013730124],
      [-33.26625236498843, -58.033600433522395],
      [-33.264094478277684, -58.03291115977157],
      [-33.26272734233896, -58.03259056732928],
      [-33.26221801171431, -58.03513927724612],
      [-33.262117931285204, -58.03698152152819],
      [-33.26156612823656, -58.036778470735],
      [-33.26092942807953, -58.04266694374154],
      [-33.26405919737827, -58.04355149162224],
      [-33.264781965122154, -58.043598271232156],
      [-33.26546588507099, -58.03922903256766],
      [-33.266501110864006, -58.03976638417362],
      [-33.26843486236938, -58.040116903948544],
      [-33.268669221271836, -58.038107685278064],
      [-33.26958713967128, -58.03451016347586],
      [-33.26984104824344, -58.03434664362548],
      [-33.27122510367541, -58.0263576310352],
      [-33.26882771384501, -58.02561321839809],
      [-33.26965758700347, -58.02180844269748],
      [-33.262057022854954, -58.01990339772199],
      [-33.26094085181671, -58.01938999324507],
      [-33.25670499607213, -58.020279894338486]
    ]);

    const lunes2 = L.polygon([
      [-33.25844237879521, -58.03204855055476],
      [-33.25904752123018, -58.0365715463482],
      [-33.259834200127486, -58.03490708389596],
      [-33.2603788198296, -58.03382156490578],
      [-33.260136767047946, -58.031831446756584],
      [-33.25844237879521, -58.03204855055476]
    ]);

    const lunes3 = L.polygon([
      [-33.25887464424262, -58.04159349213231],
      [-33.25859041287987, -58.04219777177926],
      [-33.25863778483779, -58.04293423759911],
      [-33.25860620353573, -58.043821773330535],
      [-33.258858853635374, -58.04436940176075],
      [-33.259522056671706, -58.044482704194294],
      [-33.259379942158674, -58.04253767908051],
      [-33.25953784715819, -58.04217888804055],
      [-33.25887464424262, -58.04159349213231]
    ]);

    const lunesGroup = L.layerGroup([lunes1, lunes2, lunes3]).addTo(map);

    // MARTES (verde)
    const martes = L.polygon([
      [-33.24562738089594, -58.0346793846969],
      [-33.24771693844611, -58.04836603145425],
      [-33.24874898222138, -58.048220491816096],
      [-33.24972018175402, -58.04851100108621],
      [-33.250995038007936, -58.049453446429595],
      [-33.25160191523868, -58.051559683585225],
      [-33.25384779240685, -58.0504696491069],
      [-33.25642558992522, -58.04730147175374],
      [-33.257335490399576, -58.045705575689524],
      [-33.25742647992564, -58.04316665013205],
      [-33.258912628773636, -58.0409541578604],
      [-33.25936756724426, -58.0395758839863],
      [-33.25830604046077, -58.032104188774795],
      [-33.24562738089594, -58.0346793846969]
    ]).addTo(map);

    // MIÉRCOLES (amarillo)
    const miercoles = L.polygon([
      [-33.25821428291761, -58.03198954742878],
      [-33.25660046083806, -58.020359703737014],
      [-33.243972359649746, -58.02330249262799],
      [-33.2455850138434, -58.03460124703673],
      [-33.25821428291761, -58.03198954742878]
    ]).addTo(map);

    // JUEVES (naranja) - con nuevas coordenadas agregadas
    const jueves = L.polygon([
      [-33.259187535849, -58.01830974132977],
      [-33.25619197335747, -58.01674019564423],
      [-33.2557855832425, -58.016436458426114],
      [-33.25505353617035, -58.01589516174526],
      [-33.25462174098381, -58.01546992963951],
      [-33.254228043513514, -58.01490801578586],
      [-33.25388106036303, -58.01405404051789],
      [-33.25376676023794, -58.01081923615595],
      [-33.25319525773612, -58.01097110476502],
      [-33.25332225861519, -58.008905691680965],
      [-33.25462593789639, -58.00840004515737],
      [-33.25486409845812, -58.00595552006854],
      [-33.25357405432026, -58.00600298657524],
      [-33.25252215808116, -58.00583685380212],
      [-33.25210536550223, -58.005504588255846],
      [-33.24765945168008, -58.00507738630017],
      [-33.24813581518132, -58.00849497368047],
      [-33.24738157977537, -58.00870857296029],
      [-33.24781824827542, -58.011936292306615],
      [-33.247044161668384, -58.011936292306615],
      [-33.24706401012774, -58.012814422678275],
      [-33.245200211158725, -58.01275990403593],
      [-33.24487138294858, -58.0123898539118],
      [-33.244639268173714, -58.01242454611088],
      [-33.244668284472596, -58.01267895772797],
      [-33.24468762738682, -58.01530400079851],
      [-33.24493642031528, -58.01665938412398],
      [-33.244646276966236, -58.017075690514446],
      [-33.244124016509794, -58.017607637568105],
      [-33.24326324709574, -58.01780422669677],
      [-33.243243903865185, -58.018012379892],
      [-33.24381452735855, -58.01791986736063],
      [-33.244772006068885, -58.01773484348922],
      [-33.24610665558356, -58.01708725577102],
      [-33.24650317796174, -58.01662469311556],
      [-33.24677397269854, -58.016081181995304],
      [-33.247131807313046, -58.01623151485826],
      [-33.24772174766901, -58.01680971817758],
      [-33.24877589347214, -58.016821282244194],
      [-33.24877589347214, -58.01698317917375],
      [-33.24846642079368, -58.017688587223546],
      [-33.24857280215026, -58.01872935319837],
      [-33.247750761027, -58.01891437826042],
      [-33.245739145431, -58.019330684650896],
      [-33.24445285010614, -58.01979123952907],
      [-33.2440079607818, -58.02003408492271],
      [-33.24369847122081, -58.02047351944567],
      [-33.24365978494788, -58.02095921023435],
      [-33.24396927464707, -58.02320263911352],
      [-33.259482081328514, -58.019534209267604],
      [-33.25938389961239, -58.01852779726383],
      [-33.259187535849, -58.01830974132977],
      // NUEVAS COORDENADAS JUEVES
      [-33.24800079238781, -58.016908181171644],
      [-33.24789455991576, -58.01678115530001],
      [-33.24717748735044, -58.01675998432171],
      [-33.24625679296198, -58.01701403606435],
      [-33.24566364817082, -58.017310429764166],
      [-33.24607973523683, -58.01719398938201],
      [-33.24635417455755, -58.017088134489285],
      [-33.24672599419892, -58.01696110861769],
      [-33.24725716237086, -58.01687642470387],
      [-33.247859149063395, -58.01686583921442],
      [-33.247443070468506, -58.017321015253],
      [-33.247319131780635, -58.017638579931145],
      [-33.24727486792126, -58.01789263167379],
      [-33.24687649217491, -58.017458626613475],
      [-33.24627449871402, -58.017183403892574],
      [-33.24607973523683, -58.017268087807],
      [-33.246416144607586, -58.017310429764166],
      [-33.24667287720428, -58.01743745563516],
      [-33.24689419780249, -58.01760682346337],
      [-33.247115517840214, -58.01782911873828],
      [-33.24721289848004, -58.01796673009872],
      [-33.2472837206941, -58.01821019635187],
      [-33.24738995390968, -58.018400735159005],
      [-33.24749618699506, -58.01862303043387],
      [-33.2473456900851, -58.018824154729856],
      [-33.2470624010823, -58.018919424133074],
      [-33.246911903426444, -58.01903586451526],
      [-33.247292573467114, -58.0190041080475],
      [-33.247859149063395, -58.01889825315479],
      [-33.248363752360575, -58.01875005630488],
      [-33.24835489969603, -58.01847483358398],
      [-33.24816899353901, -58.01849600456225],
      [-33.24789455991576, -58.01861244494445],
      [-33.24764668364482, -58.0185595174984],
      [-33.24746962873532, -58.01830546575576],
      [-33.247327984550054, -58.017924388141495],
      [-33.247363395617626, -58.01770209286727],
      [-33.24743421771075, -58.017490383081864],
      [-33.247540450742335, -58.01729984427472],
      [-33.24772635823741, -58.017098719978776],
      [-33.24800079238781, -58.016908181171644]
    ]).addTo(map);

    // ======= TOGGLE POR CLICK =======
    function togglePolygon(polygon) {
      if (map.hasLayer(polygon)) {
        map.removeLayer(polygon);
      } else {
        polygon.addTo(map);
      }
    }

    const legend = L.control({ position: "bottomright" });
    legend.onAdd = function () {
      const div = L.DomUtil.create("div", "legend");
      div.innerHTML = `
        <h4>Zonas por día</h4>
        <div id="toggle-lunes"><span style="background: blue"></span> Lunes</div>
        <div id="toggle-martes"><span style="background: green"></span> Martes</div>
        <div id="toggle-miercoles"><span style="background: yellow"></span> Miércoles</div>
        <div id="toggle-jueves"><span style="background: orange"></span> Jueves</div>
      `;
      return div;
    };
    legend.addTo(map);

    // Eventos click
    document.getElementById("toggle-lunes").addEventListener("click", () => togglePolygon(lunesGroup));
    document.getElementById("toggle-martes").addEventListener("click", () => togglePolygon(martes));
    document.getElementById("toggle-miercoles").addEventListener("click", () => togglePolygon(miercoles));
    document.getElementById("toggle-jueves").addEventListener("click", () => togglePolygon(jueves));

    // Lunes (azul) - aplicar color individualmente
lunes1.setStyle({ color: "blue", fillColor: "blue", fillOpacity: 0.4 });
lunes2.setStyle({ color: "blue", fillColor: "blue", fillOpacity: 0.4 });
lunes3.setStyle({ color: "blue", fillColor: "blue", fillOpacity: 0.4 });



// Martes
martes.setStyle({ color: "green", fillColor: "green", fillOpacity: 0.4 }).addTo(map);

// Miércoles
miercoles.setStyle({ color: "yellow", fillColor: "yellow", fillOpacity: 0.4 }).addTo(map);

// Jueves
jueves.setStyle({ color: "orange", fillColor: "orange", fillOpacity: 0.4 }).addTo(map);

const nodos = [];

fetch('mapa/nodos.json')
.then(response => response.json())
.then(data => {
    
    const nodosInput = document.getElementById("nodosInput");
    const contNodos=document.getElementById("nodos");
    nodosInput.value = "";
    data.forEach(nodo => {
        const marker=L.circleMarker([nodo.lat, nodo.lon], {
            radius: 5,
            color: 'black',
            fillOpacity: 0.5
        }).addTo(map);

        marker.on('click', () => {
            const coordenada = `[${nodo.lat},${nodo.lon}]`;
            const element=document.createElement('div');
            element.innerHTML=`Nodo ID: ${nodo.id}<br>Coordenadas: ${coordenada}`;
            element.className='nodo';
            contNodos.appendChild(element);
            nodos.push({ lat: nodo.lat, lng: nodo.lon });
            if (nodosInput.value) {
                nodosInput.value += ', ' + coordenada;
            } else {
                nodosInput.value = coordenada;
            }
            console.log("Nodos actuales:", nodos);
            
        });
      });
});

//------------------------------------Linea Directa--------------------------------
const btnLi = document.getElementById('btnLi');

btnLi.addEventListener('click', () => {
  dibujarLineaDirecta(nodos);
});

function dibujarLineaDirecta(nodos) {
  const latlngs = nodos.map(n => [n.lat, n.lng]);
  L.polyline(latlngs, { color: 'blue', weight: 4, dashArray: '5,5' }).addTo(map);
}

//-----------------------------------Camino Entero---------------------------------

const btnSimular = document.getElementById('btnSimular');

btnSimular.addEventListener('click', async () => {
  await dibujarRutaMapMatching(nodos);
});

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

//------------------------Simular camión----------------------------

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

