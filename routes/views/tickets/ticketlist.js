var keystone = require('keystone');

exports = module.exports = (req,res) => {
	var view = new keystone.View(req,res);
	var locals = res.locals;

	locals.section = 'tickets';
	locals.data = {
		tickets: [],
		};

	view.on('init', (next) => {
		var q = keystone.list('Ticket').model.find();

		q.exec((err,results) => {
			locals.data.tickets = results;
			next(err);
		});
	});

	view.render('tickets/ticketlist');
};
