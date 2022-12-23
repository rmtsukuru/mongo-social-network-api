const { Schema, model } = require('mongoose');

const { ObjectId } = Schema.Types;

// Reaction schema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: ObjectId,
      default: new ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
  }
);

// Thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
    },
    reactions: [reactionSchema],
  } // TODO add virtuals
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
