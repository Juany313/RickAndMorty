const {Character, Episode} = require("../../db");


const createCharacterController = async ({name, gender, status, origin, species,episodes})=>{
    const newCharacter = await Character.create({name, gender, status, origin, species});

    newCharacter.addEpisodes(episodes);
    return newCharacter;
}
const findCharacterController = async (character)=>{
    const characters = await Character.findAll({
        include: {
            model: Episode,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    });
    return characters;
}


const findCharacterByIDController = async (id)=>{
    
    const character = await Character.findByPk(id);
    if (!character) {
        throw new Error("No existen personajes con ese Id");
    }
    return character;
    
}


module.exports = {
    createCharacterController,
    findCharacterController,
    findCharacterByIDController
}