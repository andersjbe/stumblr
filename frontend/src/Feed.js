import { fetchPosts } from './store/posts';
import { fetchUsers } from './store/users';
import PostForm from './PostForm';
import CardPost from './CardPost';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';

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
				<CardPost classes={classes} key={post.id} post={post} user={users[post.userId]} />
			))}
		</div>
	);
};
