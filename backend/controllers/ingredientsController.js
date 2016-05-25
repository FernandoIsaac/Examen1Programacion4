var ingredient = require('../schemas/ingredientes');



exports.getingredients = {

  handler: function(request, reply){

    var ingredients = ingredient.find({});

    reply(ingredients);

  }

}



exports.getingredient = {

  handler: function(request, reply){

    var ingredients = ingredient.find({nombre:request.params.nombre});

    reply(ingredients);

  }

}



exports.createingredient = {

  handler: function(request, reply){

    var newingredient = new ingredient({

      nombre: request.payload.nombre,

      descripcion :request.payload.descripcion

    });

    newingredient.save();

    console.log('ingredient saved');

    return reply('ok');

  }

}



exports.updateingredient = {

  handler: function(request, reply){

    var reingredient = ingredient.findByIdAndUpdate(encodeURIComponent(request.params.nombre), {

      nombre: request.payload.nombre,

      descripcion :request.payload.descripcion

    },function(err){

      if(err){

        console.log(err);

        reply("error removing")

      }

      console.log('ingredient updated');

      return  reply('ingredient update');

    });

  }

}

exports.deleteingredient = {

  handler: function(request, reply){

    var ingredients = ingredient.findByIdAndRemove(encodeURIComponent(request.params.nombre), function(err){

      if(err){

        console.log(err);

        reply("error removing")

      }

      console.log('ingredient deleted');

      return  reply('ingredient deleted');

    });

  }

}
