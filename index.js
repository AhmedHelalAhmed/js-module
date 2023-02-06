const Logger = require('./logger');
const File_LOG_PATH = './logs.txt';
const logger = new Logger();

logger.LogToConsole('Start the program');
logger.logToFile('Hello from file', File_LOG_PATH);

// clean up the file
const { clearLogs } = require('./files-helpers');// this will return object actually we can destruct it like that
clearLogs();

logger.LogToConsole('end the program');