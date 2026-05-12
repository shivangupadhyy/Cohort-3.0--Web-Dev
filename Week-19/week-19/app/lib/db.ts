import {PrismaClient} from '@prisma/client'

// const prismaClientSingleton = () => {
//     return new PrismaClient()
// }


// declare global{
//     var prisma : undefined | ReturnType<typeof prismaClientSingleton>
// }



//@ts-ignore
const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if(process.env.NODE_ENV !== 'production') globalThis.prisma = prisma