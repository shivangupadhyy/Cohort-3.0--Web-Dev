import { PrismaClient } from '@prisma/client'
const client = new PrismaClient()

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





