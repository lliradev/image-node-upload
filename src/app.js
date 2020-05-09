const express = require('express');
const morgan = require('morgan');
const multer = require('./libs/multer');

// Inicializando
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(multer.single('albumImage'));

// Routes
app.use('/api/albums/', require('./routes/album.routes'));

// Static files
app.use('/uploads', express.static('src/uploads'));

module.exports = app;