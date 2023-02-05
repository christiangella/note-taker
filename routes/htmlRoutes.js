// installing necessary packages
const fs = require('fs')
const path = require('path');
const router = require('express').Router()

// defining get routes -- direct to specific html file (index)
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

// defining get routes -- direct to specific html file (index) if NOT in /notes
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

module.exports = router;