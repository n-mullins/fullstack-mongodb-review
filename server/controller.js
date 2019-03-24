const dbHelpers = require('../database/dbHelpers');

const controller = {
  get: (req, res) => {
    dbHelpers
      .get()
      .then(data => res.status(200).send(data))
      .catch(err => console.log('Error posting data', err));
  },

  post: (req, res) => {
    dbHelpers
      .post(req.body)
      .then(() => res.status(201).send())
      .catch(err => console.log('Error posting data', err));
  },

  put: (req, res) => {
    const _id = req.params;
    dbHelpers
      .put(_id, req.body)
      .then(() => res.status(202).send())
      .catch(err => console.log('Error updating data', err));
  },

  delete: (req, res) => {
    const _id = req.params;
    dbHelpers
      .delete(_id)
      .then(() => res.status(202).send())
      .catch(err => console.log('Error updating data', err));
  }
};

module.exports = controller;
