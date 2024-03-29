//import Thought model
const { Thought, Reaction } = require("../models");

module.exports = {
  // TODO: GET all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET a single thought by its _id
  async getSingleThought(req, res) {
    try {
      // thoughtId = req.params.thoughtId;
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create a new thought
  //TODO: (dont forget to push the created thought's -id to the associated user's thoughts array field)
  async createThought(req, res) {
    try {
      const newThought = req.body;
      const thought = await Thought.create(newThought);
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // TODO: PUT to update a thought by its  _id
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // DELETE to remove a thought by its _id
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }
      res.json({ message: "Thought deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //create a reaction stored in a single thought's reaction array field
  async createReaction(req, res) {
    try {
      const { thoughtId } = req.params;
      const { reactionBody, username } = req.body;

      // Find thought by ID and push new reaction
      // Note that we cannot update the Reaction model since it does not exist 
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $addToSet: {reactions: { reactionBody, username }}},
        { new: true }
      );

      if (!updatedThought) {
        return res
          .status(404)
          .json({ message: "no thought found with that id!" });
      }
      res.json(updatedThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
      console.error();
    }
  },

  async deleteReaction (req, res) {
    try {
        const {thoughtId, reactionId} = req.params;

        //Find thought by Id and pull reaction by ID
        const updatedThought = await Thought.findOneAndUpdate(
            {_id: thoughtId},
            { $pull: {reactions: {reactionId: reactionId}}},
            {new: true}
        );
        
        if(!updatedThought){
            res.status(404).json({message: "no thought found with this id!"});
        }

        res.json(updatedThought);

    } catch(err) {
        res.status(500).json(err);
        console.log(err);
        console.error();
    }
  }
};
