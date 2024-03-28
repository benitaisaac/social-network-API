const { User, Thought } = require('../models');

module.exports = {
// get all user data 
    async getUsers (req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch(err) {
            res.status(500).json(err);
        }
    },

// GET a single user by its _id and populated thought and friend data
    async getSingleUser (req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId}).populate('thoughts')


            if(!user) {
                return res.status(404).json({message: "No user with that ID"})
            };
            res.json(user);

        } catch(err) {
            res.status(500).json(err);
        }
    },

//TODO: POST  new user
    async createUser (req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    }


    //TODO: PUT to update a user by its _id

    //TODO: DELETE to remove a user by its _id

}