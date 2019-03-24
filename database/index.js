const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/todos', { useMongoClient: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Successfully connected to the DB'));

const todosSchema = mongoose.Schema({
  name: { type: String, required: true },
  priority: { type: Number, required: true }
});

const Todo = mongoose.model('Todo', todosSchema);

module.exports = Todo;
