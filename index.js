// const cpuprofiler = require('sync-cpuprofiler');
const niv = require('npm-install-version');

niv.install('globby@7.1.1');
niv.install('globby@8.0.2');
niv.install('globby@9.2.0');
niv.install('globby@10.0.2');
niv.install('globby@11.1.0');

const testObjects = [
	{ globby: niv.require('globby@7.1.1'), version: '7.1.1' },
	{ globby: niv.require('globby@8.0.2'), version: '8.0.2' },
	{ globby: niv.require('globby@9.2.0'), version: '9.2.0' },
	{ globby: niv.require('globby@10.0.2'), version: '10.0.2' },
	{ globby: niv.require('globby@11.1.0'), version: '11.1.0' },
];

const globbySync = require('./src/tasks/globby.sync');

// create cpu profile (for chrome devtools)
// cpuprofiler();

globbySync.run(testObjects, 100);
