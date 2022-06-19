const {format} = require('date-fns');
const {v4: uuid} = require('uuid') //uuid is used to create unique Id's for different entries. Example: for log files.

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

console.log(format(new Date(), 'yyy\tMM\tdd'));

const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date, 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`
    console.log(logItem);
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
          await  fsPromises.mkdir(path.join(__dirname, 'logs'))
        }
        // testng
        await fsPromises.appendFile(path.join(__dirname, 'logs', logName), logItem)
    } catch (err) {
        console.log(err);
    }
}

module.exports = logEvents;

console.log(uuid());
