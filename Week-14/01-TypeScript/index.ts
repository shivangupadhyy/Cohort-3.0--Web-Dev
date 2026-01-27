// function greet(firstName : string){
//     return `hello , ${firstName}`;
// }

import ts = require("typescript");

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

// interface Manager{
//     name: string,
//     age: number
// }

// interface Employee{
//     name: string,
//     department: string
// }

// type TeamLead = Manager & Employee;

// int sum(int a, int b){//cpp example
//     return a+bigint;
// }

// function sum(a: number, b: number) : number{
//     return a+b;
// }

// function greet(name: string) : string{
//     return "hello " + name;
// }

// const greeting = greet("shivnag");
// console.log(greeting);

// function isEven(num : number): boolean{
//     if(num % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }

//if we have a a complex object how we  can define the type of the object
//thats why we use interfaces

// interface User{
//     name: string;
//     age: number;
//     address: {
//         city: string;
//         country: string;
//         pincode: number;
//     };
// }

// let user : User = {
//     name : "shivang",
//     age: 21,
//     address :  {
//         city : 'UP',
//         country: "india",
//         pincode: 2121212
//     }
// }

// function isLegal(user : User): boolean {
//     if(user.age >= 18){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isLegal(user))


// interface People{
//     name : string,
//     age: number,
//     // greet : () => string,

//     // greet2():string
// }


// let person: People = {
//     name: "Shivang",
//     age: 21,
//     greet: () => {
//         return "hi"
//     },
//     greet2(): string {
//         return "hello"
//     }
// }

// let greeting = person.greet();
// console.log(greeting);

// class Manager implements People{
//     name : string;
//     age : number;
//     number : string

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//         this.number = "3322332"
//     }
// }

// let user = new Manager("John", 30);



// class Shape {
//     area(){
//         console.log("hi i am are");
//     }
// }

// class Rectangle extends Shape {
//     width : number;
//     height : number;

//     constructor(){
//         super()
//         this.width = 1;
//         this.height = 2;
//     }
// }

// const r = new Rectangle();
// r.area();

// interface User{
//     name : string;
//     age : number;
// }

// class Manager implements User{
//     name : string;
//     age : number;
//     constructor(name: string, age : number){
//         this.name = name;
//         this.age = age;
//     }
// }

// const m = new Manager("shivang", 21);
// console.log(m.name);
// console.log(m.age);

// abstract class User{
//     name : string;
//     constructor(name : string){
//         this.name = name;
//     }

//    abstract greet(): string;
//    hello(){
//     console.log("hi there");
//    }
// }

// class Employee extends User{
//     name : string;
//     constructor(name : string){
//         super(name)
//         this.name = name;
//     }
//     greet() {
//         return "hi" + this.name;
//     }
// }

// interface User2{
//     name : string;
// }

// type User = {
//     name : string;
//     age : number;
// }

// function isLegal(user: User){
//     return user.age>18;
// }

// type Employee = {
//     name : string;
//     startDate : string;
// }

// type Manager = {
//     name : string;
//     department : string;
// }

// type TeamLead = Employee & Manager;

// let e : Employee = {
//     name : "Shivang",
//     startDate : "14-07-2025"
// }

// let m : Manager = {
//     name : "Harkirat",
//     department : "SDE"
// }

//  type GoodUser = {
//     name : string;
//     gift : string;
//  };

//  type BadUser = {
//     name : string;
//     ip : string;
//  }

//  type User = GoodUser | BadUser;

//  const user : User = {
//     name : "Shivang";
//     ip : "asasasasas";
//  }

// interface Admin {
//     name : string;
//     permission : string;
// }

// interface User{
//     name : string;
//     age : number;
// }

// type UserOrAdmin = User | Admin;

// function greet(user: UserOrAdmin){

// }


// function getMax(nums : number[]){
//     let maxValue :number = -100000000;

//     for(let i = 0; i<nums.length; i++){
//         const num = nums[i];
//         if(num != undefined && num > maxValue){
//             maxValue = num
//         }
//     }
//     return maxValue;
// }

// getMax([1,2,3]);

// interface Address{
//     city : string;
//     pincode : string;
// }

// interface User{
//     name : string;
//     age : number;
//     address : Address[];
// }

// interface User{
//     firstName : string;
//     lastName : string;
//     age: number;
// }

interface User{
    firstName : string;
    lastName : string;
    age : number
}

function filterUsers(users: User[]) : User[]{
    let ans : User[] = [];
    for(let i = 0; i<users.length; i++){
        if(users[i].age > 18){
            ans.push(users[i]!);
        }
    }
    return ans;
}




