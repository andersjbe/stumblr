const userRoutes = require('./routes/users')

const express = require('express');
const moragn = require('morgan');
const createError = require('http-errors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(moragn('dev'));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRoutes)

app.use((req, res, next) => {
	next(createError(404));
});

app.use((err, req, res, next) => {
	res.status(err.status || 500);
	if (res.status === 401) res.send('WWW-Authneticate', 'Bearer');

	res.json({
		message: err.message,
		error: JSON.parse(JSON.stringify(err)),
	});
});

module.exports = app;
