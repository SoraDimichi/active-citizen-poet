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
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  followers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'user',
    default: [],
  },
  date: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
}, { versionKey: false });

const event = mongoose.model('event', eventSchema);
module.exports = event;
