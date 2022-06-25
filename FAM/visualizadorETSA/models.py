from django.db import models

# Create your models here.
class pedatdeldia(models.Model):
    Ima_remitente = models.TextField()
    Ima_receptor = models.TextField()
    UTC = models.DateTimeField()
    Latitud = models.TextField()
    Longitud = models.TextField()
    Altitud = models.IntegerField()
    Velocidad = models.TextField()
    Azimut = models.IntegerField()
    Num_mensaje = models.TextField()
    TipoMensaje = models.TextField()
    Mensaje = models.TextField()