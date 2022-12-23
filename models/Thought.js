const { Schema, model } = require('mongoose');

// Thought schema
const thoughtSchema = new Schema(
  {
    // TODO fill this in
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
