@echo off
setlocal

cd /d "%~dp0.."

echo ================================================================================
echo  DTL Website - Production Build ^& Deploy
echo ================================================================================
echo.

rem --- Step 0: Verify Node.js exists ---
where node >nul 2>&1
if errorlevel 1 goto :no_node
echo [OK] Node.js found
echo.

rem --- Step 1: Install dependencies if missing ---
if exist "node_modules\nuxt" goto :deps_done
echo [1/3] Installing npm dependencies - node_modules missing...
call npm install
if errorlevel 1 goto :install_fail
echo [OK] Dependencies installed.
:deps_done
echo [1/3] Dependencies ready.
echo.

rem --- Step 2: Build static site - nuxt generate to dist\ ---
echo [2/3] Building production static site - npm run generate...
echo        This may take a minute...
call npm run generate
if errorlevel 1 goto :build_fail
echo [OK] Static build complete - dist\
echo.

rem --- Step 3: Deploy dist\ to publish\www\ ---
echo [3/3] Deploying dist\ to publish\www\
if not exist "publish\www" mkdir "publish\www"
robocopy "dist" "publish\www" /e /mir /ndl /njh /njs /nfl
if errorlevel 8 goto :deploy_fail
echo [OK] Deployed to publish\www\
echo.

echo ================================================================================
echo  BUILD ^& DEPLOY COMPLETE
echo ================================================================================
echo  Source : %CD%\dist\
echo  Target : %CD%\publish\www\
echo.
echo  Next step : scripts\run_server.bat
echo               starts the server in foreground and opens the browser
echo               close that window to stop the server
echo ================================================================================
endlocal
exit /b 0

:install_fail
echo.
echo ERROR: npm install failed.
endlocal
exit /b 1

:no_node
echo ERROR: Node.js is not installed or not in PATH.
echo Please install Node.js from https://nodejs.org/
endlocal
exit /b 1

:build_fail
echo.
echo ERROR: Nuxt generate failed. See errors above.
endlocal
exit /b 1

:deploy_fail
echo.
echo ERROR: Robocopy deploy failed.
endlocal
exit /b 1
