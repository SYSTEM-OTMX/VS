from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.http.response import JsonResponse
from .models import pedatdeldia as peticionDB
import socket

def Home(request):
    return render(request, 'viewer/index.html', {})

def getCoor(request):
    coor = peticionDB.objects.all()
    data = coor.values("Ima_remitente", "Latitud", "Longitud", "Azimut")
    return JsonResponse({"coordenadas":list(data)})

def getIds(request, id):
    ids = peticionDB.objects.filter(Ima_remitente=str(id))
    return JsonResponse({"coordenadas":list(ids.values())})

def getIPHost(request):
	ipHostLocal = socket.gethostbyname(socket.gethostname())
	return JsonResponse({"ipHost":ipHostLocal})
