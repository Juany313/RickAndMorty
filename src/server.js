const express = require("express");

const server = express();

server.get("/characters", (req, res)=>{
    res.send("Información sobre todos los personajes")
})

module.exports = server;


//! 18 minutos