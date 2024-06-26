const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    //include regex expression to verify valid email address
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address",
    ],
  },
  thoughts:[ {
    type: Schema.Types.ObjectId,
    ref: "thought",
  }],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query 
userSchema
  //fullName is a virtual property on the user Schema
  .virtual("friendCount")
  // defining a getter function for the fullName virtual property
  .get(function () {
    return this.friends.length;
  });

//create model for collection
const User = model("user", userSchema);
module.exports = User;
