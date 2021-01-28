const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');
const varMiddleware = require('./middleware/variables');
const userMiddleware = require('./middleware/user');
const homeRoutes = require('./routes/home');
const signinRoutes = require('./routes/signin');
const signupRoutes = require('./routes/signup');
const resetRoutes = require('./routes/reset');
const passwordRoutes = require('./routes/password');

dotenv.config();

const app = express();
const store = MongoStore({
	collection: 'sessions',
	uri: process.env.MONGODB_URI
});
const PORT = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('view options', {
	layout: 'main'
})

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(session({
	secret: process.env.SESSION_SECRET_KEY,
	resave: false,
	saveUninitialized: false,
	store
}));
app.use(csrf());
app.use(flash());

app.use(varMiddleware);
app.use(userMiddleware);

app.use('/', homeRoutes);
app.use('/signin', signinRoutes);
app.use('/signup', signupRoutes);
app.use('/reset', resetRoutes);
app.use('/password', passwordRoutes);


async function init() {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		app.listen(PORT, () => {
			console.log('Server has been started');
		});
	} catch(e) {
		console.log(e);
	}
}

init();