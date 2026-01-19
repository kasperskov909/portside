"use server";
import { number, z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/app/repos/prisma";

export type State = {
  errors?: {
    number?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  number: z.string({
    message: 'Number is required.',
  }).min(1, {
    message: 'Number is required',
  }),
  id: z.number().optional(),
});
const UpdatePier = FormSchema.omit({ id: true });

export async function createPier(prevState: State, formData: FormData) {
  const validatedFields  = FormSchema.safeParse({
      number: formData.get("number"),
    });
  if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to create pier.',
      };
    }
  try {
    const result = await prisma.pier.create({ data: { number: validatedFields.data.number } });
    console.log("pier created:", result);
  } catch (error) {
    console.error("Error in createPier:", error);
    return {
      message: 'Database Error: Failed to Create Pier.',
    };
  }

  //TODO: Responsiblity needs to be on page or component level
  revalidatePath("/piers");
  redirect("/piers");
}

export async function listPiers(query?: string, page?: number) {
  try {
    const pageSize = 10;
    const skip = page ? (page - 1) * pageSize : 0;

    const result = await prisma.pier.findMany({ where: { number: { contains: query } } });
    return result;
  } catch (error) {
    console.error("Error in listPiers:", error);
    return {
      message: 'Database Error: Failed to List Piers.',
    };
  }
}

export async function getPier(id: number) {
  try {
    const result = await prisma.pier.findUnique({ where: { id: id } });
    return result;
  } catch (error) {
    console.error("Error in getPier:", error);
    return undefined;
  }
}

export async function deletePier(id: number) {
  try {
    const result = await prisma.pier.delete({ where: { id: id } });
    console.log("pier deleted:", result);
  } catch (error) {
    console.error("Error in deletePier:", error);
    return {
      message: 'Database Error: Failed to Delete Pier.',
    };
  }
  revalidatePath("/piers");
  redirect("/piers");
}

export async function listAllPiers() {
  try {
    const result = await prisma.pier.findMany();
    return result;
  } catch (error) {
    console.error("Error in listAllPiers:", error);
    return {
      message: 'Database Error: Failed to List All Piers.',
    };
  }
}

export async function updatePier(id: number, prevState: State, formData: FormData) {

    const validationResult = UpdatePier.safeParse({
      number: formData.get("number"),
    });

 if (!validationResult.success) {
      return {
        errors: validationResult.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to update pier.',
      };
    }
  try {
    const result = await prisma.pier.update({
      where: { id: id },
      data: { number: validationResult.data.number },
    });
    console.log("pier updated:", result);
  } catch (error) {
    console.error("Error in updatePier:", error);
    return {
      message: 'Database Error: Failed to Update Pier.',
    };
  }
  //TODO: Responsiblity needs to be on page or component level
  revalidatePath("/piers");
  redirect("/piers");
}

// async function withPrismaHandling<T>(query: Promise<T>): Promise<T> {
//     try {
//         const result = await query;
//         return result;
//     } catch (error) {
//         console.error('Database Error:', error);
//         throw error;
//     }
// }
