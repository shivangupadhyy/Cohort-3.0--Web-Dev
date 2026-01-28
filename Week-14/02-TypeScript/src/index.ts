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

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps : UpdateProps){

}

// function updateUser(name : string, age : number, password : string){
//     //hit the database tp update the user
// }


updateUser({
    name : "asd",
    age : 23,
    email : "Shivang"
})


const lastName = "Shivang";
lastName = "upadhyay";

const a = [1,2,3];
a[0] = 4; // wecan change the internal value of the array but can not the array 
// a = [1,3,4];
