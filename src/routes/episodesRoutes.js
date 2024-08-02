const {Router} = require("express");
const{
    findAllEpisodesHandler,
    postEpisodesHandler}= require("../handlers/episodes/index")


const episodesRoutes = Router();

episodesRoutes.get("/", findAllEpisodesHandler)
episodesRoutes.post("/", postEpisodesHandler)

module.exports = episodesRoutes;