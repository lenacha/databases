var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, result) => {
        if (err) {
          console.log('ERROR to get message');
        } else {
          // res.statusCode = 200;
          res.send(result);
        }
      });
    },
    post: function (req, res) {
      models.messages.post(req.body, (err) => {
        if (err) {
          console.log('ERROR to post message');
        } else {
          // res.statusCode = 201;
          res.send('');
        }
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get((err, result) => {
        if (err) {
          console.log('ERROR to get user');
        } else {
          // res.statusCode = 200;
          res.send(result);
        }
      });
    },
    post: function (req, res) {
      models.users.post(req.body, (err) => {
        if (err) {
          console.log('ERROR to post user');
        } else {
          // res.statusCode = 201;
          res.send('');
        }
      });
    }
  }
};

