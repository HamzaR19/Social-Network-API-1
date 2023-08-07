const {Users, Thoughts} = require('../models');


module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await Users.find();

            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getOneUser(req, res) {
        try {
            const user = await Users.findOne({_id: req.params.userId});

            if (!user) {
                return res.status(404).json({message: 'No user with this id!'});
            }

            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const user = await Users.create(req.body);
            res.status(200).json({message: 'User created!'})
            if (!user) {
                return res.status(404).json({message: 'No user created!'});
            }
            res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const user = await Users.findOneAndUpdate({_id: req.params.userId}, {$set: req.body}, {new: true, runValidators: true});
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json(err);
        
        }
    },

    async deleteUser(req, res) {
        try {
            const user = await Users.findOneAndDelete({_id: req.params.userId});
            const thoughts = await Thoughts.deleteMany({_id: {$in: user.thoughts}});
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    async addFriend(req, res) {
        try {
            const user = await Users.findOneAndUpdate(
                {_id: req.params.userId},
                {$addToSet: {friends: req.params.friendId}},
                {new: true}
            );
            if (!user) {
                return res.status(404).json({message: 'No user with this id!'});
            }
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteFriend(req, res) {
        try {
            const user = await Users.findOneAndUpdate(
                {_id: req.params.userId},
                {$pull: {friends: req.params.friendId}},
                {new: true}
            );
            if (!user) {
                return res.status(404).json({message: 'No user with this id!'});
            }
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
};
            