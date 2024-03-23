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


    async getSingleThought (req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.courseId})

        } catch(err) {
            res.status(404).json({ message: 'No course with that ID'});
        }
    }
    
    // TODO: GET a single thought by its _id

    // TODO: POST to create a new thought
    //(dont forget to push the created thought's -id to the associated user's thoughts array field)

    // TODO: PUT to update a thought by its  _id

    // TODO: DELETE to remove a thought by its _id
};