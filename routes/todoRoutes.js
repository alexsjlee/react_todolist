const mongoose = require('mongoose');

const Todo = mongoose.model('todos');

module.exports = app => {
  // GETs all todos in the database
  app.get('/api/todos', async (req, res) => {
    const todos = await Todo.find();

    try {
      res.send(todos);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  // GETs specific todo with _id
  app.get('/api/todos/:id', async (req, res) => {
    const id = await req.params.id;
    const todo = await Todo.findById(id);

    try {
      res.send(todo);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  // POST a todo to the database
  app.post('/api/todos', async (req, res) => {
    const { title, date } = req.body;

    const todo = new Todo({
      title,
      date
    });

    try {
      await todo.save();
      res.send(todo);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  // PATCH a specific todo with _id
  app.patch('/api/todos/:id', async (req, res) => {
    const id = await req.params.id;
    const { title, date, completed } = await req.body;
    const todo = await Todo.findByIdAndUpdate(id, {
      $set: {
        title,
        date,
        completed
      }
    });

    try {
      await todo.save();
      res.send(todo);
    } catch (err) {
      res.status(400).send(err);
    }
  });
};
