import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

export default db

async function testPrisma() {
  const newUsers = await db.user.create({
    data: {
      username: 'Jeff',
    },
  })
  console.log(newUsers)
}

testPrisma()
