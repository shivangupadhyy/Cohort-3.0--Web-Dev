// # JavaScript Asynchronous Patterns & File Operations – Notes

// ---

// ## 1. setTimeout and setInterval

// - **setTimeout**: Schedules a function to run once after a delay.
//   ```javascript
//   setTimeout(() => { console.log("hi") }, 1000); // Runs after 1 second
//   ```

// - **setInterval**: Schedules a function to run repeatedly at fixed intervals.
//   ```javascript
//   setInterval(() => { console.log("tick") }, 1000); // Runs every second
//   ```

// - **Chaining setTimeout for Sequential Delays**:
//   Useful for running tasks in sequence with different delays.
//   ```javascript
//   setTimeout(() => {
//     console.log("hi");
//     setTimeout(() => {
//       console.log("hello");
//       setTimeout(() => {
//         console.log("Hello there");
//       }, 5000);
//     }, 3000);
//   }, 1000);
//   ```

// ---

// ## 2. Promisifying setTimeout

// - **Promisified setTimeout**: Allows use with `.then()` or `await` for cleaner async code.
//   ```javascript
//   function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }

//   setTimeoutPromisified(3000).then(() => console.log("3 seconds have passed"));
//   ```

// ---

// ## 3. File Operations with fs

// - **Reading a File (Callback Style)**:
//   ```javascript
//   const fs = require("fs");
//   fs.readFile("a.txt", "utf-8", (err, data) => {
//     if (err) { /* handle error */ }
//     else { console.log(data); }
//   });
//   ```

// - **Promisifying fs.readFile**:
//   ```javascript
//   function readFilePromisified(filePath) {
//     return new Promise((resolve, reject) => {
//       fs.readFile(filePath, "utf-8", (err, data) => {
//         if (err) reject(err);
//         else resolve(data);
//       });
//     });
//   }

//   readFilePromisified("a.txt")
//     .then(data => console.log(data))
//     .catch(err => console.error(err));
//   ```

// - **Writing to a File (Async/Await with fs.promises)**:
//   ```javascript
//   const fs = require("fs").promises;
//   async function writeToFile(filename, content) {
//     try {
//       await fs.writeFile(filename, content, 'utf-8');
//       console.log("File has been written Successfully");
//     } catch (error) {
//       console.log("Error Writing to file: ", error);
//     }
//   }
//   ```

// ---

// ## 4. Cleaning a File (Trimming Whitespace)

// - **Callback Style**:
//   ```javascript
//   function cleanFile(filePath, cb) {
//     fs.readFile(filePath, "utf-8", (err, data) => {
//       data = data.trim();
//       fs.writeFile(filePath, data, cb);
//     });
//   }
//   ```

// - **Promise Style**:
//   ```javascript
//   function cleanFile(filePath) {
//     return new Promise(resolve => {
//       fs.readFile(filePath, "utf-8", (err, data) => {
//         data = data.trim();
//         fs.writeFile(filePath, data, resolve);
//       });
//     });
//   }
//   ```

// ---

// ## 5. Real-Time Counters and Clocks

// - **Counter with setInterval**:
//   ```javascript
//   let counter = 0;
//   setInterval(() => {
//     counter++;
//     console.log(counter);
//   }, 1000);
//   ```

// - **Counter with Recursive setTimeout**:
//   ```javascript
//   let counter = 0;
//   function updateCounter() {
//     counter++;
//     console.log(counter);
//     setTimeout(updateCounter, 1000);
//   }
//   updateCounter();
//   ```

// - **Digital Clock (24h & 12h format)**:
//   ```javascript
//   function updateClock() {
//     const now = new Date();
//     // Format hours, minutes, seconds
//     // Print both 24-hour and 12-hour formats
//     setTimeout(updateClock, 1000);
//   }
//   updateClock();
//   ```

// ---

// ## 6. Error Handling

// - Always check for errors when reading/writing files.
// - Use try/catch with async/await for better error management.

// ---

// ## 7. Interview Tips

// - Understand callback vs promise vs async/await patterns.
// - Be able to convert callback-based APIs to promises.
// - Know how to handle file operations and errors in Node.js.
// - Practice writing timers and real-time updating functions.
// - Be ready to explain event loop, call stack, and async flow in JavaScript.

// ---





// setTimeout(function(){
//     console.log("hi")
//     setTimeout(function (){
//         console.log("hello")
//         setTimeout(function (){
//             console.log("Hello there")
//         },5000)
//     },3000)
// },1000)


// function setTimeOutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

// function wait3s(){
//     console.log("3 seconds have passed")
// }

// setTimeOutPromisified(3000).then(wait3s)


// function setTimeOutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

// function wait1s(){
//     console.log("1 seconds have passed")
// }

// function wait3s(){
//     console.log("3 Seconds have passed")
// }

// setTimeOutPromisified(1000).then(wait1s)
// setTimeOutPromisified(3000).then(wait3s)



// function setTimeOutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

// setTimeOutPromisified(1000).then(function(){
//     console.log("hi")
//     return setTimeOutPromisified(3000)
// }).then(function(){
//     console.log("hello")
//     return setTimeOutPromisified(5000)
// }).then(function(){
//     console.log("hello there")
// })

// const fs = require("fs")
// function cleanFile(filePath, cb){
//     fs.readFile(filePath, "utf-8", function(err, data){
//         data = data.trim();
//         console.log(data)
//         fs.writeFile(filePath, data, function(){
//             cb();
//         })
//     })
// }

// function onDone(){
//     console.log("file has been cleaned")
// }
// cleanFile("a.txt", onDone)

// const fs = require("fs")

// function cleanFile(filePath, cb){
//     return new Promise (function(resolve){
//         fs.readFile(filePath, "utf-8", function(err, data){
//             data = data.trim()
//             fs.writeFile(filePath, data , function(){
//                 resolve();
//             })
//         })
//     })
// }

// async function main() {
//     await cleanFile("a.txt")
//     console.log("Done Cleaning file")
// }
// main();


// const fs = require("fs")
// function afterDone(err, data){
//     if(err){
//         console.log("Error while reading the file")
//     }else{
//         console.log(data)
//     }
// }

// fs.readFile("a.txt", "utf-8", afterDone)


// const fs = require("fs")
// function readFilePromosifies(filePath){
//     return new Promise(function (resolve, reject){
//         fs.readFile(filePath, "utf-8", function(err,data){
//             if(err){
//                reject("Error while reading the file")
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// function onData(data){
//     console.log(data)
// }

// function onError(err){
//     console.log("Error "+ err)
// }

// readFilePromosifies("a.txt").then(onData).catch(onError)

// let counter = 0;

// function updateCounter(){
//     counter++;
//     console.log(counter)
// }
// setInterval(updateCounter, 1000)

// let counter  = 0;
// function updateCounter(){
//     counter++;
//     console.log(counter)

//     setTimeout(updateCounter, 1000)
// }


// updateCounter()

// const fs = require("fs")
// fs.readFile("a.txt",'utf-8',  function(err, data){
//     if(err){
//         if(err.code === 'ENOENT'){
//             console.error('Error: file not found!');
//         } else{
//             console.error('Error reading file :', err)
//         }

//         return 
//     }

//     console.log('File Content: ', data)
// })

// const fs = require("fs").promises;

// async function writeToFile(filename, content) {
//     try{
//         await fs.writeFile(filename, content, 'utf-8');
//         console.log("File has been written Successfully")
//     } catch(error){
//         console.log("Error Writing to file: ", error)
//     }
// }

// writeToFile('a.txt', "hello world")


// let counter = 0;

// function updateClock() {
//     const now = new Date();

//     //24-hour-format

//     const hour24 = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');

//     //12-hour-format
//     const hours12 = ((now.getHours() + 11) % 12 + 1).toString().padStart(2, '0');
//     const ampm = now.getHours() >= 12 ? 'PM' : 'AM'

//     console.log(`24-hour format  : ${hour24}:${minutes} :${seconds}`);
//     console.log(`12-hour format: ${hours12}: ${minutes}: ${seconds}  ${ampm}`)
    

//     setTimeout(updateClock, 1000);


// };
// updateClock()


// console.log("-----top of the file------")

// function readTheFile(resolve){
//     console.log("readTheFile Called");
//     setTimeout(function(){
//         console.log("callback based settimeout completed")
//         resolve()
//     },3000)
// }

// function setTimeOutPromisified(filename){
//     console.log("setTimeoutPromisified Called");

//     return new Promise(readTheFile)
// }

// setTimeOutPromisified();

// function callback(){
//     console.log("timer is done")
// }

// setTimeOutPromisified().then(callback)

// console.log("------end of the file-----")



//hard problems

// function wait(n){
//     let p = new Promise((resolve) =>{
//         setTimeout(()=>{
//             resolve();

//             console.log("1000")
//         }, n *1000)
//     })

//     return p;
// }

// wait (5)

//Q2 

// function sleep(ms){
//     return new Promise((resolve) =>{
//         let startTime = new Date().getTime();
//         while(new Date().getTime() < startTime + ms)
//             resolve();
//     })
// }

// sleep(5000)

// function wait1(t){
//     return new Promise((resolve)=>{
//         setTimeout(resolve,t*1000)
//     })
// }

// function wait2(t){
//     return new Promise((resolve)=>{
//         setTimeout(resolve, t*1000)
//     })
// }
// function wait3(t){
//     return new Promise((resolve)=>{

//         setTimeout(resolve, t*1000)
//     })
// }

// async function calculateTime(t1, t2, t3) {
//     const startTime = Date.now()

//     await Promise.all([wait1(t1), wait2(t2), wait3(t3)])

//     const totalTime = Date.now() - startTime;
//     return totalTime;
// }


// calculateTime(1, 3, 10)


// class Promise2{
//     constructor(fn){
//         function afterDone(){
//             this.resolve();
//         }
//         fn(afterDone)
//     }
//     then(callBack){
//         this.resolve = callBack;
//     }
// }

// the real opeeration that we want to prmisfy

function doAsyncOp(resolve){
    setTimeout(resolve, 3000) // olf , callback based function
}

const  p = new Promise(doAsyncOp)

function callBack(){
    console.log("3 seconds passed")
}


p.then(callBack)