const { Schema, model } = require('mongoose');

const albumSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  albumImage: {
    type: String,
    required: true
  },
});

module.exports = model('Album', albumSchema);