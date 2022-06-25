/***** Archivo para configuracion inicial del visualizador ******/

/***** Inicio de variable para la visualizacion del mapa
 * Se establecen variables de vista, nivel de zoom, control de vista del zoom y el mapa principal a visualizar.
 */
var mainMap = L.map('viewer', {
    attributionControl: false,
    center: [21.63892, -100.14313],
    minZoom: 1,
    maxZoom: 18,
    zoom: 5,
    zoomSnap: 0,
    zoomDelta: 0.5,
    zoomControl: false,
    layers: [OSMMexico],
});

/***** Arreglo de mapas a visualizar como un componente "selector de mapas" */
var baseMap = {
    "OSM Offline" : OSMMexico,
    "100KSAT" : KSAT100,
    "100KT" : KT100,
    "1MAI" : MAI1,
    "1MT" : MT1,
    "250KATP" : KATP250,
    "250KT" : KT250,
    "2MT" : MT2,
    "500KAF" : KAF500,
    "500KT" : KT500,
    "50KT" : KT50,
    "HP" : HP,
    "LP" : LP,
    "DemMexico" : demMexico,
    "Relieve" : relieve,
    "OSM Online" : openstreetmap,
};

/***** Crea un selector de capas conforme al arreglo "baseMap" */
L.control.layers(baseMap).addTo(mainMap);

//Establece el método "click" sobre la interfaz del mapa
mainMap.on('click', onMapClick);

//Función que establece las acciones al hacer clic sobre el mapa. Muestra un mensaje indicando las coordenadas
//del lugar seleccionado dentro del mapa
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Coordenadas<br>Latitud: " + e.latlng.lat.toString() + "<br>Longitud: " + e.latlng.lng.toString())
        .addTo(mainMap);
}

(function(){
    var actHora = function(){
        var fecha = new Date(),
            mes = fecha.getUTCMonth(),
            dia = fecha.getUTCDate(),
            año = fecha.getUTCFullYear(),
            hora = fecha.getUTCHours(),
            min = fecha.getUTCMinutes(),
            seg = fecha.getUTCSeconds();

        var paño = document.getElementById('año'),
            pmes = document.getElementById('mes'),
            pdia = document.getElementById('dia'),
            phora = document.getElementById('hora'),
            pmin = document.getElementById('min'),
            pseg = document.getElementById('seg');
        pdia.textContent = dia;
        pmes.textContent = mes;
        paño.textContent = año;
        
        phora.textContent = hora;
        if (min < 10){ min = "0" + min };
        if (seg < 10) {seg = "0" + seg };
        pmin.textContent = min;
        pseg.textContent = seg;
    };
    actHora();
    var intervalo = setInterval (actHora, 1000)
}())