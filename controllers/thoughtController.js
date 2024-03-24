//import Thought model 
const {Thought} = require('../models');

module.exports = {
    // TODO: GET all thoughts
    async getThoughts (req, res) {
        try {
            const thoughts = await Thought.find()
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        } 
    }, 

    // GET a single thought by its _id
    async getSingleThought (req, res) {
        try {
            // thoughtId = req.params.thoughtId;
            const thought = await Thought.findOne({_id: req.params.thoughtId});
            res.json(thought);

            if(!thought) {
                return res.status(404).json({message: "No course with that ID"})
            }

        } catch(err) {
            res.status(500).json(err);
        }
    },

        // create a new thought
    async createThought (req, res) {
        try {
            const newThought = req.body;
            const thought = await Thought.create(newThought);
            res.json(thought);

        } catch(err) {
            res.status(500).json(err);
        }
    }
    

    //(dont forget to push the created thought's -id to the associated user's thoughts array field)

    // TODO: PUT to update a thought by its  _id

    // TODO: DELETE to remove a thought by its _id
};