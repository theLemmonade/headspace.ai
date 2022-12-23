const User = require('./User');
const UserGallery = require('./UserGallery');
const Image = require('./Image');

User.hasOne(UserGallery, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',

});
UserGallery.belongsTo(User, {
    foreignKey: 'user_id',
});

UserGallery.hasMany(Image, {
    foreignKey: 'usergallery_id',
    onDelete: 'CASCADE'
});
Image.belongsTo(UserGallery, {
    foreignKey: 'usergallery_id'
});



module.exports = { User, UserGallery, Image };
