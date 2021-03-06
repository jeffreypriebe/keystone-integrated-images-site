// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'keystone-images-site',
	'brand': 'keystone-images-site',
	
	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'hbs',
	
	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs'
	}).engine,
	
	's3 config': { 
		bucket: 'jp-test-one', 
	},
	
	'wysiwyg cloudinary images': false,
	'cloudinary folders': true,
	'cloudinary folders use item name': true,
	'wysiwyg additional buttons': 'cloudinarybrowserfiles cloudinarybrowserimages',
	'wysiwyg additional plugins': 'cloudinarybrowserfiles, cloudinarybrowserimages',
	'wysiwyg additional options': {
		'cloudinarybrowserimages': {
			'modelName': 'image-folders', //pluralized, lower-case, it's the list.plural property value
			'fieldName': 'images'
		},
		'cloudinarybrowserfiles': {
			'modelName': 'file-folders',
			'fieldName': 'files'
		}
	},
	
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': '2PWxRJde|D#L=kco%0v1iwJxDkt"BT@2:W%dTxu~TX~iK&z1D]TwpWF9]UK[XW?('

});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

// Load your project's Routes

keystone.set('routes', require('./routes'));

// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'posts': ['posts'],//, 'post-categories'],
	'media': ['image-folders', 'file-folders'],
	'users': 'users'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
