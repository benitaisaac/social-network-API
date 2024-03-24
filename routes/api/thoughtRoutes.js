const router = require('express').Router();

//import routes from controllers file 

const {getThoughts, getSingleThought, createThought, updateThought} = require('../../controllers/thoughtController');


// Route is  /api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);


// Route is /api/
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought);
;

module.exports = router;