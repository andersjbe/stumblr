const { Post, User, MediaType } = require('../../db/models');
const { awsConfig } = require('../../config');

const express = require('express');
const asyncHandler = require('express-async-handler');
const cors = require('cors');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

AWS.config = new AWS.Config();
AWS.config.accessKeyId = awsConfig.accessKey;
AWS.config.secretAccessKey = awsConfig.secret;
AWS.config.region = awsConfig.region;
const s3 = new AWS.S3();

const upload = multer({
	storage: multerS3({
		s3,
		bucket: 'stumblr',
		key: function (req, file, cb) {
			cb(null, `${new Date()}${file.filename}`);
		},
	}),
});

const router = express.Router();

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const posts = await Post.findAll({
			include: [{ model: User }, { model: MediaType }],
		});

		const newPosts = posts.reduce((acc, postData) => {
			let post = postData.dataValues;
			let {
				id,
				text,
				mediaTypeId,
				mediaUrl,
				userId,
				parentId,
				originId,
				updatedAt,
			} = post;
			acc[id] = {
				id,
				text,
				mediaTypeId,
				mediaUrl,
				userId,
				parentId,
				originId,
				updatedAt,
			};
			return acc;
		}, {});

		res.json(newPosts);
	})
);

router.options('/', cors({ origin: true }));
router.post(
	'/',
	upload.single('file'),
	asyncHandler(async (req, res, next) => {
		const { text, mediaTypeId, userId, parentId, originId } = req.body;
		let mediaUrl = null;

		const mediaType = await MediaType.findByPk(mediaTypeId);

		// console.log(mediaType)
		if (
			mediaType.type === 'image' ||
			mediaType.type === 'video' ||
			mediaType.type === 'audio'
		) {
			console.log(req)
			mediaUrl = req.file.location;
		}


		const post = await Post.create({
			text,
			mediaTypeId,
			mediaUrl,
			userId,
			parentId,
			originId,
		});

		res.json(post);
	})
);

module.exports = router;
