// const Person = require('./person');
// const Logger = require('./logger');

// const person1 = new Person('Josh, Ming', 44);
// const person2 = new Person('Bobby Gu', 33);

// console.log(person1);
// console.log(person2);
// person2.greeting();

// const logger = new Logger();
// logger.on('message', (data) => {
//     console.log(`Called Listener`, data);
// });

// logger.log('Hello World');

const http = require('http');
const path = require('path');
const fs = require('fs');
const users = require('./resources/data/users.json');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'public', 'index.html'),
        (error, content)=>{
            if(error){
                throw error;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        })
    }
    else if(req.url === '/about'){
        fs.readFile(path.join(__dirname, 'public', 'about.html'),
        (error, content)=>{
            if(error){
                throw error;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        })
    }
    else if(req.url === '/api/users'){
        res.writeHead(200, {"Content-Type": 'application/json'});
        res.end(JSON.stringify(users));
    }
    console.log(req.url);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});