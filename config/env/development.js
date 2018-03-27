module.exports = {
  //development configuration options
  db:'mongodb://localhost/mean-book',
  sessionSecret:'developmentSessionSecret',
  facebook:{
    clientID : '186135698788386',
    clientSecret : 'c9ef8e08b9125ebd2ce139f67ef50622',
    callbackURL :'http://localhost:3000/oauth/facebook/callback'
  },
  google:	{
				clientID:	'465560506032-ia1pgqj9jctvdl0j33bgdh70ur4rrd7c.apps.googleusercontent.com',
				clientSecret:	'fvhXIyyQ5_fiJJnKfqNKrwdE',
        callbackURL:	'http://localhost:3000/oauth/google/callback'
		}
};
