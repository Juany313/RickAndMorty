
const {Router} = require("express");
const{findAllCharactersHandler}= require("../handlers/characters/index")

const charactersRoutes = Router();


charactersRoutes.get("/", findAllCharactersHandler)

module.exports = charactersRoutes;