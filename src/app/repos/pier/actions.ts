'use server'
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/app/repos/prisma'


const FormSchema = z.object({
    number: z.string()
})

export async function createPier(formData: FormData) {
    try {
        console.log('formData', formData);

        const { number } = FormSchema.parse({
            number: formData.get('number')
        });
        console.log('validated number:', number);
        
        const result = await prisma.pier.create({ data: { number: number } })
        console.log('pier created:', result);
        
        //TODO: Responsiblity needs to be on page or component level
        revalidatePath('/piers');
        redirect('/piers');
    } catch (error) {
        console.error('Error in createPier:', error);
        throw error;
    }
}

export async function listPiers(query?: string, page?: number) {
    const pageSize = 10;
    const skip = page ? (page - 1) * pageSize : 0;
    
    return prisma.pier.findMany({where: { number : { contains: query }}})
}

// export function deletePier(id: number) {
//     return prisma.pier.deletePier(id)
// }

export async function listAllPiers() {
    return prisma.pier.findMany();
}
// export function updatePier(id: number, data: { number: string }) {
//     return prisma.pier.updatePier(id, data)
// }
// async function withPrismaHandling<T>(query: Promise<T>): Promise<T> {
//     try {
//         const result = await query;
//         return result;
//     } catch (error) {
//         console.error('Database Error:', error);
//         throw error;
//     }
// }