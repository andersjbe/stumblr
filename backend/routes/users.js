const { User } = require('../db/models');

const express = require('express');
const { route } = require('../app');

const router = express.Router();

router.get('/', async (req, res) => {
	const users = await User.findAll();
	res.json(users);
});

module.exports = router;
