function getLength(name){
    return name.length;
}

const ans1 = getLength("Shivang")

console.log(ans1)

//  call getLength() function without argument
// const ans2 = getLength();

// // print ans2 to console
// console.log(ans2); // This will throw an error


try{
    const ans3 = getLength();
    console.log(ans3);
}catch(error){
    console.error(`error have been occured: ${error}`);
}