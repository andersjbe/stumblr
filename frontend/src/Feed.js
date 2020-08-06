import { fetchPosts } from './store/posts';
import { fetchUsers } from './store/users';
import PostForm from './PostForm';

import React, { useEffect } from 'react';
import {
	Card,
	CardHeader,
	Avatar,
	IconButton,
	CardMedia,
	makeStyles,
	CardContent,
	Typography,
	Divider,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

const madeStyles = makeStyles({
	// root: {
	// 	background: '#001935',
	// 	width: '100vw',
	// 	height: '100vw',
	// 	margin: '0',
	// 	padding: '0',
	// },
	card: {
		maxWidth: 540,
		'margin-bottom': '20px',
	},
});

const CardPost = props => {
	const classes = madeStyles();
	const { user, post } = props;
	console.log(user, post);
	return (
		<Card className={classes.card}>
			<CardHeader
				avatar={
					<Avatar src='' variant='rounded' alt={user.username}>
						B
					</Avatar>
				}
				action={
					<IconButton>
						<MoreVert />
					</IconButton>
				}
				title={user.username}
			/>
			<CardContent>
				<Typography variant='body1'>{post.text}</Typography>
			</CardContent>
		</Card>
	);
};

CardPost.defaultProps = {
	user: {},
	post: {},
};

export default props => {
	const dispatch = useDispatch();
	const classes = madeStyles();

	useEffect(() => {
		dispatch(fetchUsers());
		dispatch(fetchPosts());
	}, []);

	const users = useSelector(state => state.users);
	const posts = useSelector(state =>
		Object.values(state.posts).sort((a, b) => b.id - a.id)
	);
	console.log(users);

	return (
		<div id='feed' className={classes.root}>
			<PostForm className={classes.card} />
			{posts.map(post => (
				<CardPost key={post.id} post={post} user={users[post.userId]} />
			))}
		</div>
	);
};
