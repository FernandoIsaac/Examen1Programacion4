var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  nombre: String,
  descripcion : String,
  ingredientes: [String]

});

module.exports = mongoose.model('Game', ProductSchema);
