var product = require('../schemas/productos');



exports.getproducts = {

  handler: function(request, reply){

    var products = product.find({});

    reply(products);

  }

}



exports.getproduct = {

  handler: function(request, reply){

    var products = product.find({nombre:request.params.nombre});

    reply(products);

  }

}



exports.createproduct = {

  handler: function(request, reply){

    var newproduct = new product({

      nombre : request.payload.nombre,

      descripcion :request.payload.descripcion,

      ingredientes : request.payload.ingredientes

    });

    newproduct.save();

    console.log('product saved');

    return reply('ok');

  }

}



exports.updateproduct = {

  handler: function(request, reply){

    var reproduct = product.findByIdAndUpdate(encodeURIComponent(request.params.nombre), {

      nombre : request.payload.nombre,

      descripcion :request.payload.descripcion,

      ingredientes:request.payload.ingredientes

    },function(err){

      if(err){

        console.log(err);

        reply("error removing")

      }

      console.log('product updated');

      return  reply('product update');

    });

  }

}

exports.deleteproduct = {

  handler: function(request, reply){

    var products = product.findByIdAndRemove(encodeURIComponent(request.params.nombre), function(err){

      if(err){

        console.log(err);

        reply("error removing")

      }

      console.log('product deleted');

      return  reply('product deleted');

    });

  }

}
