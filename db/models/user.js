'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			username: DataTypes.STRING,
			hashedPassword: DataTypes.STRING,
			tokenId: DataTypes.STRING,
		},
		{}
	);
	User.associate = function (models) {
		User.hasMany(models.Post, { foreignKey: 'userId' });
	};
	return User;
};
