import Login from './Login';

import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
	const currentUserId = useSelector(state => state.auth.currentUserId);

	return (
		<>
			<Login />
			{currentUserId ? <h2>{currentUserId}</h2> : null}
		</>
	);
}
