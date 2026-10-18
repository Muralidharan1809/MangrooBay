@echo off
cd /d "%~dp0"
echo ========================================================
echo   Starting Mangrove Bay - Pondicherry Marina Boathouse
echo ========================================================
echo.
echo Opening browser at http://localhost:3000/ ...
start http://localhost:3000/
echo Starting preview server...
npm run preview -- --host 0.0.0.0 --port 3000
pause
