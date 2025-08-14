const fs = require('fs');

console.log("processing data.json file...");
fs.writeFileSync('./files/temp.txt',"Hello All...");
console.log("Data written to temp.txt successfully.");

let data = fs.readFileSync('./files/data.json');
console.log(data.toString());

fs.appendFileSync('./files/temp.txt',"This is appended data., Hello form Abhishek Prajapati");
console.log("Data appended to temp.txt successfully.");

data = fs.readFileSync('./files/temp.txt');
console.log(data.toString());
console.log("Finished processing data.json file.");