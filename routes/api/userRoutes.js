const router = require('express').Router();

const {getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend} = require ('../../controllers/userController');


// route is /api/users
router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

//POST to add a new friend to a user's friend list 
router.route('/:userId/friends/:friendId')
.post(addFriend);


//DELETE to remove a friend from a user's friend list 


module.exports = router; 