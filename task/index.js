// import express from 'express';

// const app = express();

// app.use(express.json());

// app.post('/',(req, res)=>{
//     const username = req.body.username;
//     const email = req.body.email;
//     const password = req.body.password;

//     res.status(200).json({
//         message: "data has been successfully received",
//         data:{
//             username: username,
//             email: email,
//             password: password
//         }
//     })

// })

const user = {
    name : "shivang Upadhayy",
}

user.name = "john";
console.log(user)

console.log("1");
setTimeout(() => {
    console.log("2");

}, 0);
Promise.resolve()
.then(()=>{
    console.log("3");
})
console.log("4");



