import { prisma } from '@/app/repos/prisma'
import type { pier } from '@/generated/prisma/client'

export function createPier(pier: pier) {
    return prisma.pier.create(pier)
    .then(async (result) => {
            await prisma.$disconnect()
            return result
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })
}

export function deletePier(id: number) {
    return prisma.pier.deletePier(id)
}

export function listPier() {
    return prisma.pier.listPier()
}

export function updatePier(id: number, data: { number: string }) {
    return prisma.pier.updatePier(id, data)
}
