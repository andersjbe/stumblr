'use strict';
module.exports = (sequelize, DataTypes) => {
  const MediaType = sequelize.define('MediaType', {
    type: DataTypes.STRING
  }, {timestamps: false});
  MediaType.associate = function(models) {
    MediaType.hasMany(models.Post, { foreignKey: 'mediaTypeId' })
  };
  return MediaType;
};