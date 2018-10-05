require('./config');

const chalk = require('chalk');
    
const app = require('./app');
app.disable('etag');
app.listen(app.get('port'), () => {
	console.log('%s App is running at http://%s:%d in %s mode', chalk.green('RUNNING:'), app.get('host'), app.get('port'), app.get('env'));
	// Print all URLs.
	require('./util/document')(app);
});
