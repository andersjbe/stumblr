const {
	jwtConfig: { secret, expiresIn },
} = require('../config');
const { User } = require('../db/models');

const bearerToken = require('express-bearer-token');
const jwt = require('jsonwebtoken');
const uuid = require('uuid').v4;

const createToken = user => {
	const data = {
		username: user.username,
	};
	const jwtid = uuid();

	return {
		jti: jwtid,
		token: jwt.sign({ data }, secret, {
			expiresIn: Number.parseInt(expiresIn),
			jwtid,
		}),
	};
};

const findToken = (req, res, next) => {
	const { token } = req;

	if (!token) return next({ status: 401, message: 'no token' });

	return jwt.verify(token, secret, null, async (err, payload) => {
		if (err) {
			err.status = 403;
			return next(err);
		}

		const tokenId = payload.jti;

		try {
			req.user = await User.findOne({
				where: {
					tokenId,
				},
			});
		} catch (e) {
			return next(e);
		}

		if (!req.user) {
			return next({ status: 404, message: 'session not found' });
		}

		next();
	});
};

const authenticated = [bearerToken(), findToken];

module.exports = { createToken, authenticated };
