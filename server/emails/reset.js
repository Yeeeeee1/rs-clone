module.exports = function(to, token) {
	return {
		from: process.env.EMAIL,
		to,
		subject: 'Password recovery',
		html: ` 
			<h1>Did you want restore password?</h1>
			<a href="${process.env.BASE_URL}/password/${token}">Restore</a>
			<hr />
			<a href="${process.env.BASE_URL}">Follow</a>
		`
	};
}