const { Router } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const router = Router();
const { signinValidators } = require('../utils/validators');

router.get('/', (req, res) => {
	res.render('signin', {
		title: 'Sign in',
		signinError: req.flash('signinError')
	});
});

router.post('/', signinValidators, async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });

		if (user) {
			const isSame = await bcrypt.compare(password, user.password);

			if (isSame) {
				req.session.user = user;
				req.session.isAuthenticated = true;
				req.session.save(err => {
					if (err) {
						throw new Error(err);
					}
		
					res.redirect('/');
				});
			} else {
				req.flash('signinError', 'Wrong email or password');
				res.redirect('/signin');	
			}
		} else {
			req.flash('signinError', 'Wrong email or password');
			res.redirect('/signin');
		}
	} catch(e) {
		console.log(e);
	}
});

module.exports = router;

