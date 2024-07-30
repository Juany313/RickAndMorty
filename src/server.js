const express = require("express");
const {Episode} = require("./db")

const server = express();

server.get("/characters", (req, res)=>{
    res.send("Información sobre todos los personajes")
})

module.exports = server;


