'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('users_to_group', { 
        id: Sequelize.INTEGER,
        userId:{
          field: 'user_id',
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model: 'users',
            key:'id'
          },
          onDelete:'cascade',
          onUpdate:'cascade'  
        },
        groupId:{
          field:'group_id',
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:'groups',
            key:'id'
          },
          onDelete:'cascade',
          onUpdate:'restrict' 
        },
        createdAt: {
          field: 'created_at',
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          field: 'updated_at',
          allowNull: false,
          type: Sequelize.DATE
        } 
      });
     
  },

  down: async (queryInterface, Sequelize) => {
      
    await queryInterface.dropTable('users_to_group');
     
  }
};
