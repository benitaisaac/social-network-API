const {Schema, model} = require('mongoose');
// const reactionSchema = require('./Reaction');

//add reaction schema 
const reactionSchema = new Schema({
    reactionId: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId()
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
        },
        username: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

//TODO: include virtual 
thoughtSchema
.virtual('reactionCount')
.get(function (){
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);
module.exports = Thought;