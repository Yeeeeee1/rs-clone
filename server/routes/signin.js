const { Router } = require('express');


const router = Router();

router.get('/', (req, res) => {
	res.render('signin', {
		title: 'Sign in'
	});
});

module.exports = router;

