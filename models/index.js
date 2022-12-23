const User = require('./User');
const UserGallery = require('./UserGallery');
const Image = require('./Image');


User.hasMany(Image, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Image.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasOne(UserGallery, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',

});
UserGallery.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, UserGallery, Image };
