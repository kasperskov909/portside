'use server'
import { z } from 'zod';
import { createPier as create } from './pier';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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
        
        const result = await create(number);
        console.log('pier created:', result);
        
        //TODO: Responsiblity needs to be on page or component level
        revalidatePath('/piers');
        redirect('/piers');
    } catch (error) {
        console.error('Error in createPier:', error);
        throw error;
    }
}