//controllers
const {
    findAllEpisodesController,
    createEpisodeController} = require("../../controllers/episodes/index")



const findAllEpisodesHandler = async (req, res)=>{

    try {
        const episodes = await findAllEpisodesController();
    
        res.status(200).json(episodes)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const postEpisodesHandler = async (req, res)=>{
    const {name} = req.body;
    try {
        const episode = await createEpisodeController(name);
    
        res.status(200).json(episode)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }

}

module.exports = {
    findAllEpisodesHandler,
    postEpisodesHandler
}
