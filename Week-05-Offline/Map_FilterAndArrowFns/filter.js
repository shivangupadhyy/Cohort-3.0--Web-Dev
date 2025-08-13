//  Filter function is used to filter out the elements from an array based on a condition.
//  * It returns a new array with the elements that satisfy the condition.
//  * 
//  * 
//  * Problem Statement:
//  *      - Create an array of numbers
//  *      - Filter out the even numbers from the array using filter function
//  *      - Print the new array
//  * 
//  * Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  * Output: [2, 4, 6, 8, 10]
//  */


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArr = [];

// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 === 0){
//     newArr.push(arr[i])
//     }
// }

// console.log(newArr)

// Filter out the even numbers from the array using filter function and normal function and store it in a new array
// let newArr = arr.filter(function(value){
//     return value % 2 === 0;
// });

// console.log(newArr);

// * Problem Statement:
//  *     - Create an array of names
//  *     - Filter out the names starting with letter 'H' using filter function and arrow function and store it in a new array
//  *     - Print the new array
//  * Input: ['Harkirat', 'Bharat', 'Harry', 'Hermione', 'Ron', 'Hagrid']
//  * Output: ['Harkirat', 'Harry', 'Hermione', 'Hagrid']
//  */
// create an array of names
let names = ['Harkirat', 'Bharat', 'Harry', 'Hermione', 'Ron', 'Hagrid'];

let newName = names.filter(function(name){
   return name.startsWith('H')
})
console.log(newName)

let newName1 = names.filter((name)=> name[0] === 'H')
console.log(newName1)