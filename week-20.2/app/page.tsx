// "use client";
// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

import { getServerSession } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

// export default function Home() {

//   return <SessionProvider>
//     <RealHome/>
//   </SessionProvider>

// }

// function RealHome(){

//   const session = useSession();
//   return (
//     <div>
//     {session.status ==="authenticated" && <button onClick={()=> signOut()}>Sign Out</button>}

//     {session.status === "unauthenticated" && <button onClick={()=> signIn()}>Sign In</button>}

//     {JSON.stringify(session)}
//     </div>
//   );
// }


// export default function Home(){
//   return (
//     <SessionProvider>
//       <OtherHome/>
//     </SessionProvider>
//   )
// }

//  function OtherHome(){
// const session = useSession();


// return <div>
//   {session.status === "authenticated" && <button onClick={()=> signOut()}>Sign Out</button>}

//   {session.status === "unauthenticated" && <button onClick={()=> signIn()}>Sign In</button>}
// </div>
// }

export default async function Home(){
  const session = getServerSession();
  return(
    <div>
  {JSON.stringify(session)}
  </div>
) 
}