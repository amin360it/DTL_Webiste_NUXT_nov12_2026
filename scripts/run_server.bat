@echo off
setlocal

rem Run the DTL static site on http://localhost/
rem Single Node process - no npm packages needed, no extra runtimes.
rem NOTE: the server runs in the FOREGROUND. Closing this window stops it.

cd /d "%~dp0.."

set "WWW_DIR=publish\www"
set "SERVER=scripts\static-server.mjs"

if not exist "%WWW_DIR%" goto :no_www
if not exist "%SERVER%" goto :no_server
where node >nul 2>&1
if errorlevel 1 goto :no_node

rem Open the default browser once the server is up
start "" /b cmd /c "timeout /t 2 >nul && start "" http://localhost/"

echo ========================================
echo  Starting DTL Website on http://localhost/
echo  Serving from: %CD%\%WWW_DIR%
echo ========================================
echo  Keep this window open.
echo  Closing this window WILL stop the server.
echo  Press Ctrl+C to stop.
echo.

node "%SERVER%"
if errorlevel 1 goto :server_err

echo.
echo Server stopped.
endlocal
exit /b 0

:no_www
echo ERROR: publish\www folder not found.
echo Run scripts\production_Build_with_deploy.bat first.
endlocal
exit /b 1

:no_server
echo ERROR: scripts\static-server.mjs is missing.
endlocal
exit /b 1

:no_node
echo ERROR: Node.js is not installed or not in PATH.
echo Install it from https://nodejs.org/
endlocal
exit /b 1

:server_err
echo.
echo ERROR: the server failed to start. See the message above.
endlocal
exit /b 1
