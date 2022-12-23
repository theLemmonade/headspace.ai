const { Image } = require("../models");

const imageData = [
	{
		title: "Blossoming Apricot",
		artist: "LedyX",
		filename: "01-blossoming-apricot.jpg",
		gallery_id: 1,
		date_created: "Dec 20, 2022",
		isPrivate: false,
	},
	{
		title: "Blossoming Apricot",
		artist: "LedyX",
		filename: "01-blossoming-apricot.jpg",
		gallery_id: 2,
		date_created: "Dec 20, 2022",
		isPrivate: false,
	},
	{
		title: "Blossoming Apricot",
		artist: "LedyX",
		filename: "01-blossoming-apricot.jpg",
		gallery_id: 3,
		date_created: "Dec 20, 2022",
		isPrivate: false,
	},
	{
		title: "Blossoming Apricot",
		artist: "LedyX",
		filename: "01-blossoming-apricot.jpg",
		gallery_id: 4,
		date_created: "Dec 20, 2022",
		isPrivate: false,
	},
	{
		title: "Blossoming Apricot",
		artist: "LedyX",
		filename: "01-blossoming-apricot.jpg",
		gallery_id: 5,
		date_created: "Dec 20, 2022",
		isPrivate: false,
	},
];

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
