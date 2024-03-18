const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

//add thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //TODO: getter method 
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  }
  // {
  //     toJSON: {
  //         getters: true,
  //     },
  // }
);

//TODO: include virtual
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

//create model for collection
const Thought = model("thought", thoughtSchema);
module.exports = Thought;
