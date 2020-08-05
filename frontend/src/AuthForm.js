import { login, signup } from './store/auth';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, ButtonGroup, Button } from '@material-ui/core';

export default props => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const logIn = e => {
		e.preventDefault();
		dispatch(login(username, password));
	};

	const signUp = e => {
		e.preventDefault();
		dispatch(signup(username, password));
	};

	return (
		<form>

			<TextField
				id='username'
				label='username'
				variant='outlined'
				value={username}
				onChange={e => setUsername(e.target.value)}
				required
			/>

			<TextField
				id='password'
				label='password'
				variant='outlined'
				value={password}
				onChange={e => setPassword(e.target.value)}
				required
			/>			

			<ButtonGroup variant="contained" color="primary">
				<Button onClick={logIn}>Log In</Button>
				<Button onClick={signUp}>Sign Up</Button>
			</ButtonGroup>
		</form>
	);
};
