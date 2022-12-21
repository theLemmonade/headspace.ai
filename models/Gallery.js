// const { Model, DataTypes} = require('sequelize');
// const sequelize = require("../config/connection");
// class Gallery extends Model {}

// Gallery.init(
//     {
//         id: {
//             type: DataType.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         description: {
//             type:DataType.STRING,
//         },
//         date_created: {
//             type: DataType.DATE,
//             allowNull: false,
//             defaultValue: DataType.NOW,
//         },
//         user_id: {
//             type: DataTypes.INTEGER, 
//             references: {
//                 model: 'user',
//                 key: 'id',
//             },
//         },


//     },
//     {
//         sequelize,
//         timestamps:false,
//         freezeTableName: true,
//         modelName: 'gallery',
//     }
// );
// module.exports = Gallery;