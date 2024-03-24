const router = require('express').Router();

//import routes from controllers file 

const {getThoughts, getSingleThought, createThought, updateThought, deleteThought} = require('../../controllers/thoughtController');


// Route is  /api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);


// Route is /api/
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);
;

module.exports = router;