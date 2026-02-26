import express from 'express'
import { PrismaClient } from '@prisma/client'


const app = express()
const client = new PrismaClient()


app.get('/users', async(req, res)=>{
  const users =  await client.user.findMany();

  res.json({
    users
  })
})

app.get('/todos/:id', async(req, res)=>{
  const id  = parseInt(req.params.id);
  const users = await client.user.findFirst({
    where: {
      id : id
    }, 
    select: {
      todos: true,
      username : true
    }
  });

  res.json({
    users
  })
})

app.listen(3000);

// async function createUser() {
//   await client.user.create({
//     data: {
//       username: "Shivang",
//       password: "123322",
//       firstName: "Shivanah",
//       lastName: "Upadhyay"
//     }
//   })
// }
// async function deleteUser() {
//   await client.user.delete({
//     where:{
//       id: 1
//     }
//   })
// }
// async function updateUser() {
//   await client.user.update({
//     where:{
//       id: 1
//     },
//     data: {
//       username: "Ayuuuu",
//       password : "ayususu",
//       firstName: "yumyum",
//       lastName: "upadhyay"
//     }
//   })
// }

// async function findUser(){
//   const user = await client.user.findFirst({
//     where:{
//       id : 1,
//     }
//   })


//   console.log(user);
// }


async function getTodos(){
  const user = await client.user.findFirst({
    where:{
      id : 1,
    },
    include: {
      todos : true
    }
  })


  console.log(user);
}

// findUser();
getTodos();


// createUser();

// deleteUser();
// updateUser();





