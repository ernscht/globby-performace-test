'use strict';
const sleep = require('system-sleep');

function findFile(obj) {
	const file = 'y/y.json';
	const fileGlobs = ['one','two','three','four','five','six'].map((folder) => {
		return `src/types/${folder}/*/sub/${file}`;
	});
	obj.durations = obj.durations || [];

	const timer1 = new Date();
	obj.globby.sync(fileGlobs);
	const timer2 = new Date();
	const diff = timer2 - timer1;

	obj.durations.push(diff);

	process.stdout.write(`Test in ${diff} ms\r`);
}

const average = list => list.reduce((prev, curr) => prev + curr) / list.length;

function analyze(testObjects) {
	const runs = testObjects[0].durations.length;
	console.log('.-~-.-~-.-~.-~-.-~-.-~.-~-.-~-.-~.-~-.-~-.-~.-~-.-~-.-~.-~-.-~-.');
	console.log(`${runs} runs`);
	testObjects.forEach((obj) => {
		const min = Math.min(...obj.durations);
		const max = Math.max(...obj.durations);
		const av = Math.round(average(obj.durations));
		console.log(`Duration: ${min} - ${max} ms | average: ${av} ms (v: ${obj.version})`);
	});
	console.log('.-~-.-~-.-~.-~-.-~-.-~.-~-.-~-.-~.-~-.-~-.-~.-~-.-~-.-~.-~-.-~-.');
}

function run (testObjects, quantity = 10) {
	testObjects.forEach((obj, index) => {
		findFile(obj);
		sleep(500);
	});
	if (quantity > 1) {
		run(testObjects, --quantity);
	} else {
		analyze(testObjects);
	}
}

module.exports = {
	run,
};