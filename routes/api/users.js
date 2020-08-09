const { User } = require('../../db/models');
const { authenticated, createToken } = require('../../utils/auth');

const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const router = express.Router();

const username = check('username')
	.not()
	.isEmpty()
	.withMessage('Please provide a username.');

const password = check('password')
	.not()
	.isEmpty()
	.withMessage('Please provide a password.');

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const users = await User.findAll();
		// console.log(users)

		const formatted = users.reduce((acc, user) => {

			user = user.dataValues
			// console.log(user)
			acc[user.id] = { id: user.id, username: user.username, }
			return acc;
		}, {})
		res.json(formatted);
	})
);

router.post(
	'/',
	username,
	password,
	asyncHandler(async (req, res) => {
		const errors = validationResult(req);
		if (errors.length) {
			return next({ status: 422, message: errors.array() });
		}

		const { username, password } = req.body;

		const salt = await bcrypt.genSalt();
		const hashedPassword = await bcrypt.hash(password, salt);

		const user = await User.build({ username, hashedPassword });

		const { jti, token } = createToken(user);
		user.tokenId = jti;
		await user.save();
		res.json({ token, user: {} }); 
	})
);

router.post(
	'/login',
	[username, password],
	asyncHandler(async (req, res, next) => {
		const errors = validationResult(req);
		if (errors.length) {
			return next({ status: 422, errors: errors.array() });
		}

		const { username, password } = req.body;
		const user = await User.findOne({ where: { username } });

		if (!user) return next({ status: 404, message: 'User not found.' });

		const success = await bcrypt.compare(password, user.hashedPassword);

		if (!success) {
			const err = new Error('Wrong password');
			err.status = 401;
			err.title = 'Login Failed';
			err.rorros = ['Invalid Credentials'];
			return next(err);
		}

		const { jti, token } = createToken(user);
		user.tokenId = jti;
		await user.save();
		res.json({ token, userId: user.id });
	})
);

router.post('/follow', asyncHandler((req, res) => {
	const { followerUd, followingId } = req.body
}))

module.exports = router;
