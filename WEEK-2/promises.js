// class Rectangle{
//     constructor(widht, height, color){
//         this.width = widht;
//         this.height = height;
//         this.color = color;
//     }
//     area(){
//         const area = this.width * this.height;
//         return area
//         }

//         paint(){
//             console.log(`painting with color ${this.color}`)
//         }
// }

// const react = new Rectangle(2,4, "red")
// const area = react.area();
// react.paint();
// console.log(area)

// const date = new Date();
// console.log(date.toISOString())

// const map = new Map();
// map.set('name', "Shivang")
// map.set('name', "Ayushi")
// console.log(map.get('name'))

// function setTimeOutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));

//     // it is returing the object of the promise class

// }

// function callBack() {
//     console.log("3 Second have passed");
// }


// setTimeOutPromisified(3000).then(callBack)

// function promiseCallback(resolve){
//     setTimeout(resolve, 3000)
// }
// function main(){
//     console.log("main is called")
// }

// promiseCallback(main);

// function wait3s(resolve){
//     setTimeout(resolve, 3000)
// }

// function setTimeOutPromisified(){
//     return new Promise(wait3s);
// }

// function main(){
//     console.log("main is called")
// }

// setTimeOutPromisified().then(main);

// function main(){
//     console.log("hello world")
// }
// let p = new Promise(main);
// console.log(p)

// callback hell , reject, and async and await

// function setTimeOutPromisified(duration){
//     return new Promise((resolve)=>{
//         setTimeout(resolve, duration)
//     })
// }


// function callBack(){
//     console.log("3 seconds has passed")
// }

// setTimeOutPromisified(3000).then(callBack)

// function setTimeOutPromisified(ms){
//     return new Promise(resolve =>setTimeout(resolve, ms))
// }

// async function solve(){
//     await setTimeOutPromisified(1000)
//     console.log("hi");
//     await setTimeOutPromisified(3000)
//     console.log("hello")
//     await setTimeOutPromisified(5000)
//     console.log("hello there")
// }

// solve()

// console.log("after solve function")
const fs = require("fs")
function readFileAsync(){
    return new Promise(function(resolve, reject) {
        fs.readFile("a.txt", "utf-8", function(err, data){
            if(err){
                console.log("Error occured ")
            }else{
                resolve(data)
            }
        })
    })
}

readFileAsync()
.then(function(x){
    console.log("files has been found " + x)
}).catch(function(e){
    console.log(e)
})