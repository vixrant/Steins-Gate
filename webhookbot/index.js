const express = require('express');
const router = express.Router();

router.post('/df', (req, res) => {
	let parameters = req.body.queryResult.parameters;
	console.log(JSON.stringify(parameters));
});

module.exports = router;
