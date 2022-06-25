#### Librerias #################################################################
#----------------------------------------------------------------------

#### Gestion del PEDAT ###########################################
def JSONpedat(pedatBuffer):

    # Separación de cadena de datos
    stringPedat = pedatBuffer[0:46]
    stringMensaje = pedatBuffer[46:]

    # Clasificación de datos de cadena StringPedat en buffer
    imaRemitenteBf = stringPedat[0:3]
    imaReceptorBf = stringPedat[3:6]
    utcBf = stringPedat[6:18]
    utcBf = '20' + utcBf[0:2] + '-' + utcBf[2:4] + '-' + utcBf[4:6] + 'T' + utcBf[6:8] + ':' + utcBf[8:10] + ':' + utcBf[10:]
    latitudBf = stringPedat[18:26]
    latitudBf = latitudBf[:-5] + '.' + latitudBf[(len(latitudBf)-5):]
    longitudBf = stringPedat[26:35]
    longitudBf = longitudBf[:-5] + '.' + longitudBf[(len(longitudBf)-5):]
    altitudBf = stringPedat[35:40]
    velocidadBf = stringPedat[40:43]
    azimutBf = stringPedat[43:]

############## separar esto ###########################
    # Crea una cadena JSON con los datos
    # en buffer para su inserción a la base de datos
    JSONinsercionPedatBd = {
        "Ima_remitente": imaRemitenteBf,
        "Ima_receptor": imaReceptorBf,
        "UTC": utcBf,
        "Latitud": latitudBf,
        "Longitud": longitudBf,
        "Altitud": altitudBf,
        "Velocidad": velocidadBf,
        "Azimut": azimutBf,
    }

    return JSONinsercionPedatBd