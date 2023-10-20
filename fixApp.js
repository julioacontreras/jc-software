import { rename, readFileSync, writeFileSync } from 'fs';

const currPath = './public/_app';
const newPath = './public/app';

rename(currPath, newPath, function (err) {
	if (err) {
		console.log(err);
	}
});

function changeAppName(path) {
	try {
		const indexData = readFileSync(path, 'utf8');
		let result = indexData;
		while (result.includes('_app')) {
			result = result.replace('_app', 'app');
		}
		writeFileSync(path, result);
	} catch (err) {
		console.error(err);
	}
}

changeAppName('./public/index.html');
changeAppName('./public/services/index.html');
changeAppName('./public/skills/index.html');
