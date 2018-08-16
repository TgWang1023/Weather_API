const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
app.use(express.static(__dirname + '/public/dist/public'))
app.use(bodyParser.json());

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function(){
    console.log('listening in localhost on port 8000!');
})