const mongoose = require('mongoose');

const verseSchema = new mongoose.Schema({
  model: {
    type: String,
  },
  pk: {
    type: Number,
  },
  fields: {
    themes: {
      type: [String],
      default: [],
    },
    author: {
      type: String,
    },
    date_from: {
      type: String,
    },
    text: {
      type: String,
    },
    name: {
      type: String,
    },
    date_to: {
      type: String,
    },
  },
}, { versionKey: false });

const verse = mongoose.model('verse', verseSchema);
module.exports = verse;
