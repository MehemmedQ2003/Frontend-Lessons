// ! NPM - node package manager

// 1) File System Module - fs - read, write, delete, update files
const fs = require('fs');

// ? Read File
fs.readFile('./sample.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    // console.log(data.toString());
})


fs.readFile('./data.json', (err, data) => {
    if (err) {
        console.log(err);
    }
    data = JSON.parse(data.toString());
    for(let i = 0; i < data.length; i++) {
        // console.log(data[i].name)
    }
})

fs.writeFile('./newFile.txt', 'Hello World', (err) => {
    if (err) {
        // console.log(err);
    }
})


// OS Module - Get information about operating system

const os = require('os');
// !  Current directory
console.log(__dirname);
// ! Parent directory
console.log(os.platform())

// Create file with os