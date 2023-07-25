const EventEmitter = require('events');

class MyEmitter extends EventEmitter{
    log(msg){
        this.emit('message', `Event fired: ${msg}`);
    }
}

const myEmitter = new MyEmitter();

myEmitter.on('event', ()=>{
    console.log("Event occured!!");
});

myEmitter.on('message', (data)=>{
    console.log('Event:', data);
})

myEmitter.emit('event');
myEmitter.log("Bomb");
myEmitter.log("Blaster");