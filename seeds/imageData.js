const { Image } = require("../models");
const imageData = [
  {
    id: 1,
    promptValue: "cat on top of a Christmas tree in space",
    user_name: "NardDogg",
    imageURL:
      "https://oaidalleapiprodscus.blob.core.windows.net/private/org-zKyXwjr1MEDPyh8kalffrAle/user-ik6KMED2MjsTmNTVL76jbcrj/img-Tl3NPkHx0U5PHg1mehhusxbJ.png?st=2023-01-04T01%3A10%3A22Z&se=2023-01-04T03%3A10%3A22Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-03T20%3A11%3A00Z&ske=2023-01-04T20%3A11%3A00Z&sks=b&skv=2021-08-06&sig=iif%2BI8pN9sRg1QI2ZF6V5wcsP49T0EqiRtFPvoho7ec%3D",

    date_created: "Dec 22, 2022",
    isPrivate: true,
  },
  {
    id: 2,
    promptValue: "Pokemon eating a baguette in Paris",
    user_name: "gitkcb",
    imageURL:
      "https://openailabsprodscus.blob.core.windows.net/private/user-4wNuoIqyHroVTHUkKwKH0uum/generations/generation-sIx3z6FTDGm0mlDf1CRmJ5mt/image.webp?st=2022-12-22T23%3A13%3A08Z&se=2022-12-23T01%3A11%3A08Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-22T22%3A05%3A47Z&ske=2022-12-29T22%3A05%3A47Z&sks=b&skv=2021-08-06&sig=yXENgdrxjULV%2BgjJVDPhd9PGym7/XqsXosUMSiFFOgQ%3D",

    date_created: "Dec 21, 2022",
    isPrivate: false,
  },
  {
    id: 3,
    promptValue: "Aussie shepherd flying a plane",
    user_name: "Lemmonade",
    imageURL:
      "https://openailabsprodscus.blob.core.windows.net/private/user-4wNuoIqyHroVTHUkKwKH0uum/generations/generation-bH6mDjlx3eGSEhMnZLcFd8mI/image.webp?st=2022-12-22T23%3A15%3A26Z&se=2022-12-23T01%3A13%3A26Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-22T23%3A33%3A41Z&ske=2022-12-29T23%3A33%3A41Z&sks=b&skv=2021-08-06&sig=/4GHknj8A5tQoQGmx2jRPJvk0UAr4IihZESpZtJ1oqE%3D",

    date_created: "Dec 20, 2022",
    isPrivate: false,
  },
  {
    id: 4,
    promptValue: "Blossoming Apricot",
    user_name: "LedyX",
    imageURL: "01-blossoming-apricot.jpg",

    date_created: "Dec 20, 2022",
    isPrivate: true,
  },
  {
    id: 5,
    promptValue:
      "a surrealist dream-like oil painting by Salvador Dalí of a cat playing checkers",
    user_name: "OpenAI",
    imageURL:
      "https://openailabsprodscus.blob.core.windows.net/private/user-4wNuoIqyHroVTHUkKwKH0uum/generations/generation-YvZCAk5l9v6TgbAUZuJIjgxf/image.webp?st=2022-12-22T23%3A16%3A37Z&se=2022-12-23T01%3A14%3A37Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-22T23%3A59%3A49Z&ske=2022-12-29T23%3A59%3A49Z&sks=b&skv=2021-08-06&sig=XyWpwh/QDNreJsSDuXnWdEDrhnsh6h%2BA44QHp3g4U90%3D",

    date_created: "Dec 20, 2022",
    isPrivate: false,
  },
];

const seedImage = () => Image.bulkCreate(imageData);
module.exports = seedImage;
