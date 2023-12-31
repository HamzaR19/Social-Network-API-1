const {Schema, model, Types} = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => date.tolocaleDateString(),
    },
},
{
    toJSON: {
        getters: true,
    },
    id: false,
});











const ThoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => date.tolocaleDateString(),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema]
});    

ThoughtsSchema.virtual
('reactionCount').get(function() {
    return `${this.reactions}`;
}).set(function(value) {
    const reactionStuff = value.split(',');
    this.reactions = reactionStuff;
});

const Thoughts = model('Thoughts', ThoughtsSchema);


module.exports = Thoughts;