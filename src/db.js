require("dotenv").config()

const {Sequelize, DataTypes} = require("sequelize");
const { USER, PASSWORD, HOST, PORT, BDD, DATA_BASE_URL} = process.env;
const CharacterFunction = require("./models/Characters")
const EpisodeFunction = require("./models/Episodes")


const database = new Sequelize(DATA_BASE_URL,
    {logging: false}
)
/* const database = new Sequelize(`postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
    {logging: false}
) */
   
CharacterFunction(database,DataTypes)
EpisodeFunction(database,DataTypes)

const {Character, Episode} = database.models;

Character.belongsToMany(Episode, {through: "CharacterEpisode"});
Episode.belongsToMany(Character, {through: "CharacterEpisode"});


module.exports = {
    database,
    ...database.models
};