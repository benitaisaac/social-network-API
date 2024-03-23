const router = require('express').Router();

//import routes from controllers file 

const {getThoughts, testThoughts} = require('../../controllers/thoughtController');


// /api/thoughts
router.route('/').get(getThoughts);

router.route('/test').get(testThoughts);

module.exports = router;