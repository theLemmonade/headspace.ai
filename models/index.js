const User = require('./User');
const Gallery = require('./Gallery');

User.hasMany (Gallery, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Gallery.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Gallery };