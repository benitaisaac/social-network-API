const {Schema, Types} = require('mongoose');

//add reaction schema 
const reactionSchema = new Schema({
    reactionId: {
      //we need to set the objectId since reaction isn't ever sent to mongoDB
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
  });

  module.exports = reactionSchema;