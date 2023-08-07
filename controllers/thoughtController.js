const {Users, Thoughts} = require('../models');

module.exports = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thoughts.find();

            res.status(200).json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getOneThought(req, res) {
        try {
            const thought = await Thoughts.findOne({_id: req.params.thoughtId});

            if (!thought) {
                return res.status(404).json({message: 'No thought with this id!'});
            }

            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createThought(req, res) {
        try {
            const thought = await Thoughts.create(req.body)
            const user = await Users.findOneAndUpdate(
                {_id: req.body.userId},
                {$push: {thoughts: thought._id}},
                {new: true}
            )
            if (!thought) {
                return res.status(404).json({message: 'No thought with this id! but comment was created'});
            }
            res.status(200).json({message: 'Thought created!'});
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

        async updateThought(req, res) {
            try {
                const thought = await Thoughts.findOneAndUpdate({_id: req.params.thoughtId });
                res.status(200).json(thought);
            }
            catch (err) {
                res.status(500).json(err);
            }

        },
        
        async deleteThought(req, res) {
            try {
                const thought = await Thoughts.findOneAndDelete({_id: req.params.thoughtId});
                res.status(200).json(thought);
            }
            catch (err) {
                res.status(500).json(err);
            }
        }
    }


            
                

            