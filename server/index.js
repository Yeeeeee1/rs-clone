const path = require('path');
const express = require('express');
const homeRoutes = require('./routes/home');
const signinRoutes = require('./routes/signin');
const signupRoutes = require('./routes/signup');


const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('view options', {
	layout: 'main'
})


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))

app.use('/', homeRoutes);
app.use('/signin', signinRoutes);
app.use('/signup', signupRoutes);

app.listen(PORT, () => {
	console.log('Server has been started');
});

