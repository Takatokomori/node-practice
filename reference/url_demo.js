const url = require('url');

const myURL = new URL("https://gambitheat.com/tag/1?status=256");

// serialize url
console.log(myURL.href);
console.log(myURL.toString());

// host name
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.pathname);

// search param
console.log(myURL.search);
console.log(myURL.searchParams);
myURL.searchParams.append('abc', 'wow21');
console.log(myURL.searchParams);

myURL.searchParams.forEach((value,name) =>{
    console.log(`${name}: ${value}`);
})
console.log(myURL.searchParams);
