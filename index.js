// const cpuprofiler = require('sync-cpuprofiler');
const sleep = require('system-sleep');
const niv = require('npm-install-version');

niv.install('globby@7.1.1');
niv.install('globby@8.0.2');
niv.install('globby@9.2.0');
niv.install('globby@10.0.1');
niv.install('globby@11.0.0');

const globby_7 = niv.require('globby@7.1.1');
const globby_8 = niv.require('globby@8.0.2');
const globby_9 = niv.require('globby@9.2.0');
const globby_10 = niv.require('globby@10.0.1');
const globby_11 = niv.require('globby@11.0.0');

const globbySyncTest = require('./src/tasks/globby.sync');

const testObjects = [
	{ globby: globby_7, version: '7.1.1' },
	{ globby: globby_8, version: '8.0.2' },
	{ globby: globby_9, version: '9.2.0' },
	{ globby: globby_10, version: '10.0.1' },
	{ globby: globby_11, version: '11.0.0' },
];

// create cpu profile (for chrome devtools)
// cpuprofiler();

// test
console.log('.-~-.-~-.-~.-~-.-~-.-~.-~-.-~-.-~.-~-.-~-.-~.-~-.-~-.-~.-~-.-~-.');
globbySyncTest(testObjects[0]);
sleep(500);
globbySyncTest(testObjects[1]);
sleep(500);
globbySyncTest(testObjects[2]);
sleep(500);
globbySyncTest(testObjects[3]);
sleep(500);
globbySyncTest(testObjects[4]);
console.log('·-~-·-~-·-~·-~-·-~-·-~·-~-·-~-·-~·-~-·-~-·-~·-~-·-~-·-~·-~-·-~-·');