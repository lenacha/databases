var db = require('../db');

module.exports = {
  users: {
    get: function (callback) {
      db.con.query("SELECT * FROM users;", function (err, result) {
        if (err) {
          console.log(err);
          callback(err, null);
        } else {
          console.log("username");
          callback(null, result);
        }
      });
    },
    post: function (user, callback) {
      var sql = `INSERT INTO users (name) VALUES ('${user.username}');`;
      console.log(sql);
      db.con.query(sql, function (err, result) {
        if (err) {
          console.log(err);
          callback(err, null);
        } else {
          console.log("1 record inserted");
          callback(null, result);
        }
      });
    }
  },

  messages: {
    get: function (callback) {
      db.con.query("SELECT * FROM messages;", function (err, result) {
        if (err) {
          console.log(err);
          callback(err, null);
        } else {
          console.log("messsages");
          callback(null, result);
        }
      });
    },
    post: function (messageObj, callback) {
      var sql = `INSERT INTO messages (text, user_id, room_id) VALUES ("${messageObj.message}", "${messageObj.username}", "${messageObj.roomname}");`;
      console.log(sql);
      db.con.query(sql, function (err, result) {
        if (err) {
          console.log(err);
          callback(err, null);
        } else {
          console.log("1 record insertedddd");
          callback(null, result);
        }
      });
    }
  },

  rooms: {
    get: function () {
      db.con.connect(function (err) {
        if (err) {
          throw err;
        }
        con.query("SELECT * FROM rooms", function (err, result) {
          if (err) {
            throw err;
          }
          console.log("rooms");
        });
      });
    },
    post: function () {
      db.con.connect(function (err) {
        if (err) {
          throw err;
        }
        console.log("Connected!");
        var sql = "INSERT INTO rooms (name) VALUES ('dating')";
        con.query(sql, function (err, result) {
          if (err) {
            throw err;
          }
          console.log("1 record inserted");
        });
      });
    }
  }
};
