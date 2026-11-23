const { log } = require("console");
const fs = require("fs");
const path = require("path");

console.log("Start");

// const data = fs.readFileSync("hello.txt", "utf-8");
// console.log(data);

// // read file concept

fs.readFile("hello.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("hemanth data: ", data);
    }
})



// write file concept 
fs.writeFile("hello.txt", "Hello from earth", (err, data) =>{
    if (err) {
        console.log(err);
    } else {
        console.log("Himanshu class aa gaya hai!");
    }
})



// appending file sirf already exist file ke baad data add kr rha hai.
fs.appendFile("hello.txt", " earth is big", (err, data) => {
    if (err) console.log(err);
    console.log(" ab wo ghar wapas chala gaya hai or next class me aayega");
})

// how to delete file 
// fs.unlinkSync("hello.txt");
// fs.unlinkSync("Hemanth");

// fs.unlink('hello.txt', (err) => {
//     if (err) console.log(err);
//     console.log('hello.txt was deleted');
// })


// how to make directory 
// fs.mkdirSync("Hemanth");
// fs.mkdirSync("Hello");

