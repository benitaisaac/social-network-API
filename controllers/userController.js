const { User, Thought } = require("../models");

module.exports = {
  // get all user data
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET a single user by its _id and populated thought and friend data
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).populate(
        "thoughts"
      );

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // function to create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //update a user by its _id
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        //runValidators makes sure that the values that are entered in the request are validated by Mongoose, throught the schema
        //new ensures that the method returns the updated document after update is completed
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: "No user with this id!" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE to remove a user by its _id
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        res.status(404).json({ message: "No user with that id!" });
      }
      res.json({ message: "user deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // add a friend to a user's friend list
  async addFriend(req, res) {
    const { userId, friendId } = req.params;
    try {
      const user = await User.findOneAndUpdate(
        // get the user that you want to update
        { _id: userId },
        // add value to an array, it must be unique.
        //friends: friendId specifies the field 'friends' in the document
        { $addToSet: { friends: friendId } },
        { new: true }
      );

      if (!user) {
        res.status(404).json({ message: "no user with this id exists!" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //delete a friend 
  async deleteFriend(req, res) {
    const { userId, friendId } = req.params;
    try {
      const user = await User.findOneAndDelete(
        { _id: userId },
        { $pull: { friends: friendId } },
        { new: true }
      );

      if (!user) {
        res.status(404).json({ message: "no user with that Id found!" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
