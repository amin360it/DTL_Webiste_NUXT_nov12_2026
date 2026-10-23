@echo off
setlocal

rem Alternative server: nginx (2 processes - master + worker).
rem Use this only if you prefer nginx over the single-process Node server.
rem NOTE: nginx runs in the FOREGROUND. Closing this window stops nginx.

cd /d "%~dp0.."

set "NGINX_DIR=publish\nginx-1.31.7"
set "WWW_DIR=publish\www"

if not exist "%WWW_DIR%" goto :no_www
if not exist "%NGINX_DIR%\nginx.exe" goto :no_nginx

tasklist /FI "IMAGENAME eq nginx.exe" 2>NUL | find /I "nginx.exe" >NUL
if "%ERRORLEVEL%"=="0" goto :already

echo ========================================
echo  Starting nginx on http://localhost/
echo  Serving from: %CD%\%WWW_DIR%
echo  Keep this window open.
echo  Closing this window WILL stop nginx.
echo ========================================
echo.

start "" /b cmd /c "timeout /t 2 >nul && start "" http://localhost/"

"%NGINX_DIR%\nginx.exe" -p "%CD%\%NGINX_DIR%"
if errorlevel 1 goto :nginx_err

echo.
echo nginx stopped.
endlocal
exit /b 0

:no_www
echo ERROR: publish\www folder not found.
echo Run scripts\production_Build_with_deploy.bat first.
endlocal
exit /b 1

:no_nginx
echo ERROR: nginx.exe not found at %CD%\%NGINX_DIR%
endlocal
exit /b 1

:already
echo ========================================
echo  nginx is ALREADY running on http://localhost/
echo  Serving from: %CD%\%WWW_DIR%
echo ========================================
echo.
echo  To STOP nginx: close the window that started it,
echo  or end task nginx.exe in Task Manager.
endlocal
exit /b 0

:nginx_err
echo.
echo ERROR: nginx failed to start. See the message above.
endlocal
exit /b 1
