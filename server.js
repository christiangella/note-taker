// requiring express, establishing it as app (shorthand)
const express = require('express');
const app = express();

// establishing port
const PORT = process.env.PORT || 3001;

// establishing routes
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

// installing node packages
const path = require('path');

// utilizing express
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes)

// establishing listen
app.listen(PORT, () => console.log(`We're live and alive at http://localhost:${PORT}.`))