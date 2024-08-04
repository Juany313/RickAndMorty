const {Character, Episode} = require("../../db");
const {infoCleaner} = require("../../utils/index");

const axios = require("axios");


const findCharacterBDDController = async ()=>{
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

const findCharacterApiController = async ()=>{

    
const totalPages = 2; 

let pageUrls = [];

for (let i = 1; i <= totalPages; i++) {
    pageUrls.push(`https://rickandmortyapi.com/api/character?page=${i}`);
}
   
   const pagePromises = pageUrls.map(url => axios.get(url));

   // Esperar a que todas las promesas se resuelvan
   const responses = await Promise.all(pagePromises);

  
   const allCharacters = responses.flatMap(response => response.data.results);

  
   const charactersCleaner = await infoCleaner(allCharacters);

   return charactersCleaner;
}

const findAllCharacterController = async ()=>{
    return "todossss los charactersssss";
}


const findCharacterByIDController = async (id)=>{
    
    const character = await Character.findByPk(id);
    if (!character) {
        throw new Error("No existen personajes con ese Id");
    }
    return character;
    
}

const createCharacterController = async ({name, gender, status, origin, species,episodes})=>{
    const newCharacter = await Character.create({name, gender, status, origin, species});

    newCharacter.addEpisodes(episodes);
    return newCharacter;
}

module.exports = {
    
    findCharacterBDDController,
    findCharacterApiController,
    findAllCharacterController,
    findCharacterByIDController,
    createCharacterController
}