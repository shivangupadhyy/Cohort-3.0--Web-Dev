//tyeScript
///parse it to number
// function sum(a, b){
//     return a+b
// }
// function sum(a, b){
//     return parseInt(a)+ parseInt(b);
// }

// let ans = sum("9", 1)
// console.log(ans)

// function sum1(n){
//     let ans = 0;
//     for(let i =0; i<=n; i++){
//         ans = ans+i;
//     }
//     return ans
// }

// const ans = sum1(5)
// console.log(ans) 

// const fs = require("fs");
// const contents = fs.readFileSync("a.txt", "utf-8");//bytes, hex
// console.log(contents)

// const content1 = fs.readFileSync("b.txt", "utf-8");
// console.log(content1)

// const fs = require("fs");

// function print(err, data){
//     console.log(data);
// }

// fs.readFile("a.txt", "utf-8", print);

// fs.readFile("b.txt", "utf-8", print);

// console.log("done!")

// function timeout(){
//     console.log("Click the button!");
// }

// console.log("Hi!");

// setTimeout(timeout, 1000);

// console.log("Welcome to loupe");

// let c = 0
// for(let i = 0; i<1000000; i++){
//     c = c + 1;
// }

// console.log("Expensive opertion done")

// Promisified setTimeout
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Usage:
wait(1000).then(() => console.log("Waited 1 second"));

// Promisified fetch (Node.js 18+ has global fetch)
async function fetchPromisified(url, options) {
    const response = await fetch(url, options);
    return response.json(); // or response.text(), etc.
}

// Usage:
fetchPromisified('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data));

// Promisified fs.readFile
const fs = require('fs');
const util = require('util');
const readFilePromisified = util.promisify(fs.readFile);

// Usage:
readFilePromisified('a.txt', 'utf-8')
    .then(data => console.log(data))
    .catch(err => console.error(err));

