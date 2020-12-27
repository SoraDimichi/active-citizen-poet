const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
    validate: {
      validator(link) {
        return /^https?:\/\/(www\.)?[a-z0-9._~:/?#[\]@!$&'()*+,;=-]+#?$/i
          .test(link);
      },
    },
  },
  verse: {
    type: String,
  },
  date: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  owner: {
    type: String,
    required: true,
  },
}, { versionKey: false });

const event = mongoose.model('event', eventSchema);
module.exports = event;
