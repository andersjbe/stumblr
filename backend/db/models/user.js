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
		// associations can be defined here
	};
	return User;
};
