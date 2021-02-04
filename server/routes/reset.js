const { Router } = require('express');
const crypto = require('crypto');
const router = Router();
const User = require('../models/user');
const transporter = require('../emails/transporter');
const resetEmail = require('../emails/reset');

router.get('/', (req, res) => {
	res.render('reset', {
		title: 'Reset password',
		error: req.flash('error')
	})
});

router.post('/', (req, res) => {
	try {
		crypto.randomBytes(32, async (err, buffer) => {
			if (err) {
				req.flash('error', 'Something went wrong. Please try again');
				return res.redirect('/reset');
			}

			const token = buffer.toString('hex');
			const user = await User.findOne({ email: req.body.email });

			if (user) {
				user.resetToken = token;
				user.resetTokenExp = Date.now() + (60 * 60 * 1000);
				await user.save();
				res.redirect('/signin');
				await transporter.sendMail(resetEmail(user.email, token));
			} else {
				req.flash('error', 'Email could not found');
				res.redirect('/reset');
			}
		});
	} catch(e) {
		console.log(e);
	}
});

module.exports = router;