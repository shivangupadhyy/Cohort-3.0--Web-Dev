// import NextAuth from "next-auth";
// import { NextResponse } from "next/server";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";

// console.log(process.env.NEXTAUTH_SECRET);

// const handler = NextAuth({
//     providers: [
//         CredentialsProvider({
//           name: "Email",        //jo yaha likh rhe hia woh likha ayega front mai jaise iske liye ayega ki Sign in with email.
//           credentials: {
//             username: { label: "Username", type: "text", placeholder: "Type your username here !" },
//             password: { label: "Password", type: "password" }
//           },
//           async authorize(credentials, req) {
//             const username = credentials?.username;
//             const password = credentials?.password;

//             console.log(username, password);
            

//             //db request to check if the username and password are correct basically the authentication part!
//             const user = { 
//                 id: "1", 
//                 name: "Shivang Upadhyay", 
//                 email: "Upadhyay@gmail.com" 
//             }
      
//             if (user) {
//               return user
//             } else {
//               return null;
//             }
//           }
//         }),
        
//         GoogleProvider({            //yeh google wla sign ka method daal dega like sign in with google 
//             clientId: "ABC",
//             clientSecret: "ABC"
//           })



//       ],
//       secret: process.env.NEXTAUTH_SECRET,
// })

// export {handler as GET, handler as POST}

// //ispe yeh next-auth install krnge na yeh khudh ek front bna kr dega ..jispe help krega ki jo credentials provide krnge us hisb ka woh frontend ka bana dega.. jitne credentials add krnge tb unka !


import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

const handler  = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials:{
                username : {label : "Username", type :"text", placeholder : "Shivang"},
                password: {label : "Password", type : "password"}
            },
            async authorize(credentials){
                return {
                    username : "shivang",
                    id: "1",
                    email: "Shivang@gmail.com"
                }
            }
        })
    ]
})

export const GET = handler;
export const POST = handler;