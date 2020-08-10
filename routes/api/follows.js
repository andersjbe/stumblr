const { Follow } = require('../../db/models');

const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const follows = await Follow.findAll();
		const loadedFollows = follows.reduce((acc, follow) => {
			acc[follow.id] = { ...follow };
			return acc;
		}, {});
		res.json(loadedFollows);
	})
);

router.post('/'),
	asyncHandler(async (req, res) => {
		const { followedId, followingId } = req.body;
		await Follow.create({ followedId, followingId });
		res.status(200);
	});

module.exports = router;
