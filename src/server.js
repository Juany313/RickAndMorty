const express = require("express");
const cors = require("cors");
const morgan = require("morgan");


//Routes
const mainRoutes = require("./routes/mainRoutes")

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json())

server.use((req,res,next)=>{
    console.log("Hola, estoy pasando por el midleware");
    next();
})

server.use(mainRoutes);

module.exports = server;

