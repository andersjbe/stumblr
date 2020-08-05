import React from 'react';
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

const madeStyles = makeStyles({
	root: {
		maxWidth: 540,
		// background: '#001935'
	},
});

const CardPost = props => {
	const classes = madeStyles();
	return (
		<Card className={classes.root} raised>
			<CardHeader
				avatar={
					<Avatar
						src='https://64.media.tumblr.com/avatar_998358b1512b_64.pnj'
						variant='rounded'
					>
						B
					</Avatar>
				}
				action={
					<IconButton>
						<MoreVert />
					</IconButton>
				}
				title='Some User'
			/>
			<CardMedia
				component='img'
				src='https://64.media.tumblr.com/d57df59ee95a00cd64e1bad12972d67f/tumblr_pc2un27IF51wzvt9qo1_500.gifv'
				width='540px'
			/>
			<CardContent>
				<Typography variant='body1'>This is a picture</Typography>
				<Divider />
			</CardContent>
		</Card>
	);
};

export default props => {
	const classes = madeStyles();

	return (
		<Card className={classes.root} raised>
			<CardHeader
				avatar={
					<Avatar
						src='https://64.media.tumblr.com/avatar_998358b1512b_64.pnj'
						variant='rounded'
					>
						B
					</Avatar>
				}
				action={
					<IconButton>
						<MoreVert />
					</IconButton>
				}
				title='Some User'
			/>
			<CardMedia
				component='img'
				src='https://64.media.tumblr.com/d57df59ee95a00cd64e1bad12972d67f/tumblr_pc2un27IF51wzvt9qo1_500.gifv'
				width='540px'
			/>
			<CardContent>
				<Typography variant='body1'>This is a picture</Typography>
				<Divider />
			</CardContent>
		</Card>
	);
};
