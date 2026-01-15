import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { pier, PrismaClient } from '@/generated/prisma/client'

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter });
// const prisma = new PrismaClient({ adapter }).$extends({
//   model: {
//     pier: { 
//         async create(data: { number: string }): Promise<pier> {
//             return this.create(data)
//         },
//         async deletePier(id: number) {
//             return prisma.pier.delete({ where: { id } })
//         },
//         async listPiers() {
//             return prisma.pier.findMany()
//         },
//         async listPiersQuery(query: string, page: number) {
//             return prisma.pier.findMany({where: { number : { contains: query }}});
//         },
//         async updatePier(id: number, data: { number: string }) {
//             return prisma.pier.update({ where: { id }, data })
//         }
//      }   
//   },
// });

export { prisma }