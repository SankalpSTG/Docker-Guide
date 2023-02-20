const express = require('express')

const app = express()

app.get("/test", (req, res) => {
    res.json({
        message: "Test"
    })
}) 
app.get("/", (req, res) => {
    res.json({
        message: "Working fine"
    })
}) 

app.listen(4000, () => {
    console.log("I am on")
})


//docker build .
//docker build . -t <<NAME>>
//docker images
//docker image rm <<NAME>>
//docker stop <<NAME/ID>>
//docker kill <<NAME/ID>>
//docker rm <<NAME>>
//docker run -d --name express-container -p 4000:4000 node-express 
//docker run -v "<<FOLDER_PATH>>":"\usr\app" -v "\usr\app\node_modules" --name express-container -p 4000:4000 node-express
//docker run -v "C:\Users\STG\Documents\GitHub\docker-learn\myportfolio":"\usr\app" -v "\usr\app\node_modules" --name myportfoliofrontend-container -p 4000:4000 -it myportfoliofrontend