const sequelize = require('../config/connection');
const seedImage= require('./imageData');
const seedUser = require('./userData');
const seedUserGallery = require('./userGalleryData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedImage();

  await seedUser();

  await seedUserGallery();

  process.exit(0);
};

seedAll();