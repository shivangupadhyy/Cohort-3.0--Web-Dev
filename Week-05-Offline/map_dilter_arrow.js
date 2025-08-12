//map, filter, arrow fns

// function sum(a, b){
//     return a+b;
// }

// const add = (a,b) =>{
//     return a+b;
// }
// const ans2 = add(4,5)
// const ans = sum(2, 5);
// console.log(ans2)

//given an array, given me back a new arrya in which every value is multiplied by 2

// const arr = [1, 2, 3, 5, 6];

// solution 

// const newArr = [];

// for(let i = 0; i<arr.length; i++){
//     newArr.push(arr[i] *2);
// }

// console.log(newArr)

// other solution 

// function transform(i){
//     return i*2;
// }

// const ans = arr.map(transform)
// console.log(ans)
let input = [1, 3, 4,5]

function map(arr, transformation){
    for(let i =0; i<arr.lenght; i++){
        arr[i] = transformation(arr[i])
    }
    return arr;
}

let output = map(input, x=>x*2)
console.log(output)



