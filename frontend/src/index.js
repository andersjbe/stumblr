import configureStore from './store/configureStore';
import { TOKEN_KEY } from './store/auth';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const localToken = window.localStorage.getItem(TOKEN_KEY);
const initialState = localToken ? { auth: { token: localToken } } : {};
const store = configureStore(initialState);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
