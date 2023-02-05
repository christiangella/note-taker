const router = require('express').Router();
const hold = require('../public/assets/js/notes')

//defining get routes
router.get('/notes', (req, res) => {
    //hold is a class instance with custom functions
    //retrieveNote() allows us to retrieve these notes
    hold
    .retrieveNote()
    .then((notes) => {
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
})

//defining post routes
router.post('/notes', (req, res) => {
    //hold is a class instance with custom functions
    //writeNote() allows us to save what is in the request body
    hold
    .writeNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
})

module.exports = router
