// database config
const Sequelize = require("sequelize");
require("dotenv").config();

// api config
const {Configuration, OpenAIAPI} = require("openai");
const configuration = new Configuration({
    apiKey: process.env.apiKey
});

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
{
    host: "localhost",
    dialect: "mysql",
    port: 3306,
}
);

module.exports = sequelize;
