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
        thoughts: [thoughtSchema], 
        friends: {
            //add self reference 
        }
    }
);

//TODO: add virtuals 


const User = model('user', userSchema);
module.exports = User;



