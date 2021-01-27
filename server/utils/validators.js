const { body, validationResult } = require('express-validator');
const User = require('../models/user');


exports.singupValidators = [
	body('name').isLength({ min: 4 }).withMessage('Min length of name shoud be 4'),
	body('email').isEmail().withMessage('Fill the correct email').custom(async (value, { req }) => {
		try {
			const user = await User.findOne({ email: value });

			if (user) {
				return Promise.reject('User with this email already exists');
			}
		} catch(e) {	
			console.log(e);
		}
	}),
	body('password').isLength({ min: 8, max: 80 }).isAlphanumeric().withMessage('Min length of password shoud be 8'),
	body('confirm').custom((value, { req }) => {
		if (value !== req.body.password) {
			throw new Error('Passwords should be same');
		}

		return true;
	})
];