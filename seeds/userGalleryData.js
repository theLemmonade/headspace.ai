const {  UserGallery } = require("../models");
const userGalleryData = [
  {
    id: 1,
    name: "MAgENTA",
    date_created: 12 / 12 / 12,
    user_id: 1,
    
  },
  {
    id: 2,
    name: "purple",
    date_created: 12 / 12 / 12,
    user_id: 2,

   
  },
  {
    id: 3,
    name: "pink",
    date_created: 12 / 12 / 12,
    user_id: 3,
   
  },
  {
    id: 4,
    name: "yellow",
    date_created: 12 / 12 / 12,
    user_id: 4,
    
  },
  {
    id: 5,
    name: "green",
    date_created: 12 / 12 / 12,
    user_id: 5,
    
  },
];

const seedUserGallery = () => UserGallery.bulkCreate(userGalleryData);
module.exports = seedUserGallery;
