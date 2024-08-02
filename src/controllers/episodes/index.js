const {Episode} = require("../../db");

const findAllEpisodesController = async ()=>{
    const episodes = await Episode.findAll();

    return episodes;
};

const createEpisodeController = async (name)=>{

    const newEpisode = await Episode.create({name})

    return newEpisode;
};

module.exports = {
    findAllEpisodesController,
    createEpisodeController
};

