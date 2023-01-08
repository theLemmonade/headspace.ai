const sequelize = require('../config/connection')
const { User } = require("../models");
const userData = [
	{
		user_name: "NardDogg",
		id: 1,
		email:"test2@gmail",
		password: "pass1234"
	},
	{
		user_name: "gitkcb",
		id: 2,
		email: "test4@gmail.com",
		password: "pass12345"
	},
	{
		user_name: "Lemmonade",
		id: 3,
		email: "test1@gmail",
		password: "pass123465"
	},
	{
		user_name: "LedyX",
		id: 4,
		email: "test50@gmail.com",
		password: "pass12343434343"
	},
	{
		user_name: "OpenAI",
		id: 5,
		email: "test@gmail",
		password: "pass12343434"
	},
];
const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;
