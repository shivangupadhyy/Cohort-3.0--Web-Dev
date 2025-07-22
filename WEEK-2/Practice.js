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


let counter = 0;

function updateClock() {
    const now = new Date();

    //24-hour-format

    const hour24 = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    //12-hour-format
    const hours12 = ((now.getHours() + 11) % 12 + 1).toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM'

    console.log(`24-hour format  : ${hour24}:${minutes} :${seconds}`);
    console.log(`12-hour format: ${hours12}: ${minutes}: ${seconds}  ${ampm}`)
    

    setTimeout(updateClock, 1000);


};
updateClock()