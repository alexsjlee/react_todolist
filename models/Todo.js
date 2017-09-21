const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

mongoose.model('todos', todoSchema);
