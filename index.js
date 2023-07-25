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
    // if(req.url === '/api/users'){
    //     res.writeHead(200, {"Content-Type": 'application/json'});
    //     res.end(JSON.stringify(users));
    // }
    
    // Build file Path
    let filePath = path.join(
        __dirname, 'public',
        req.url === '/' ? 'index.html' : req.url
    );
    // Extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    fs.readFile(filePath, (err, content)=>{
        if(err){
            if(err.code == 'ENOENT'){
                // Page Not Found
                fs.readFile(path.join(__dirname, 'public', '404.html'),
                (err, content)=>{
                    res.writeHead(200, {'Content-Type':'text/html'});
                    res.end(content, 'utf-8');
                })
            }
            else{
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}.`);
            }
        }
        else{
            // Success
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf-8');
        }
    })
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});