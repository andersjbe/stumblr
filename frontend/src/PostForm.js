import { postPost } from './store/posts';

import React, { useState } from 'react';
import { Card, CardContent, TextField, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

export default () => {
	const [textBody, setTextBody] = useState('');
	const userId = useSelector(state => state.auth.currentUserId);
	const dispatch = useDispatch();

	const onSubmit = e => {
		e.preventDefault();
		const body = {
			userId,
			text: textBody,
			mediaTypeId: 1,
		};

		dispatch(postPost(body));
		setTextBody('');
	};

	return (
		<Card id='create-post' style={{ maxWidth: '420px', margin: '20px' }}>
			<CardContent>
				<form onSubmit={onSubmit}>
					<TextField
						multiline
						onChange={e => setTextBody(e.target.value)}
						value={textBody}
						required
					/>
					<Button type='submit'>Post</Button>
				</form>
			</CardContent>
		</Card>
	);
};
