const	sectors	=	require('../../app/controllers/sector.server.controller');
module.exports	=	function(app)	{
		app.route('/sectors').post(sectors.create).get(sectors.list);
};
