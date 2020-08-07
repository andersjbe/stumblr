module.exports = {
	environment: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 8080,
	db: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST,
	},
	jwtConfig: {
		secret: process.env.JWT_SECRET,
		expiresIn: process.env.JWT_EXPIRES_IN,
	},
	awsConfig: {
		accessKey: 'AKIAJSZGR6PIUFCKTQ4Q',
		secret: '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',
		region: 'us-west-1',
	},
};
