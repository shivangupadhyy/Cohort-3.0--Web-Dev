// interface User{
//     name : string;
//     age : number;
// }

// function sumOfAge(user1 : User, user2 : User){
//     return user1.age + user2.age;
// }

// const age = sumOfAge({name : "Shivang", age : 20} , {name : "sachin", age : 20});
// console.log(age)

// interface User{
//     id: string;
//     name : string;
//     age : number;
//     email : string;
//     password : string;
// };

// type UpdateProps = Pick<User, 'name' | 'age' | 'email' >

// type UpdatePropsOptional = Partial<UpdateProps>

// function updateUser(updatedProps : UpdateProps){

// }

// function updateUser(name : string, age : number, password : string){
//     //hit the database tp update the user
// }


// updateUser({
//     name : "asd",
//     age : 23,
//     email : "Shivang"
// })


// const lastName = "Shivang";
// lastName = "upadhyay";

// const a = [1,2,3];
// a[0] = 4; // wecan change the internal value of the array but can not the array 
// a = [1,3,4];

// const obj = {
//     name : "Shivanh",
//     age : 25,
//     country : "india",
// }

// obj = { // will throw and error

// }

// obj.name = "Shivang";

// type User = {   
//     name : string;
//     age : number;
// }

// const user : Readonly<User> = {
//     name : 'Shivang',
//     age : 21,
// }

// user.age = 12;

// type User = {
//     id : string;
//     username : string;
// }

// type Users = {
//     [key: string] : User;
// }


// const users : Users = {
//     "Shivang" : {
//         id : 'ras@qd1',
//         username : 'harkirar'
//     }, 
//     "ayuu" : {
//         id: "ras1dre@",
//         username : 'ayyyuuu'
//     }
// }

// interface User{
//     id : number;
//     name : string;
//     email : string;
//     createdAt : Date;
// }

// //for a profile display , only `name` and `email`;

// type UserProfile = Pick<User, 'name' | 'email'>;

// const displayUserProfile = (user: UserProfile)=>{
//     console.log(`Name : ${user.name}, Email : ${user.email}`);
// }


// interface User{
//     id:String;
//     name : string;
//     age : string;
//     email : string;
//     password:string;
// };

// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// type UpdatePropsOptional = Partial<UpdateProps>

// function updateUser(updatedProps : UpdatePropsOptional){
//     //
// }

// updateUser({});

// interface Config{
//     readonly endpoint: string;
//     readonly apikey: string;
// }

// const config: Readonly<Config> = {
//     endpoint: "https://api.example.com",
//     apikey : 'adbcedf123345',
// }

// config.apikey = 'newkey'; // Error : Cannot assign to 'apikey' because it is a read-only property.

//Record
// interface User{
//     id : string;
//     name : string;
// }

// type Users = {[key : string] : User};

// const users :Users = {
//     'abc123': {id: 'abc123', name : 'Shivang'},
//     'xyz123' : {id: 'xyz789', name: 'shivnag'},
// };

// or use record;

// interface User{
//     id : string;
//     name : string;
// }

// type Users = Record<string, User>;

// const users : Users = {
//     'abc123' : {id:'abc123', name : 'shivang'},
//     'xyz789' : {id: 'xyz123', name : 'harkirat'},
// }

// console.log(users['abc123']);// Output : {id: 'abc123', name : 'Shivang Upadhyay'};


//Map

interface User{
    id : string;
    name : string;
}
//inititalize ana empty map
const usersMap = new Map<string, User>();

//add users to the map using .set
usersMap.set('abc123', {id: 'abc123', name: 'Shivang'});
usersMap.set('xyz123', {id: 'xyz123', name : 'harkirat'});

console.log(usersMap.get('abc123'))