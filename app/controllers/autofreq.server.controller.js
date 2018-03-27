const	Auto	=	require('mongoose').model('Auto');
const kNN = require("k.n.n");

exports.create	=	function(req,	res,	next)	{
		const	auto	=	new	Auto(req.body);
		auto.save((err)	=>	{
				if	(err)	{
          console.log(err);
						return	next(err);
				}	else	{
						res.status(200).json(auto);
				}
		});
};

exports.list	=	function(req,	res,	next)	{
		Auto.find({},	(err,	Auto)	=>	{
				if	(err)	{
						return	next(err);
				}	else	{
						res.status(200).json(Auto);
				}
		});
};

exports.freq = function(req,res,next	){

	var sector=[1,2,3,4,5,6,7,8,9,10];
	var data = [ new kNN.Node({paramA: 1, paramB:1 , type: 'hasdm7@yahoo.com'}), new kNN.Node({paramA: 2, paramB: 2, type: 'hasdm7@yahoo.com'}), new kNN.Node({paramA: 3, paramB: 3, type: 'ahdah@gmail.com'}), new kNN.Node({paramA: 4, paramB: 4, type: 'ahdah@gmail.com'}), new kNN.Node({paramA: 5, paramB: 5, type: 'nagpalm7@gmail.com'}), new kNN.Node({paramA: 6, paramB: 6, type: 'nagpalm7@gmail.com'}) ];
	var autolist = [];
	var example = new kNN(data);
	for (var i = 0; i < sector.length; i++) {
		var results = example.launch(3, new kNN.Node({paramA:sector[i], paramB:10, type:false}));

		const	auto	=	new	Auto({"autoid":results.type,"sector":sector[i]});
		auto.save((err)	=>	{
		    if	(err)	{
		      console.log(err);
		        return	next(err);
		    }	else	{
						console.log("Added another value to list");
		        autolist.push(auto);
		    }
		});
	}
	res.status(200).json(autolist);
}
