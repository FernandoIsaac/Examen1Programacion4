var mongoose = require('mongoose');

var IngredientSchema = new mongoose.Schema({
  nombre: String,
  descripcion : String

});

module.exports = mongoose.model('Ingredient', IngredientSchema);
