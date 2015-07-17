var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Image Model
 * =============
 */

var ImageFolder = new keystone.List('ImageFolder', {
	autokey: { from: 'name', path: 'key', unique: true }
});

ImageFolder.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	//heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages }
});

ImageFolder.register();
