const router = require('express').Router();
const requestHandler = require('./request-handler.js');

router.get('/open', requestHandler.getOpenMovies);
router.get('/star', requestHandler.getStaredMovies);

router.post('/movie', requestHandler.submitMovie);
router.post('/delete', requestHandler.deleteMovie);

router.put('/movie', requestHandler.updateMovie);


module.exports = router;
