const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// User schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // TODO add email format validation
    },
    thoughts: [thoughtSchema],
    friends: [userSchema],
  }
);

const User = model('user', userSchema);

module.exports = User;
