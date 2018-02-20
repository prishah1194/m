const router = require('express').Router();
const handler = require('./request-handler.js');

router.get('/open', handler.getOpenMovies);
router.get('/star', handler.getStaredMovies);
router.post('/movie', handler.submitMovie);
router.post('/delete', handler.deleteMovie);
router.put('/movie', handler.updateMovie);


module.exports = router;
