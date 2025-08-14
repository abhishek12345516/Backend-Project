const fs = require('fs');

function deleteMyFile(fileName) {
    fs.unlink(fileName, (err) => {
    if(err){
        console.log('Error deleting file:', err);
        return;

    }
    console.log('File deleted successfully!');
})
}

function addDataToexistingFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => {
    if(err){
        console.log('Error adding data to file:', err);
        return;
}
console.log('Data added successfully!');

    })

}
function createMyFile(fileName, data) {
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
        console.log("Data Written successfully!");
})
}

function readMyFile(fileName) {
    fs.readFile(fileName, (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log(data.toString());
    })
}

//createMyFile('./file/abhishek.txt', 'my name is abhishek prajapati, I am Instructor here');
//addDataToexistingFile('./file/abhishek.txt', 'I am Having 12+ years of experience in Node.js');
//readMyFile('./file/abhishek.txt');
deleteMyFile('./file/abhishek.txt');