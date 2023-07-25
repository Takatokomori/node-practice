const EventEmitter = require('events');

class MyEmitter extends EventEmitter{

}

const myEmitter = new MyEmitter();

myEmitter.on('event', ()=>{
    console.log("Event occured!!");
});

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');