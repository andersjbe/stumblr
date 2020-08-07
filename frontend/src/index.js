import configureStore from './store/configureStore';
import { TOKEN_KEY, USER_KEY } from './store/auth';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

const localToken = window.localStorage.getItem(TOKEN_KEY);
const localUser = window.localStorage.getItem(USER_KEY);
const initialState = localToken
	? { auth: { token: localToken, currentUserId: localUser } }
	: {};
const store = configureStore(initialState);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
