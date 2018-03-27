const	autos	=	require('../../app/controllers/autofreq.server.controller');
module.exports	=	function(app)	{
		app.route('/autos').post(autos.create).get(autos.list);
		app.route('/freq').get(autos.freq);
};
