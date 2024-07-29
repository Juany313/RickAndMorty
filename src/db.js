const {Sequelize} = require("sequelize");
require("dotenv").config()


const { USER, PASSWORD, HOST, PORT, BDD} = process.env;

const database = new Sequelize(`postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`)



module.exports = database;