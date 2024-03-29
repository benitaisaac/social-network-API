const router = require('express').Router();

//import routes from controllers file 

const {getThoughts, getSingleThought, createThought, updateThought, deleteThought, createReaction, deleteReaction} = require('../../controllers/thoughtController');


// Route is  /api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);


// Route is /api/
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

 //   /api/thoughts/:thoughtId/reactions
 router.route('/:thoughtId/reactions')
 //TODO: POST to create a reaction stored in a single thought's reactions array field
 .post(createReaction);


 //route: /api/thoughts/:thoughtId/reactions/:reactionId
 router.route('/:thoughtId/reactions/:reactionId')
 .delete(deleteReaction);

 //TODO: DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router;