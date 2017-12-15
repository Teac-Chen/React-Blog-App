@echo off
start cmd /k mongod.exe --dbpath=%cd%\data\db --logpath=%cd%\data\logs\mongod.log
start cmd /k npm run webpack:admin
start cmd /k npm run webpack:front
start cmd /k npm run dev