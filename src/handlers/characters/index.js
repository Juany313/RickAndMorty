const {
    createCharacterController, 
    findCharacterController,
    findCharacterByIDController} = require("../../controllers/characters/index")

const findCharactersBDDHandler  = async (req,res) => {
    try {
        const characters = await findCharacterController()
           res.status(200).json(characters)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
const findCharacterByIDHandler  = async (req,res) => {
    const {id} = req.params;
    
    try {
        const character = await findCharacterByIDController(id)
           res.status(200).json(character)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
const createCharactersHandler = async (req,res) => {
 const {name, gender, status, origin, species, episodes} = req.body;

 try {
        const newCharacter = await createCharacterController({name, gender, status, origin, species,episodes})
           res.status(200).json(newCharacter)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
module.exports = {
    findCharactersBDDHandler,
    createCharactersHandler,
    findCharacterByIDHandler
}

