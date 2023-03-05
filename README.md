# Docker-Guide
This repository is to use docker to containerize and deploy application

You need to create a Dockerfile as it is in this repository. It should be exact same for a simple node js project. Depending on the tech stack the Dockerfile will change. 

If you observe, the fourth line is "RUN npm install" which is a npm command to install dependencies of the application. The last command is an array of keywords which basically is the command "npm run start". The "start" command is declared in package.json and hence it will start the node application.

For in-depth information, check out this crash course over youtube: https://www.youtube.com/watch?v=Tyy1BUEmhwg

## Commands
1. docker build . -t <<IMAGE_NAME>> | builds the image
2. docker run --name <<CONTAINER_NAME>> <<IMAGE_NAME>> | runs a container for the image
3. docker run -v <<ABSOLUTE_PATH_OF_PROJECT>>:/usr/app -v /usr/app/node_modules -it -d --name <<CONTAINER_NAME>> <<IMAGE_NAME>> | runs container using volumes
