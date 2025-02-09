const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), 'yyyy-MM-dd HH:m m:ss')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, 'logs'))) {
      await fsPromise.mkdir(path.join(__dirname, 'logs'));
    }
    //testing
    await fsPromise.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);
  } catch (error) {
    console.error(`Error occured while logging: ${error.message}`);
  }
}

module.exports = logEvents;