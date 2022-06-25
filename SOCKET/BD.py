### Librerias #####################
from pymongo import MongoClient 

#############################################################################
def insercionJSON(cadenaJSON):
    ### Declaracion de variables ###################
    # Declaracion del atributo cliente para la conexion 
    # al motor de base de datos MongoDB
    clienteBD = MongoClient('mongodb://localhost:27017')

    # Declaracion del atributo para la asignación de la base de datos
    # a utilizar
    miDBetsa = clienteBD.ETSA
    #miDBetsa = clienteBD["ETSA"]
    
    # Declaracion del atributo para la colección (tabla) a utilizar
    # miTabla = miDBetsa.viewer_place 
    miTablaPedat = miDBetsa.viewer_place
    #miTablaPedat = miDBetsa["viewer_tablaPedat"]
    
    miTablaPedat.insert_one(cadenaJSON)