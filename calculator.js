//jshint esversion:6

const express = require('express');
const app = express();

app.get("/", function(req, rep){
    rep.send("Hello World!");
});

app.listen(3000, function(){
    console.log("App listening to server 3000");
});


