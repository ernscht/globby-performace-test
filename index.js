const cpuprofiler = require('sync-cpuprofiler');
const sleep = require('system-sleep');
const niv = require('npm-install-version');
niv.install('globby@7.1.1');
niv.install('globby@8.0.1');

const globby_7 = niv.require('globby@7.1.1');
const globby_8 = niv.require('globby@8.0.1');

const globbySyncTest = require('./src/tasks/globby.sync');

const testObjects = [
	{ globby: globby_7, version: '7.1.1' },
	{ globby: globby_8, version: '8.0.1' },
];

// create cpu profile (for chrome devtools)
cpuprofiler();

// test
globbySyncTest(testObjects[0]);
sleep(500); // sleep 500 ms
globbySyncTest(testObjects[1]);