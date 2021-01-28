const { Router } = require('express');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../models/user');
const router = Router();
const transporter = require('../emails/transporter');
const signupEmail = require('../emails/signup');
const { signupValidators } = require('../utils/validators');

router.get('/', (req, res) => {
	res.render('signup', {
		title: 'Sign up',
		signupError: req.flash('signupError')
	});
});

router.post('/', signupValidators, async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			req.flash('signupError', errors.array()[0].msg);
			return res
				.status(422)
				.redirect('/signup');
		}

		const hashPassword = await bcrypt.hash(password, 10);
		const user = new User({
			name,
			email,
			password: hashPassword
		});
		
		await user.save();
		res.redirect('/signin');
		await transporter.sendMail(signupEmail(email));
	} catch(e) {
		console.log(e);
	}
});

module.exports = router;

