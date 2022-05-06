const { Router } = require('express');
const movieController = require('../src/controller/movie');

const router = Router();

router.get('/random-movies', movieController.get);

module.exports = router;