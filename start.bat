@echo off
start cmd /k gulp
start cmd /k npm run webpack:admin
start cmd /k npm run webpack:front
start cmd /k npm run dev