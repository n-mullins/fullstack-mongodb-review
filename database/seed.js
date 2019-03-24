const mongoose = require('mongoose');
const Todo = require('./index');

const seedData = [
  { name: 'study', priority: 1 },
  { name: 'sleep', priority: 2 },
  { name: 'go to store', priority: 3 }
];

const seedFunction = () => {
  Todo.create(seedData)
    .then(() => {
      console.log('Database seeded');
      mongoose.connection.close();
    })
    .catch(err => console.log('Error seeding', err));
};

seedFunction();
