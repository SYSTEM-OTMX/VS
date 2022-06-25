/**** Configuracion de las capas que se usaran en el visualizador ****/
/**** La estructura para la declaracion de las variables es la siguiente:
***** 
var NombreVariable = L.tileLayer.wms("DireccionDelServidorDeMapas",{
    layers: "NombreCapa(s)",
    format: "FormatoDeEntrega",
    transparent: "Valor Boleano para aplicar o no transparencia"
    *attribution: "Texto en formato html a fin descriptivo"
});

*Este valor solo se establece cuando se declara un mapa desde internet.
****/

var OSMMexico = L.tileLayer.wms('http://localhost:8080/geoserver/mapasETSA/wms?',{
    layers: "osm_mapasETSA"
}),
KSAT100 = L.tileLayer.wms('http://localhost:8080/geoserver/mapasETSA/wms?',{
    layers: "100KSAT",
    format: "image/jpeg",
    transparent: false
}),
KT100 = L.tileLayer.wms('http://localhost:8080/geoserver/mapasETSA/wms?',{
    layers: "100KT",
    format: "image/jpeg",
    transparent: false
}),
MAI1 = L.tileLayer.wms('http://localhost:8080/geoserver/mapasETSA/wms?',{
    layers: "1MAI",
    format: "image/jpeg",
    transparent: false
}),
MT1 = L.tileLayer.wms('http://localhost:8080/geoserver/mapasETSA/wms?',{
    layers: "1MT",
    format: "image/jpeg",
    transparent: false
}),
KATP250 = L.tileLayer.wms('http://localhost:8080/geoserver/mapasETSA/wms?',{
    layers: "250KATP",
    format: "image/jpeg",
    transparent: false
}),
KT250 = L.tileLayer.wms('http://localhost:8080/geoserver/mapasETSA/wms?',{
    layers: "250KT",
    format: "image/jpeg",
    transparent: false
}),
MT2 = L.tileLayer.wms('http://localhost:8080/geoserver/mapasETSA/wms?',{
    layers: "2MT",
    format: "image/jpeg",
    transparent: false
}),
KAF500 = L.tileLayer.wms('http://localhost:8080/geoserver/mapasETSA/wms?',{
    layers: "500KAF",
    format: "image/jpeg",
    transparent: false
}),
KT500 = L.tileLayer.wms('http://localhost:8080/geoserver/mapasETSA/wms?',{
    layers: "500KT",
    format: "image/jpeg",
    transparent: false
}),
KT50 = L.tileLayer.wms('http://localhost:8080/geoserver/mapasETSA/wms?',{
    layers: "50KT",
    format: "image/jpeg",
    transparent: false
}),
HP = L.tileLayer.wms('http://localhost:8080/geoserver/mapasETSA/wms?',{
    layers: "HP",
    format: "image/jpeg",
    transparent: false
}),
LP = L.tileLayer.wms('http://localhost:8080/geoserver/mapasETSA/wms?',{
    layers: "LP",
    format: "image/jpeg",
    transparent: false
}),
demMexico = L.tileLayer.wms('http://localhost:8080/geoserver/mapasETSA/wms?',{
    layers: "demMex120",
    format: "image/jpeg",
    transparent: false
}),
relieve = L.tileLayer.wms('http://localhost:8080/geoserver/mapasETSA/wms?',{
    layers: "relieve",
    format: "image/jpeg",
    transparent: false
}),
openstreetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
});