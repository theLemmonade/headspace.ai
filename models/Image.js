const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");


class Image extends Model {}

Image.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		prompt: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_name: {
			type: DataTypes.STRING,
			allowNull: false,
			references: {
				model: "user",
				key: "user_name"
			}
		},
		imageURL: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		date_created: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
		isPrivate: {
			type: DataTypes.BOOLEAN,
    		allowNull: false,
    		defaultValue: true,
		},
		// gallery_id: {
		// 	type: DataTypes.INTEGER,
		// 	references: {
		// 		model: "usergallery",
		// 		key: "user_id",
		// 	},
		// },
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "image",
	}
);

module.exports = Image;
