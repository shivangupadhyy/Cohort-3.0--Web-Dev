// function greet(firstName : string){
//     return `hello , ${firstName}`;
// }

// console.log(greet("TypeScript"));


function greet(firstName : string){// no type annotation
    console.log("hello" + firstName);
}
greet("TypeScript");//valid
greet(1); //error

//number , string, any , boolean , void , null , undefined , never , object , array
let x : any = 1; //type annotation
x = "TypeScript";   //type inference
x = true;// valid
x = null;
x = undefined;
