'use strict';
module.exports = (sequelize, DataTypes) => {
	const Post = sequelize.define(
		'Post',
		{
			text: DataTypes.TEXT,
			mediaTypeId: DataTypes.INTEGER,
			mediaUrl: DataTypes.STRING,
			userId: DataTypes.INTEGER,
			parentId: DataTypes.INTEGER,
			originId: DataTypes.INTEGER,
		},
		{}
	);
	Post.associate = function (models) {
		Post.belongsTo(models.MediaType, { foreignKey: 'mediaTypeId' });
		Post.belongsTo(models.User, { foreignKey: 'userId' });
		Post.belongsTo(models.Post, { foreignKey: 'parentId' });
    Post.belongsTo(models.Post, { foreignKey: 'originId' });
    Post.hasMany(models.Post, { foreignKey: 'parentId' });
    Post.hasMany(models.Post, { foreignKey: 'originId' })
	};
	return Post;
};
