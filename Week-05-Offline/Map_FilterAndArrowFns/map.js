/**
 * map function is used to create a new array by calling a function on each element of the input array.
 * 
 * 
 * Problem Statement:
 *      - Create an array of numbers
 *      - Multiply each element by 2 using map function
 *      - Print the new array
 * 
 * Input: [1, 2, 3, 4, 5]
 * Output: [2, 4, 6, 8, 10]
 */

let arr = [1, 2, 3, 4, 5];

// Multiply each element by 2 using for loop and normal function and store it in a new array
// create an empty array
// let newArr = [];


// for(let i=0; i<arr.length; i++){
//     newArr.push(arr[i]*2)
// }
// console.log(newArr)


// Multiply each element by 2 using map function and normal function and store it in a new array

let newArr = arr.map(function(value){
    return value*2
})
console.log(newArr)