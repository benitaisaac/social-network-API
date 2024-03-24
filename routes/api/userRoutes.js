const router = require('express').Router();

const {getUsers} = require ('../../controllers/userController');


// route is /api/users
router.route('/')
    .get(getUsers);


module.exports = router; 