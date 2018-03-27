const	Sector	=	require('mongoose').model('Sector');

exports.create	=	function(req,	res,	next)	{
		const	sector	=	new	Sector(req.body);
		sector.save((err)	=>	{
				if	(err)	{
          console.log(err);
						return	next(err);
				}	else	{
						res.status(200).json(sector);
				}
		});
};

exports.list	=	function(req,	res,	next)	{
		Sector.find({},	(err,	Sector)	=>	{
				if	(err)	{
						return	next(err);
				}	else	{
						res.status(200).json(Sector);
				}
		});
};
