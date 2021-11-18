const fs = require('fs');
const argv = process.argv.slice(2);

if (argv.length) {
	fs.readdir(argv[0], (err, files) => {
		if (err) {
			return (console.log(err));
		}
		let path = argv[0];
		let name = path.split('/').pop();
		let stream = fs.createWriteStream(`${path}/photos.js`);
		stream.once('open', (fd) => {
			stream.write(`const path = \'/${path}\/';\n\nconst ${name} = [\n`);
			files.forEach(file => {
				if (file.split('.').pop() === 'jpg') {
					stream.write(`	{src: path + \'${file}\'},\n`);
				}
			});
			stream.write(`];\n\nexport default ${name};`);
			files.forEach(file => {
			});
		});
	});
}
