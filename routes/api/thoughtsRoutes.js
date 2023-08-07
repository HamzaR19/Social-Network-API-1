const router = require('express').Router();
const { getAllThoughts, getOneThought, createThought, updateThought, deleteThought } = require('../../controllers/thoughtsController');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions

    module.exports = router;