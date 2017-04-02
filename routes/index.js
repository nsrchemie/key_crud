var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = (app) => {
	// Views
	app.get('/', routes.views.index);
	app.get('/tickets', (req,res) => {
		res.send('show tickets here');
		});
	app.get('/tickets/:ticketslug', (req,res) => {
		res.send('show ticket with slug : ' +
		req.params.ticketslug);
		});
};
