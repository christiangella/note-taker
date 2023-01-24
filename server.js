// requiring express, establishing it as app (shorthand)
const express = require('express');
const app = express();

// establishing port
const PORT = process.env.PORT || 3001;

// installing node packages & route files
const path = require('path');
const api = require('./routes/api/index.js')

// utilizing express
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use('/api', api)

// establishing listen
app.listen(PORT, function() {
    console.log(`We're live and alive at http://localhost:${PORT}.`)
})