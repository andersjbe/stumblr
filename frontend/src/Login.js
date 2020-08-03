import { login, signup } from './store/auth';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default props => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const onSubmit = e => {
		e.preventDefault();
		dispatch(login(username, password));
    };
    
    const signUp = e => {
        e.preventDefault();
        dispatch(signup(username, password))
    }

	return (
		<form onSubmit={onSubmit}>
			<label htmlFor='username'>Username</label>
			<input name='username' value={username} onChange={e => setUsername(e.target.value)} required />

			<label htmlFor='password'>Password</label>
			<input name='password' value={password} onChange={e => setPassword(e.target.value)} required />

            <button type='submit' id='login' >submit</button>
            <button id='sign-up' onClick={signUp}>Sign Up</button>
		</form>
	);
};
