const {Router} = require("express");
const charactersRoutes = require("./charactersRoutes");
const episodesRoutes = require("./episodesRoutes");

const mainRoutes = Router();


mainRoutes.use("/characters", charactersRoutes);


mainRoutes.use("/episodes", episodesRoutes);



module.exports = mainRoutes;