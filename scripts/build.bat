@echo off
rem Static build - nuxt generate -> dist\ (SSG for static hosting)
cd /d "%~dp0.."

if not exist "node_modules\nuxt" (
  echo node_modules missing - running npm install...
  call npm install
  if errorlevel 1 exit /b 1
)

if exist "dist" rmdir /s /q "dist"

call npm run generate
if errorlevel 1 (
  echo.
  echo BUILD FAILED
  exit /b 1
)

echo.
echo Build OK - dist\ generated.
