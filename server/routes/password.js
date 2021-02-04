const { Router } = require('express');
const router = Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');

router.get('/:token', async (req, res) => {
	try {
		if (!req.params.token) {
			return res.redirect('/signin');
		}

		const user = await User.findOne({
			resetToken: req.params.token,
			resetTokenExp: {$gt: Date.now()}
		});

		if (!user) {
			res.redirect('/signin');
		} else {
			res.render('password', {
				title: 'Password',
				error: req.flash('error'),
				userId: user._id.toString(),
				token: req.params.token
			});
		}
	} catch(e) {
		console.log(e);
	}
});

router.post('/', async (req, res) => {
	try {
		const { userId, token } = req.body;

		const user = await User.findOne({
			_id: userId,
			resetToken: token,
			resetTokenExp: {$gt: Date.now()} 
		});

		if (user) {
			user.password = await bcrypt.hash(req.body.password, 10);
			user.resetToken = undefined;
			user.resetTokenExp = undefined;
			await user.save();
			res.redirect('/signin');
		} else {
			res.redirect('/signin');
		}
	} catch(e) {
		console.log(e);
	}
});

module.exports = router;