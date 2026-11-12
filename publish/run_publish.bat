@echo off
setlocal EnableDelayedExpansion
cd /d "%~dp0"

set "NGINX_DIR=nginx-1.31.7"
set "WWW_DIR=www"

if not exist "%WWW_DIR%" goto :no_www
if not exist "%NGINX_DIR%\nginx.exe" goto :no_nginx

:: Unconditionally force-kill all nginx processes
taskkill /F /IM nginx.exe /T >NUL 2>&1
timeout /t 1 /nobreak >NUL

:find_port
set /a "PORT=(%RANDOM% %% 40000) + 10000"
netstat -ano | findstr ":%PORT% " >NUL
if "%ERRORLEVEL%"=="0" goto :find_port

if not exist "%NGINX_DIR%\logs" mkdir "%NGINX_DIR%\logs"
if not exist "%NGINX_DIR%\temp" mkdir "%NGINX_DIR%\temp"
if not exist "%NGINX_DIR%\conf" mkdir "%NGINX_DIR%\conf"

set "FULL_WWW=%CD%\%WWW_DIR%"
set "FULL_WWW=%FULL_WWW:\=/%"

(
    echo worker_processes 1;
    echo events { worker_connections 1024; }
    echo http {
    echo     types {
    echo         text/html html htm shtml;
    echo         text/css css;
    echo         application/javascript js;
    echo         application/json json;
    echo         image/gif gif;
    echo         image/jpeg jpeg jpg;
    echo         image/png png;
    echo         image/svg+xml svg svgz;
    echo         image/x-icon ico;
    echo         application/vnd.apple.mpegurl m3u8;
    echo         video/mp2t ts;
    echo         video/mp4 mp4;
    echo     }
    echo     default_type application/octet-stream;
    echo     sendfile on;
    echo     server {
    echo         listen %PORT%;
    echo         server_name localhost;
    echo         location / {
    echo             root "%FULL_WWW%";
    echo             index index.html index.htm;
    echo         }
    echo     }
    echo }
) > "%NGINX_DIR%\conf\custom_run.conf"

echo ========================================
echo Starting nginx on http://localhost:%PORT%/
echo Serving from: %CD%\%WWW_DIR%
echo Keep this window open.
echo Closing this window WILL stop nginx.
echo ========================================
echo.

start "" /b cmd /c "timeout /t 2 >nul && start "" http://localhost:%PORT%/"
"%NGINX_DIR%\nginx.exe" -p "%CD%\%NGINX_DIR%" -c "conf/custom_run.conf" -g "daemon off;"

if errorlevel 1 goto :nginx_err

echo.
echo nginx stopped.
endlocal
exit /b 0

:no_www
echo ERROR: \www folder not found.
pause
endlocal
exit /b 1

:no_nginx
echo ERROR: nginx.exe not found at %CD%\%NGINX_DIR%
pause
endlocal
exit /b 1

:nginx_err
echo.
echo ERROR: nginx failed to start. See the message above.
pause
endlocal
exit /b 1
