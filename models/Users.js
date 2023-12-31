const {Schema, model} = require('mongoose');

const UsersSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address'],
    },
    thoughts: [{type: Schema.Types.ObjectId, ref: 'Thoughts'}],
    friends: [{type: Schema.Types.ObjectId, ref: 'Users'}],
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,

});

UsersSchema.virtual('friendCount').get(function() {
    return `${this.friends.length}`;
});

const Users = model('Users', UsersSchema);

module.exports = Users;
        