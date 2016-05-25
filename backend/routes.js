var IngredientsController = require('./controllers/ingredientsController');
var ProductsController = require('./controllers/productsController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');



exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, games')}}},

	{method: 'GET', path: '/v1/ingredients', config: IngredientsController.getingredients},

  	{method: 'POST', path: '/v1/ingredient', config: IngredientsController.createingredient},

	{method: 'GET', path: '/v1/ingredient/{nombre}', config: IngredientsController.getingredient},

	{method: 'DELETE', path: '/v1/ingredientd/{nombre}', config: IngredientsController.deleteingredient},

	{method: 'PUT', path: '/v1/ingredientu/{nombre}', config: IngredientsController.updateingredient},
	
	{method: 'GET', path: '/v1/products', config: ProductsController.getproducts},

  	{method: 'POST', path: '/v1/product', config: ProductsController.createproduct},

	{method: 'GET', path: '/v1/product/{nombre}', config: ProductsController.getproduct},

	{method: 'DELETE', path: '/v1/product/{nombre}', config: ProductsController.deleteproduct},

	{method: 'PUT', path: '/v1/productu/{nombre}', config: ProductsController.updateproduct},
	
	{method: 'POST', path: '/v1/register', config:usersController.createUser},

	{method: 'POST', path: '/v1/login', config: authController.login},

	{method: 'GET', path: '/v1/logout', config: authController.logout}




];
