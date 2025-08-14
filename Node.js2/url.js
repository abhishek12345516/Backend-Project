const url = require('url');
const link = 'https://localhost:5000/products/index.html?name=abhishek&age=25';

const myUrl = url.parse(link,true);

console.log(`Protocol:, ${myUrl.protocol}`); // outputs: 'https:'
console.log(`Host:, ${myUrl.host}`); // outputs: 'localhost:5000'
console.log(`Port:, ${myUrl.port}`); // outputs: '5000'
console.log(`Path:, ${myUrl.path}`); // outputs: '/products/index.html'
console.log(`PathName:, ${myUrl.pathname}`); // outputs: '/products/index.html' 
console.log(`Query:, ${myUrl.search}`); // outputs: 'name=abhishek&age=25'
const query = myUrl.query; // outputs: { name: 'abhishek', age: '25' }
console.log.apply(`Name:, ${query.name}`);
console.log.apply(`Age:, ${query.age}`);