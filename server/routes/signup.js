const { Router } = require('express');


const router = Router();

router.get('/', (req, res) => {
	res.render('signup', {
		title: 'Sign up'
	});
});

router.post('/', (req, res) => {
	res.redirect('/')
});

module.exports = router;

