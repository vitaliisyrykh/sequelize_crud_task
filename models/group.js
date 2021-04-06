'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate (models) {
      Group.belongsToMany(models.User,{
        through:'users_to_group',
        foreignKey:'groupId'
      })
    }
  }
  Group.init(
    {
      name:{ 
        allowNull:false,
        type:DataTypes.STRING
      },
      groupImage:{
        type: DataTypes.STRING,  
      }
    },
    {
      sequelize,
      modelName: 'Group',
      tableName:'groups',
      underscored: true,
    }
  );
  return Group;
};
