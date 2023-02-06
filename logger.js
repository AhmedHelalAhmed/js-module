const fs = require('fs');
module.exports = class {
	logToFile(message,path) {
		fs.writeFile(path, message, 'utf-8', error => {
			if (error) {
				console.log('There is error to write to the file');
			}
			console.log('Log has been written!');
		});
	}
	LogToConsole(message) {
		console.log(message);
	}
};