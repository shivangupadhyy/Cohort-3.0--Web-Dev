import { PrismaClient } from '@prisma/client'
const client = new PrismaClient()

async function main() {
  await client.user.create({
    data: {
      username: "Shivang",
      password: "123322",
      firstName: "Shivanah",
      lastName: "Upadhyay"
    }
  })
}

main()

export default main();

