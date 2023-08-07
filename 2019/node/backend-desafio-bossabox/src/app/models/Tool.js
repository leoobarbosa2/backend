const mongoose = require('mongoose');

const Tool = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [],
    default: undefined,
  },
});

module.exports = mongoose.model('Tool', Tool);
