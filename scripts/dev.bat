@echo off
rem Dev server - Nuxt dev with auto-install if node_modules is missing
cd /d "%~dp0.."

if not exist "node_modules\nuxt" (
  echo node_modules missing - running npm install...
  call npm install
  if errorlevel 1 exit /b 1
)

call npm run dev
