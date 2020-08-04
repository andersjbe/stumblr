'use strict';
module.exports = (sequelize, DataTypes) => {
  const MediaType = sequelize.define('MediaType', {
    type: DataTypes.STRING
  }, {});
  MediaType.associate = function(models) {
    // associations can be defined here
  };
  return MediaType;
};