require("dotenv").config()

const {Sequelize, DataTypes} = require("sequelize");
const { USER, PASSWORD, HOST, PORT, BDD} = process.env;
const CharacterFunction = require("./models/Characters")
const EpisodeFunction = require("./models/Episodes")


const database = new Sequelize(`postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
    {logging: false}
)

CharacterFunction(database,DataTypes)
EpisodeFunction(database,DataTypes)

const {Character, Episode} = database.models;

Character.belongsToMany(Episode, {through: "CharacterEpisode"});
Episode.belongsToMany(Character, {through: "CharacterEpisode"});


module.exports = {
    database,
    ...database.models
};