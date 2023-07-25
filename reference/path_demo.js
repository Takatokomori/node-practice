const path = require('path');

// Base Name
console.log(path.basename(__filename));
// dir name
console.log(path.dirname(__filename));
// File extension
console.log(path.extname(__filename));
// a lot info
console.log(path.parse(__filename));
// base name
console.log(path.parse(__filename).base);

console.log(path.join(__dirname, '__filename', 'create.html'));