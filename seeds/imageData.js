const { Image } = require("../models");
const imageData = [
	{
		title: "cat on top of a Christmas tree in space",
		artist: "NardDogg",
		filename:
			"https://openailabsprodscus.blob.core.windows.net/private/user-4wNuoIqyHroVTHUkKwKH0uum/generations/generation-GR3Frrp9MCrwBZ7f7FbC2sDu/image.webp?st=2022-12-22T22%3A55%3A00Z&se=2022-12-23T00%3A53%3A00Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-22T20%3A20%3A59Z&ske=2022-12-29T20%3A20%3A59Z&sks=b&skv=2021-08-06&sig=vvO55lBaZecK9JG19hzJ5NstvCdqUh5XYUJMa69tlZk%3D",
		gallery_id: 1,
		date_created: "Dec 22, 2022",
		isPrivate: false,
	},
	{
		title: "Pokemon eating a baguette in Paris",
		artist: "gitkcb",
		filename:
			"https://openailabsprodscus.blob.core.windows.net/private/user-4wNuoIqyHroVTHUkKwKH0uum/generations/generation-sIx3z6FTDGm0mlDf1CRmJ5mt/image.webp?st=2022-12-22T23%3A13%3A08Z&se=2022-12-23T01%3A11%3A08Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-22T22%3A05%3A47Z&ske=2022-12-29T22%3A05%3A47Z&sks=b&skv=2021-08-06&sig=yXENgdrxjULV%2BgjJVDPhd9PGym7/XqsXosUMSiFFOgQ%3D",
		gallery_id: 2,
		date_created: "Dec 21, 2022",
		isPrivate: false,
	},
	{
		title: "Aussie shepherd flying a plane",
		artist: "Lemmonade",
		filename:
			"https://openailabsprodscus.blob.core.windows.net/private/user-4wNuoIqyHroVTHUkKwKH0uum/generations/generation-bH6mDjlx3eGSEhMnZLcFd8mI/image.webp?st=2022-12-22T23%3A15%3A26Z&se=2022-12-23T01%3A13%3A26Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-22T23%3A33%3A41Z&ske=2022-12-29T23%3A33%3A41Z&sks=b&skv=2021-08-06&sig=/4GHknj8A5tQoQGmx2jRPJvk0UAr4IihZESpZtJ1oqE%3D",
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
		title:
			"a surrealist dream-like oil painting by Salvador Dalí of a cat playing checkers",
		artist: "OpenAI",
		filename:
			"https://openailabsprodscus.blob.core.windows.net/private/user-4wNuoIqyHroVTHUkKwKH0uum/generations/generation-YvZCAk5l9v6TgbAUZuJIjgxf/image.webp?st=2022-12-22T23%3A16%3A37Z&se=2022-12-23T01%3A14%3A37Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-22T23%3A59%3A49Z&ske=2022-12-29T23%3A59%3A49Z&sks=b&skv=2021-08-06&sig=XyWpwh/QDNreJsSDuXnWdEDrhnsh6h%2BA44QHp3g4U90%3D",
		gallery_id: 5,
		date_created: "Dec 20, 2022",
		isPrivate: false,
	},
];

const seedImage = () => Image.bulkCreate(imageData);
module.exports = seedImage;
