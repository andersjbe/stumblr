import React from 'react';
import {
	Card,
	CardHeader,
	Avatar,
	IconButton,
	CardMedia,
	CardContent,
	Typography,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

const PostContent = ({ post }) => {
	switch (post.mediaTypeId) {
		case 1:
			return null;
		case 2:
			return <CardMedia component='img' src={post.mediaUrl} />;
		case 3:
			return <CardMedia component='video' src={post.mediaUrl} />;
		case 4:
			return <CardMedia component='audio' src={post.mediaUrl} />;
	}
};

const CardPost = props => {
	const { user, post, classes } = props;

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
			<PostContent post={post}/>
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

export default CardPost;
