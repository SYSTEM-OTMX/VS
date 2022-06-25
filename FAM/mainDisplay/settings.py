from pathlib import Path
import os, socket as ipHost

# Variable para hacer uso del PATH o ruta del sistema
BASE_DIR = Path(__file__).resolve().parent.parent

# Clave de seguridad, es unica en cada proyecto
SECRET_KEY = 'django-insecure-ahy=-(+_vp+sd4pdm18m(uyi&cj6f4x+%!&n2i&-+7ih+&pr65'

# Habilita o deshabilita el modo depuración
DEBUG = True

# Direccion donde se inicia el servicio, pueden ser más de una dirección.
# Por defecto, toma la que tenga asignada la maquina al momento de levantar el adaptador de red.
ALLOWED_HOSTS = [ipHost.gethostbyname(ipHost.gethostname()), '192.168.136.9']

# Deficion de las aplicaciones instanciadas al proyecto
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'visualizadorETSA',
]

# Aplicaciones y servicios propios de Django
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

# Direcctorio principal del proyecto
ROOT_URLCONF = 'mainDisplay.urls'

# Declaracion de las plantillas a usa en el proyecto. Aqui se configura la ruta de donde Django tomara las plantillas
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# Declaracion de la especificacion para la interfaz de comunicacion Web
WSGI_APPLICATION = 'mainDisplay.wsgi.application'

# Declaracion de las bases de datos a implementar
DATABASES = {
    'default':{
        'ENGINE': 'djongo',
        'NAME': 'ETSA',
    }
}

# Librerias para validacion de contraseñas
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Ajustes de region e idioma
LANGUAGE_CODE = 'es-mx'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Archivos estaticos, rutas de donde se encuentran los archivos a utilizar
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = '/static/'
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)

# Tipo de campo de clave principal predeterminado
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
