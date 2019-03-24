const Todo = require('./index');

const dbHelpers = {
  get: () => {
    return Todo.find({}).sort({ priority: 1 });
  },

  post: todo => {
    return Todo.create(todo);
  },

  put: (id, todo) => {
    return Todo.findByIdAndUpdate(id, todo);
  },

  delete: id => {
    return Todo.deleteOne(id);
  }
};

module.exports = dbHelpers;
