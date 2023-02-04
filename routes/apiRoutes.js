const router = require('express').Router();
const hold = require('../public/assets/js/notes')

router.get('/notes', (req, res) => {
    hold
    .retrieveNote()
    .then((notes) => {
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
})

router.post('/notes', (req, res) => {
    hold
    .writeNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
})

module.exports = router
