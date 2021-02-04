const { Router } = require('express');


const router = Router();

router.get('/', (req, res) => {
	res.render('home', {
		title: 'Thomas Was Alone',
	});
});

module.exports = router;
