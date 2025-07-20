// let a, b;
// function sum(a, b) {
//     const c = a + b;
//     console.log(c)
// }
// sum(9, 1);


// let age = 19
// function canVote() {
//     if (age > 18) {
//         return true
//     }
//     else {
//         return true
//     }
// }
// let ans  = canVote();
// console.log(ans)

// let users = ["shivang", "Ayushi", "prabhat", "ansh"];

// for(let i = 0; i<4; i++){
//     console.log(users[i])
// }

// function greet(user){
//     console.log(`hi ${user.name} your age is ${user.age}`)
// }

// let user = {
//     name: "Shivang",
//     age: 19,
// }

// greet(user);

//  let arr = ["harkirat", 21, {
//     name : "harkirat",
//     age: 21,
//     citites: ["delhi", "chandigarh", "bangalore",{
//         country: "malaysia",
//         city: "kuala lumpur"
//     }]
//  }];

//  console.log(arr[2].citites[3].city)

//create a function that takes an array of object as input, and returns the user whose age > 18 and are male

// function getAdultMales(arr){
//     //initialise a new array, push to  new array

//     let arr2 = [];
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i].age > 18 && arr[i].gender === "male"){
//             arr2.push(arr[i]);
//         }
//     }
//     return arr2;
//     //you can use the filter fucntion inside an array, map, reduce
// }

function solve(arr){
    let arr2 = [];
    for(let i =0; i>18; i++){
        if(arr[i].age >18 && arr[i].gender === "male"){
            arr2.push(arr[i])
        }
    }
    return arr2;
}




const user = [{
    name: "harkirat",
    age: 21,
    gender : "male"
},{
    name : "priya",
    age: 21,
    gender: "female"
},{
    name: "ramen",
    age: 20,
    gender: "male"
}]

console.log(getAdultMales(user));
