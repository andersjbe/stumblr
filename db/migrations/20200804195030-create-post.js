'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Posts', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			text: {
				type: Sequelize.TEXT,
			},
			mediaTypeId: {
				allowNull: false,
				references: { model: 'MediaTypes' },
				type: Sequelize.INTEGER,
			},
			mediaUrl: {
				type: Sequelize.STRING,
			},
			userId: {
				allowNull: false,
				references: { model: 'Users' },
				type: Sequelize.INTEGER,
			},
			parentId: {
				references: { model: 'Posts' },
				type: Sequelize.INTEGER,
			},
			originId: {
				references: { model: 'Posts' },
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Posts');
	},
};
