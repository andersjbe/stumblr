'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			username: DataTypes.STRING,
			hashedPassword: DataTypes.STRING,
			tokenId: DataTypes.STRING,
			profilePicUrl: DataTypes.STRING,
		},
		{}
	);
	User.associate = function (models) {
		User.hasMany(models.Post, { foreignKey: 'userId' });
		User.belongsToMany(User, {
			as: 'followed',
			through: models.Follow,
			foreignKey: 'followedId',
			otherKey: 'followingId',
		});
		User.belongsToMany(User, {
			as: 'follower',
			through: models.Follow,
			foreignKey: 'followingId',
			otherKey: 'followedId',
		});
	};
	return User;
};
