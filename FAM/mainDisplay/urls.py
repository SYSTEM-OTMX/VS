from django.contrib import admin # Importacion de la interfaz de administracion de Django
from django.urls import path # Importacion de la libreria "path"
from visualizadorETSA import views # Importacion del archivo "views.py" de la aplicacion "viewer"

# Cnfiguracion de las direccion url a las cuales se podran acceder
urlpatterns = [
    path('admin/', admin.site.urls), # Acceso a la interfaz de adminstracion de Django
    path('', views.Home, name="Viewer"), # Acceso a la vista "Home" en la aplicacion "viewer"
    path('getCoor/', views.getCoor, name='getCoor'), # Acceso a la vista "getCoor" en la aplicacion "viewer"
    path('getIds/<str:id>', views.getIds, name='getIds') # Acceso a la vista "getIds" en la aplicacion "viewer"
    # Esta ultima ulr permite pasar un parametro para realizar consultas 
    # (Para más detalles vea el archivo "viewer -> views.py")
]
