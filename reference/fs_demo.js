const path = require('path');
const fs = require('fs');

// Create folder
// fs.mkdir(path.join(__dirname, 'test'), {}, (error) =>{
//     if(error){
//         throw error;
//     }
//     console.log('Folder Created...');
// })

// create file
fs.writeFile(
    path.join(__dirname, 'test', 'test.txt'),
    'Hello Node.', 
    (error) =>{
        if(error){
            throw error;
        }
    console.log('File Created...');

    // add something
    fs.appendFile(
        path.join(__dirname, 'test', 'test.txt'),
        'I enjoy Node.', 
        (error) =>{
            if(error){
                throw error;
            }
        console.log('File modified...');
        }
    )
    }
)

// Read file
fs.readFile(
    path.join(__dirname, 'test', 'test.txt'),
    'utf-8',
    (error, data) => {
        if (error){
            throw error;
        }
        console.log(data);
    }
)

// Rename file
fs.rename(
    path.join(__dirname, 'test', 'test.txt'),
    path.join(__dirname, 'test', 'testwww.txt'),
    (error) => {
        if (error){
            throw error;
        }
        console.log("Rename file");
    }
)