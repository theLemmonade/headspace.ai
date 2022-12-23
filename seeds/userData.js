const { User } = require("../models");
const userData = [
	{
		name: "NardDogg",
		id: "0",
	},
	{
		name: "gitkcb",
		id: "1",
	},
	{
		name: "Lemmonade",
		id: "2",
	},
	{
		name: "LedyX",
		id: "3",
	},
	{
		name: "OpenAI",
		id: "4",
	},
];
const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;
