import styles from './general.module.css';
import Landing from './Landing';
import Dashboard from './Dashboard'

import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom'

export default props => {
	// const currentUserId = useSelector(state => state.auth.currentUserId);

	
	return (
		<>
		<Switch>
			<Route path='/dashboard' component={Dashboard} exact />
			<Route path='/' component={Landing} exact />
		</Switch>
		</>
	);
};
