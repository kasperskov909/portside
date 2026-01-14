import { prisma } from '@/app/repos/prisma'
import type { pier } from '@/generated/prisma/client'

async function withPrismaHandling<T>(query: Promise<T>): Promise<T> {
    try {
        const result = await query;
        return result;
    } catch (error) {
        console.error('Database Error:', error);
        throw error;
    }
}

export async function createPier(number: string) {
    return withPrismaHandling(
        prisma.pier.create({ number })
    )
}

export function deletePier(id: number) {
    return prisma.pier.deletePier(id)
}

export function listAllPiers() {
    return prisma.pier.listPiers()
}

export function listPiers(query?: string, page?: number) {
    const pageSize = 10;
    const skip = page ? (page - 1) * pageSize : 0;
    
    return prisma.pier.listPiersQuery(query, page)
}

export function updatePier(id: number, data: { number: string }) {
    return prisma.pier.updatePier(id, data)
}
