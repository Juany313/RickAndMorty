
const {Router} = require("express");
const{
    findCharactersBDDHandler,
    findCharactersApiHandler,
    findAllCharactersHandler, 
    findCharacterByIDHandler,
    createCharactersHandler
} = require("../handlers/characters/index")

const charactersRoutes = Router();


charactersRoutes.get("/BDD", findCharactersBDDHandler)
charactersRoutes.get("/Api", findCharactersApiHandler)
charactersRoutes.get("/", findAllCharactersHandler)
charactersRoutes.get("/:id", findCharacterByIDHandler)
charactersRoutes.post("/", createCharactersHandler)

module.exports = charactersRoutes;