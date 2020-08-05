import Feed from './Feed';

import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default porps => {
	const token = useSelector(state => state.auth.token);

	if (!token) return <Redirect to='/' />;

	return <Feed />;
};
