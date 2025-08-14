const path = require('path');

const mypath = __dirname+'\\path.js';

console.log(mypath); // outputs: C:\Users\dell\Desktop\Node.js2\path.js
console.log("File Name: ",path.basename(mypath)); // outputs: path.js
console.log("Directory Name: ",path.dirname(mypath)); // outputs: C:\Users\dell\Desktop\Node.js2
console.log("Extension: ",path.extname(mypath)); // outputs:.js
console.log("is Absolute: ",path.isAbsolute(mypath)); // outputs: true