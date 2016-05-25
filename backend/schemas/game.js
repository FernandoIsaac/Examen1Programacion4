var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
  title : String,
  developer : String,
  genre : String,
  code : String

});

module.exports = mongoose.model('Game', GameSchema);
