@echo off

start /b mongod & start /b /MIN python manage.py runserver 192.168.136.9:8000