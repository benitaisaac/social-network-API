const {Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction');

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