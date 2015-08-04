var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * File Folder Model
 * =============
 */

var FileFolder = new keystone.List('FileFolder', {
	autokey: { from: 'name', path: 'key', unique: true }
});

FileFolder.add({
	name: { type: String, required: true },
	files: {
		type: Types.S3Files,
		path: function(item, path) { return item.get('name') + '/'; },
		filename: function(item, filename, original) { return original; }
	}
});

FileFolder.register();
