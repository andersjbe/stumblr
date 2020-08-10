'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
		return queryInterface.bulkInsert(
			'Users',
			[
				{
					username: 'demo',
					hashedPassword:
						'$2a$10$SfZsigKO98Rhdm32iUHec.gkV0gXESWMnhxV6UXCNYN34tQ9k530K',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: 'gameraboy',
					hashedPassword:
						'$2a$10$SfZsigKO98Rhdm32iUHec.gkV0gXESWMnhxV6UXCNYN34tQ9k530K',
					profilePicUrl:
						'https://64.media.tumblr.com/7edde068d990e9453fbae6f5a130c5f2/c946dac03d25ad7e-1a/s64x64u_c1/918b0bac93d28ae19f5108f0933e25d381edb88d.jpg',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: 'supersonicart',
					hashedPassword:
						'$2a$10$SfZsigKO98Rhdm32iUHec.gkV0gXESWMnhxV6UXCNYN34tQ9k530K',
					profilePicUrl:
						'https://64.media.tumblr.com/avatar_f40666ce1818_64.pnj',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: 'mysharona',
					hashedPassword:
						'$2a$10$SfZsigKO98Rhdm32iUHec.gkV0gXESWMnhxV6UXCNYN34tQ9k530K',
					profilePicUrl:
						'https://64.media.tumblr.com/avatar_34d80906bc46_64.pnj',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: 'the-memedaddy',
					hashedPassword:
						'$2a$10$SfZsigKO98Rhdm32iUHec.gkV0gXESWMnhxV6UXCNYN34tQ9k530K',
					profilePicUrl:
						'https://64.media.tumblr.com/avatar_024613d70459_64.pnj',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: 'amazinglybeautifulphotos',
					hashedPassword:
						'$2a$10$SfZsigKO98Rhdm32iUHec.gkV0gXESWMnhxV6UXCNYN34tQ9k530K',
					profilePicUrl: 'https://64.media.tumblr.com/1ee990c22918a080259c1c24687af561/d3a76cdbafe19e58-ad/s64x64u_c1/266ce532790bd5618b6e1fcec998c4cfc4d483d9.pnj',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
		return queryInterface.bulkDelete('Users', null, {});
	},
};
