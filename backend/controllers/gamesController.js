var game = require('../schemas/game');



exports.getgames = {

  handler: function(request, reply){

    var games = game.find({});

    reply(games);

  }

}



exports.getgame = {

  handler: function(request, reply){

    var games = game.find({code:request.params.code});

    reply(games);

  }

}



exports.creategame = {

  handler: function(request, reply){

    var newgame = new game({

      title : request.payload.title,

      developer :request.payload.developer,

      genre:request.payload.genre,

      code:request.payload.code

    });

    newgame.save();

    console.log('game saved');

    return reply('ok');

  }

}



exports.updategame = {

  handler: function(request, reply){

    var regame = game.findByIdAndUpdate(encodeURIComponent(request.params.code), {

      title : request.payload.title,

      developer :request.payload.developer,

      genre:request.payload.genre,

      code:request.payload.code

    },function(err){

      if(err){

        console.log(err);

        reply("error removing")

      }

      console.log('game updated');

      return  reply('game update');

    });

  }

}

exports.deletegame = {

  handler: function(request, reply){

    var games = game.findByIdAndRemove(encodeURIComponent(request.params.code), function(err){

      if(err){

        console.log(err);

        reply("error removing")

      }

      console.log('game deleted');

      return  reply('game deleted');

    });

  }

}
