// const cpuprofiler = require('sync-cpuprofiler');

const testObjects = [
	{ globby: require('globby-7'), version: '7.1.1' },
	{ globby: require('globby-8'), version: '8.0.2' },
	{ globby: require('globby-9'), version: '9.2.0' },
	{ globby: require('globby-10'), version: '10.0.2' },
	{ globby: require('globby-11'), version: '11.1.0' },
];

const globbySync = require('./src/tasks/globby.sync');

// create cpu profile (for chrome devtools)
// cpuprofiler();

globbySync.run(testObjects, 100);
