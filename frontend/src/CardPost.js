import React, { useState } from 'react';
import {
	Card,
	CardHeader,
	Avatar,
	IconButton,
	CardMedia,
	CardContent,
	Typography,
	Button,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

const PostContent = ({ post }) => {
	switch (post.mediaTypeId) {
		case 1:
			return null;
		case 2:
			return <CardMedia component='img' src={post.mediaUrl} />;
		case 3:
			return <CardMedia component='video' controls src={post.mediaUrl} />;
		case 4:
			return <CardMedia component='audio' controls src={post.mediaUrl} />;
		default:
			return null;
	}
};

const CardPost = props => {
	const { user, post, classes } = props;
	const [showFollow, setShowFollow] = useState(false);

	return (
		<Card className={classes.card}>
			<CardHeader
				avatar={
					<Avatar src='' variant='rounded' alt={user.username}>
						B
					</Avatar>
				}
				action={
					<span>
						{showFollow ? <Button>Follow</Button> : null}
						<IconButton>
							<MoreVert />
						</IconButton>
					</span>
				}
				title={user.username}
				onMouseEnter={() => setShowFollow(true)}
				onMouseLeave={() => setShowFollow(false)}
			/>
			<PostContent post={post} />
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
