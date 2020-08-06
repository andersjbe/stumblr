import { postPost } from './store/posts';
import { imageUrl } from './config';

import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Paper } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useDropzone } from 'react-dropzone';

export default () => {
	const [textBody, setTextBody] = useState('');
	const [file, setFile] = useState({});
	const userId = useSelector(state => state.auth.currentUserId);
	const dispatch = useDispatch();

	const { getRootProps, getInputProps } = useDropzone();
	const { ref, ...rootProps } = getRootProps();

	const onSubmit = async e => {
		e.preventDefault();

		const body = {
			userId,
			text: textBody,
			mediaTypeId: 2,
			file,
		};

		dispatch(postPost(body));
		setTextBody('');
	};

	return (
		<Card id='create-post' style={{ maxWidth: '420px', margin: '20px' }}>
			<CardContent>
				<form
					method='post'
					action={`${imageUrl}/api/posts`}
					encType='multipart/form-data'
				>
					<TextField
						multiline
						onChange={e => setTextBody(e.target.value)}
						name='text'
						value={textBody}
						required
					/>
					<input type='hidden' name='mediaTypeId' value={2} />
					<input type='hidden' name='userId' value={userId}/>
					<input
						type='file'
						name='file'
						onChange={e =>
							Array.from(e.target.files).forEach(file => setFile(file))
						}
					/>
					<Button type='submit'>Post</Button>
				</form>
			</CardContent>
		</Card>
	);
};
