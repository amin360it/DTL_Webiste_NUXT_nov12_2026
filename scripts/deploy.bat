@echo off
rem Deploy - production build (dist\) copied to nginx hosting root.
rem
rem Usage:
rem   deploy.bat                          (deploys to publish\www\ by default)
rem   deploy.bat "path\to\hosting"     (explicit target)
cd /d "%~dp0.."

set "DEST=%~1"
if "%DEST%"=="" set "DEST=%DTL_DEPLOY_TARGET%"
if "%DEST%"=="" set "DEST=publish/www"

rem Normalize trailing backslash
if "%DEST:~-1%"=="\" set "DEST=%DEST:~0,-1%"

if not exist "%DEST%" mkdir "%DEST%"

if "%DEST%"=="" (
  echo Usage: deploy.bat "path\to\hosting"
  echo or set it permanently: setx DTL_DEPLOY_TARGET "path\to\hosting"
  exit /b 1
)

rem 1. Build fresh production static site (nuxt generate -> dist\)
call "%~dp0build.bat"
if errorlevel 1 exit /b 1

rem 2. Mirror dist\ contents into destination (publish\www\ by default)
robocopy "dist" "%DEST%" /e /mir /ndl /njh /njs
if errorlevel 8 (
  echo Robocopy failed.
  exit /b 1
)

echo.
echo Deployed production dist -> %DEST%
echo Run: scripts\run_server.bat  (to start nginx on port 80)
