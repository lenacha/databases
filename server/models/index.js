var db = require('../db');

module.exports = {
  pokemon: {
    get: function () {
      db.con.connect(function(err) {
        if (err) {
          throw err;
        }
        con.query("SELECT pokemon", function (err, result) {
          if (err) {
            throw err;
          }
          console.log("Database created");
        });
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  trainers: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  },

  types: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
