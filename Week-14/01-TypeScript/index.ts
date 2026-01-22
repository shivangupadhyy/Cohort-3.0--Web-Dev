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


function sum(a:number, b:number){
    return a+b;
}

console.log(sum(3,8)); //11
// console.log(sum(3,"8")); //error
// console.log(sum("3","8")); //error

function delayedCall(fn: () => void){
    setTimeout(fn, 1000);
}

delayedCall(function(){
    console.log("hello");
})