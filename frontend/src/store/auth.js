import { imageUrl } from '../config';

const SET_TOKEN = 'stumblr/auth/GET_TOKEN';
const TOKEN_KEY = 'stumblr/auth/TOKEN_KEY';
// const REMOVE_TOKEN = 'stumblr/auth/REMOVE_TOKEN';

export const login = (username, password) => async dispatch => {
	const res = await fetch(`${imageUrl}/users/login`, {
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password }),
	});

	if (res.ok) {
		const data = await res.json();
		window.localStorage.setItem(TOKEN_KEY, data.token);
		dispatch(setToken(data.token, data.userId));
	}
};

export const signup = (username, password) => async dispatch => {
	const res = await fetch(`${apiUrl}/users`, {
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password }),
	});

	if (res.ok) {
		const data = await res.json();
		window.localStorage.setItem(TOKEN_KEY, data.token);
		dispatch(setToken(data.token, data.userId));
	}
};

export const setToken = (token, currentUserId) => {
	return {
		type: SET_TOKEN,
		token,
		currentUserId,
	};
};

export default function reducer(state = {}, action) {
	switch (action.type) {
		case SET_TOKEN:
			return {
				...state,
				token: action.token,
				currentUserId: action.currentUserId,
			};

		default:
			return state;
	}
}
