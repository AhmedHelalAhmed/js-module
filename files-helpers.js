const fs = require('fs');
const deleteFile = (path) => {
	fs.unlinkSync(path);
};
exports.clearLogs = () => {
	deleteFile('./logs.txt');
};
exports.deleteFile = deleteFile;