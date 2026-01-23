// function greet(firstName : string){
//     return `hello , ${firstName}`;
// }

// console.log(greet("TypeScript"));


// function greet(firstName : string){// no type annotation
//     console.log("hello" + firstName);
// }
// greet("TypeScript");//valid
// greet(1); //error

//number , string, any , boolean , void , null , undefined , never , object , array
// let x : any = 1; //type annotation
// x = "TypeScript";   //type inference
// x = true;// valid
// x = null;
// x = undefined;


// function sum(a:number, b:number){
//     return a+b;
// }

// console.log(sum(3,8)); //11
// // console.log(sum(3,"8")); //error
// // console.log(sum("3","8")); //error

// function delayedCall(fn: () => void){
//     setTimeout(fn, 1000);
// }

// delayedCall(function(){
//     console.log("hello");
// })

// function sum(a:number, b:number):number{
//     return a+b;
// }

// let ans = sum(3,8);

// console.log(ans);

// function delayedCall(fn: ()=> void){
//     setTimeout(fn, 1000);
// }

// function log(){
//     console.log("hello world");
// }

// delayedCall(log);

// function greet(user: {
//     name: string,
//     age: number,
//     address : {
//         streetName: string,
//         country : string,
//     }
// }) {
//     console.log("hello" + user.name)
// }

// greet({
//     name: "harkirat",
//     age: 21
// })

// let user = {
//     name: "harkirat",
//     age: 21
// }

// greet(user)

//  interface UserType{
//     firstName: string,
//     lastName : string,
//     age: number
//  }

//  function greet(user: UserType){

//  }
//todo.jsx
// interface TodoType{
//     title : string;
//     description: string;
//     done : boolean;
// }

// interface TodoInput{
//     todo: TodoType;
// }

// function Todo(props : TodoInput){

// }

// <Todo Todo={{
//     title : "go to Gym",
//     description : "Go to gym from 8-10",
//     done : false
// }}

// />

interface Manager{
    name: string,
    age: number
}

interface Employee{
    name: string,
    department: string
}

type TeamLead = Manager & Employee;

