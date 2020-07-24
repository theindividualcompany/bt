## Default Output Directories:

For MacOS you should find the data at:

~/Libary/Application Support/bt

For Windows you should find the data at:

C:\Users\YOUR_USER\AppData\Roaming\bt

## How to build BT:

Install Nodejs

[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Install Yarn

[https://classic.yarnpkg.com/en/docs/install](https://classic.yarnpkg.com/en/docs/install)

clone the BT github repository

load up cmd or terminal

cd into the core and desktop directories and run "yarn" for both

cd into desktop and test run the app using "yarn start"

to build the executable use "yarn dist"

if you're on windows and build fails try:

yarn build && yarn electron-builder
