'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    text: DataTypes.TEXT,
    mediaTypeId: DataTypes.INTEGER,
    mediaUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    parentId: DataTypes.INTEGER,
    originId: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};