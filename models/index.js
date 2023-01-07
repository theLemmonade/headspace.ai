const User = require('./User');
// const UserGallery = require('./UserGallery');
const Image = require('./Image');

// User.hasOne(UserGallery, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

User.hasMany(Image, {
    foreignKey: "user_name",
    onDelete: "CASCADE"
})


Image.belongsTo(User, {
    foreignKey: 'user_name',
});

// UserGallery.hasMany(Image, {
//     foreignKey: 'gallery_id',
//     onDelete: 'CASCADE'
// });
// Image.belongsTo(UserGallery, {
//     foreignKey: 'gallery_id'
// });



module.exports = { User, Image };
