const { Router } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const router = Router();
const { signupValidators } = require('../utils/validators');

router.get('/', (req, res) => {
	res.render('signup', {
		title: 'Sign up'
	});
});

router.post('/', signupValidators, async (req, res) => {
	try {
		const { name, email, password, rpassword } = req.body;
		const candidate = User.findOne({ email });

		if (candidate) {
			res.redirect('/signin');
		} else {
			const hashPassword = bcrypt.hash(password, 10);
			const isSame = bcrypt.compare(rpassword, hashPassword);

			if (isSame) {
				const user = new User({
					name,
					email,
					password: hashPassword
				});
				
				await user.save();
				res.redirect('/signin');
			} else {
				res.redirect('/signup');
			}
		}
	} catch(e) {
		console.log(e);
	}
});

module.exports = router;

