//Permite establecer un icono personalizado
let customIcon = L.icon({
    iconUrl: "/static/icons/viewer/plane.png",
    iconSize: [35, 35],
    iconAnchor: null,
});

var buffIma = [], buffLat = [], buffLon = [];
var flag = true;
var flagunique=true;
var j=0;
var x=0;

//D- Generador de la traza de la aeronave.
function generadorTraza(ima, lat, lon, n) {
    
    z=0;
        if((ima)==buffIma[z]){
            if ((buffLat[z] != lat) || (buffLon[z] != lon)) {
                L.polyline([[buffLat[z],buffLon[z]],[lat,lon]], {
                    color: '#00ff00'
                }).addTo(mainMap);
            }
            buffLat[z]=lat;
            buffLon[z]=lon;
            z=n;
        }
        z++;
        if((ima)==buffIma[z]){
            if ((buffLat[z] != lat) || (buffLon[z] != lon)) {
                L.polyline([[buffLat[z],buffLon[z]],[lat,lon]], {
                    color: '#00ff00'
                }).addTo(mainMap);
            }
            buffLat[z]=lat;
            buffLon[z]=lon;
            z=n;
        }
        z++;
        if((ima)==buffIma[z]){
            if ((buffLat[z] != lat) || (buffLon[z] != lon)) {
                L.polyline([[buffLat[z],buffLon[z]],[lat,lon]], {
                    color: '#00ff00'
                }).addTo(mainMap);
            }
            buffLat[z]=lat;
            buffLon[z]=lon;
            z=n;
        }
        if((ima)==buffIma[z]){
            if ((buffLat[z] != lat) || (buffLon[z] != lon)) {
                L.polyline([[buffLat[z],buffLon[z]],[lat,lon]], {
                    color: '#00ff00'
                }).addTo(mainMap);
            }
            buffLat[z]=lat;
            buffLon[z]=lon;
            z=n;
        }
        z++;
        if((ima)==buffIma[z]){
            if ((buffLat[z] != lat) || (buffLon[z] != lon)) {
                L.polyline([[buffLat[z],buffLon[z]],[lat,lon]], {
                    color: '#00ff00'
                }).addTo(mainMap);
            }
            buffLat[z]=lat;
            buffLon[z]=lon;
            z=n;
        }
        z++;
        if((ima)==buffIma[z]){
            if ((buffLat[z] != lat) || (buffLon[z] != lon)) {
                L.polyline([[buffLat[z],buffLon[z]],[lat,lon]], {
                    color: '#00ff00'
                }).addTo(mainMap);
            }
            buffLat[z]=lat;
            buffLon[z]=lon;
            z=n;
        }        
    
}

//Valida los campos de texto si no estan vacios
function validaCampo() {
    if ($("#inputId").val() == "") {
        alert("El campo no puede estar vacio.");
        $("#inputId").focus();
        flag = false;
        return false;
    }
    else {
        flag = true;
    }
    return true;
}

//Función que elimina datos repetidos en un arreglo, filtra por un campo
function removeDuplicates(originalArray, prop) {
    let newArray = [];
    let lookupObject = {};
    for (let i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }
    for (i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
}

//Funcion que limpia la pantalla de los marcadores
function clearScreen() {
    var icons = document.getElementsByClassName("leaflet-pane");
    for (let l = 0; l < icons.length; l++) {
        $(".leaflet-marker-pane").html("");
    }
    var icons2 = document.getElementsByClassName("leaflet-pane");
    for (let m = 0; m < icons2.length; m++) {
        $(".leaflet-tooltip-pane").html("");
    }
    if(!flag){
        var linea = document.getElementsByClassName("leaflet-pane");
        for (let n = 0; n < linea.length; n++){
            $(".leaflet-overlay-pane").html("");
        }
    }
}

//Funcion que crea los marcadores en el mapa
function viewMarker(queryResponse) {
    let uniqueArray;
    let aeros = [];
    let markers = [];
    clearScreen();
    for (let key in queryResponse.coordenadas) {
        aeros.push(queryResponse.coordenadas[key]);
    }
    uniqueArray = removeDuplicates(aeros, "Ima_remitente");
    for (let i in uniqueArray) {
        let arrayAero = [uniqueArray[i].Ima_remitente, uniqueArray[i].Latitud, uniqueArray[i].Longitud, uniqueArray[i].Azimut];
        markers.push(arrayAero);
    }
    if(j<markers.length){
        if(flagunique){
            buffLat=[],
            buffLon=[],
            buffIma=[],
            flagunique=false;
        }
        if(buffLat.length!=0 && buffLon.length!=0){
            if ((buffLat[buffLat.length - 1] != markers[j][1]) && (buffLon[buffLon.length - 1] != markers[j][2])) {
                buffLat.push(markers[j][1]); 
                buffLon.push(markers[j][2]);
                buffIma.push(markers[j][0]);
            }
        }else{
            buffLat.push(markers[j][1]); 
            buffLon.push(markers[j][2]);
            buffIma.push(markers[j][0]);
        }
        j++;
    }else{
        for (let n = 0; n < markers.length; n++) {
            //var a=(parsefloat(markers[n][1])-parsefloat(buffLat[n]))/(parsefloat(markers[n][2])-parsefloat(buffLon[n]));
            var a=parseFloat(buffLat[n])
            var b=parseFloat(markers[n][1])
            var c=parseFloat(buffLon[n])
            var d=parseFloat(markers[n][2])
            var e=90
            
            if(c==d){
                e=x
            }else{
                e=(b-a)/(d-c);
                x=Math.atan(e);
            }
            console.log(a+" "+b+" "+c+" "+d)
            console.log(e+" "+x+" "+markers[n][0])
            L.marker([markers[n][1], markers[n][2]], {
                icon: customIcon,
                rotationAngle: e,
                rotationOrigin: "center center",
            })
                .bindPopup("<p>Aeronave: " + markers[n][0] + "</p><p>Latitud: " + markers[n][1] + "</p><p>Longitud: " + markers[n][2] + "</p><p>Azimut: " + markers[n][3])
                .bindTooltip(markers[n][0], { permanent: true, direction: 'right' }).addTo(mainMap);
            
                if(flag){
                    generadorTraza(markers[n][0],markers[n][1], markers[n][2],n);
                }
        };
    }
}

//Almacena las llamadas ajax
let interval, interval2;

//Funcion que muestra todas las aeronaves
function allAero() {
    interval2 = setInterval(function () {
        $.ajax({
            type: 'GET',
            url: "/getCoor/",
            dataType: 'json',
            success: function (response) {
                viewMarker(response);
            },
            error: function (response) {
                console.log('No se pueden obtener las coordenadas');
            }
        });
    }, 1000);
};


//Funcion que filtra una aeronave
function searchAero(id) {
    interval = setInterval(function () {
        $.ajax({
            type: 'GET',
            url: "/getIds/" + id,
            dataType: 'json',
            success: function (response) {
               viewMarker(response);
            },
            error: function (response) {
                console.log('No se pueden obtener las coordenadas, revise la BD');
            }
        });
    }, 1000);
};

//Funcion que esta en escucha de si un boton es pulsado
$(document).ready(function () {
    $("#buttonId").click(function () {
        if (validaCampo()) {
            clearInterval(interval);
            searchAero($("#inputId").val());
        }
    })
    $("#buttonClr").click(function () {
        $("#inputId").value = "";
        clearInterval(interval);
        flag = false;
        clearScreen();
        flag = true;
    })
});

//Variable que escucha al boton deslizante
let checkbox = document.getElementById('toggle-me');

//Evento que verifica si el boton esta activo o no
checkbox.addEventListener('change', function () {
    if (this.checked) {
        //flag = false;
        allAero();
    }
    else {
        clearInterval(interval2);
        clearScreen();
    }
});








// //Funcion que crea los marcadores en el mapa
// function viewMarker(queryResponse) {
//     let uniqueArray;
//     let aeros = [];
//     let markers = [];
//     clearScreen();
//     for (let key in queryResponse.coordenadas) {
//         aeros.push(queryResponse.coordenadas[key]);
//     }
//     uniqueArray = removeDuplicates(aeros, "Ima_remitente");
//     for (let i in uniqueArray) {
//         let arrayAero = [uniqueArray[i].Ima_remitente, uniqueArray[i].Latitud, uniqueArray[i].Longitud, uniqueArray[i].Azimut];
//         markers.push(arrayAero);
//     }
//     for (let n = 0; n < markers.length; n++) {
//         L.marker([markers[n][1], markers[n][2]], {
//             icon: customIcon,
//             rotationAngle: markers[n][3],
//             rotationOrigin: "center center",
//         })
//             .bindPopup("<p>Aeronave: " + markers[n][0] + "</p><p>Latitud: " + markers[n][1] + "</p><p>Longitud: " + markers[n][2] + "</p><p>Azimut: " + markers[n][3])
//             .bindTooltip(markers[n][0], { permanent: true, direction: 'right' }).addTo(mainMap);
//     };
// }