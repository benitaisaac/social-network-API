const router = require('express').Router();

const {getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, deleteFriend} = require ('../../controllers/userController');


// route is /api/users
router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

//Routes to add and delete a friend 
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router; 