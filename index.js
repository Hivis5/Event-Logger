const logEvents = require('./logEvents');

const EventEmitter = require('events')

class NewEventEmitter extends EventEmitter { }

// initialize Object 

const newEmitter = new NewEventEmitter();

// add listeners for logEvents
newEmitter.on('logEvents', (message) => logEvents(message));

setTimeout(() => {
  newEmitter.emit('logEvents', 'This is an event from the EventEmitter');
}, 2000);