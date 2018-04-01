const globby = require('globby');

(function globbySync() {
	const file = 'y/y.json';
	const fileGlobs = ['one','two','three','four','five'].map((folder) => {
		return `src/types/${folder}/*/sub/${file}`;
    });

	const timer1 = new Date();
	globby.sync(fileGlobs).forEach((filePath) => {
		console.log(`Success: File ${file} found in ${filePath}`);
	});
	const timer2 = new Date();
	const diff = timer2 - timer1;
	console.log(`[Time] for matching: ${diff} ms`);
}());