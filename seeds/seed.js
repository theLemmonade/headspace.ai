const sequelize = require('../config/connection');
const seedImage= require('./imageData');
const seedUser = require('./userData');
const { User, Image } = require('../models')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedImage();

  await seedUser();


  process.exit(0);
};

seedAll();