@echo off
:: Cambiar al directorio del proyecto
cd /d:/Trabajo/2025/WEB Nommada

:: Inicializar el repositorio de Git si no está inicializado
git init

:: Agregar todos los archivos al repositorio
git add .

:: Confirmar los cambios
git commit -m "Subiendo proyecto a GitHub"

:: Agregar el repositorio remoto
git remote add origin https://github.com/KevinPaul1995/webnommada.git

:: Empujar los cambios al repositorio remoto
git push -u origin master

:: Pausar para ver el resultado
pause
