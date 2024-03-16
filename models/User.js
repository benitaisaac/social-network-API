const {Schema, Types, model} = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: Schema.Types.ObjectId,
            unique: true,
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: Schema.Types.ObjectId,
            unique: true,
            type: String,
            required: true,
            //include regex expression to verify valid email address
            match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address']
        },
        //TODO: check if this is correct 
        thoughts: [thoughtSchema], 
        friends:  {
            type: Schema.Types.ObjectId,
            ref: 'User'
          }
    }
);

userSchema
//fullName is a virtual property on the user Schema 
  .virtual('friendCount')
  // defining a getter function for the fullName virtual property
  .get(function () {
   return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;



