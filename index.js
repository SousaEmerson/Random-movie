const express = require('express');
const {port} = require('./config');
const router = require('./config/router');

const app = express();

app.use(express.json());
app.use(router);

app.listen(port, err => {
	if(err) console.error(err)
	console.info(`Server running on port ${port}`)

})