const userRoutes = require('./users');
const postRoutes = require('./posts');
const followRoutes = require('./follows');

const express = require('express');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/follows', followRoutes);

module.exports = router;
