// interface User{
//     name : string;
//     age : number;
// }

// function sumOfAge(user1 : User, user2 : User){
//     return user1.age + user2.age;
// }

// const age = sumOfAge({name : "Shivang", age : 20} , {name : "sachin", age : 20});
// console.log(age)

interface User{
    id: string;
    name : string;
    age : number;
    email : string;
    password : string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email' >

function updateUser(updatedProps : UpdateProps){
    
}

// function updateUser(name : string, age : number, password : string){
//     //hit the database tp update the user
// }