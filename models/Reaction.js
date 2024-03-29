const {Schema, Types} = require('mongoose');

//Reaction schema 
const reactionSchema = new Schema({
    reactionId: {
      //we need to set the objectId 
      type: Schema.Types.ObjectId,
      default: new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  //This prevents mongodb from setting its own id
  {_id: false});

  //Reaction will not be a model. It is schema only
  module.exports = reactionSchema;