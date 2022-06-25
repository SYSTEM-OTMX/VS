#### Librerias #################################################################

import socket  # Importación de libreria socket
from threading import * # Importacion de libreria par ahilos
import gestionPedat # Importa el archivo gestionPedat.py
import BD

##### Instancias (Activación de librerias) ######################################

# Indica el protocolo de comunicación y la dirección IP/puerto por la que
# servira (iniciaria) el socket servidor
socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
socket.bind(('192.168.136.9', 8010))

##### Gestion del PEDAT #####################################
# Creación del objeto que inicializa la conexión con el cliente
class client(Thread):
    # Método que inicia la escucha de los clientes
    # Abre conexión del socket
    def __init__(self, socket, address):
        Thread.__init__(self)
        self.sock = socket
        self.addr = address
        self.start()

    # Método que recibe los clientes
    # y trata los datos recibidos
    def run(self):
        while 1:
            # Asigna a la variable "pedatBuffer" los datos de self.sock
            # codificandolo en formato UTF-8
            try:
                pedatBuffer = self.sock.recv(1024).decode('utf-8')
                if pedatBuffer != "":
                    # Llama a la clase JSONpedat y le pasa lo que contenga pedatBuffer
                    print("Datos recibidos: " + pedatBuffer)
                    BD.insercionJSON(gestionPedat.JSONpedat(pedatBuffer))
                else:
                    print("No se han recibido datos")
            except:
                self.sock.close()

# Permite la escucha de hasta 5 clientes
socket.listen(6)
print('Servidor escuchando')

# Bucle que siempre se esta ejecutando y escuchando peticiones
while True:
    conexion, addr = socket.accept()  # Acepta la petición del cliente
    client(conexion, addr)  # Llama a la clase client
    conexion.close()  # Cierra conexión con el cliente