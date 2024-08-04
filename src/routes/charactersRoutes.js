
const {Router} = require("express");
const{
    findCharactersBDDHandler, 
    createCharactersHandler,
    findCharacterByIDHandler}= require("../handlers/characters/index")

const charactersRoutes = Router();


charactersRoutes.get("/", findCharactersBDDHandler)
charactersRoutes.get("/:id", findCharacterByIDHandler)
charactersRoutes.post("/", createCharactersHandler)

module.exports = charactersRoutes;