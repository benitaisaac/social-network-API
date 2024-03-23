const router = require('express').Router();

//import routes from controllers file 

const {getThoughts, getSingleThought} = require('../../controllers/thoughtController');


// /api/thoughts
router.route('/').get(getThoughts);

router.route('/:thoughtId').get(getSingleThought);

module.exports = router;