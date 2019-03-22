const cpuprofiler = require('sync-cpuprofiler');
const sleep = require('system-sleep');
const niv = require('npm-install-version');

niv.install('globby@7.1.1');
niv.install('globby@8.0.2');
niv.install('globby@9.1.0');

const globby_7 = niv.require('globby@7.1.1');
const globby_8 = niv.require('globby@8.0.2');
const globby_9 = niv.require('globby@9.1.0');

const globbySyncTest = require('./src/tasks/globby.sync');

const testObjects = [
	{ globby: globby_7, version: '7.1.1' },
	{ globby: globby_8, version: '8.0.2' },
	{ globby: globby_9, version: '9.1.0' },
];

// create cpu profile (for chrome devtools)
// cpuprofiler();

// test
console.log('.-~-.-~-.-~.-~-.-~-.-~.-~-.-~-.-~.-~-.-~-.-~.-~-.-~-.-~.-~-.-~-.');
globbySyncTest(testObjects[0]);
sleep(300);
globbySyncTest(testObjects[1]);
sleep(300);
globbySyncTest(testObjects[2]);
console.log('·-~-·-~-·-~·-~-·-~-·-~·-~-·-~-·-~·-~-·-~-·-~·-~-·-~-·-~·-~-·-~-·');