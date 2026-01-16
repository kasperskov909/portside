"use server";
import { number, z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/app/repos/prisma";

const FormSchema = z.object({
  number: z.string(),
  id: z.number().optional(),
});
const UpdatePier = FormSchema.omit({ id: true });

export async function createPier(formData: FormData) {
  try {
    const { number } = FormSchema.parse({
      number: formData.get("number"),
    });

    const result = await prisma.pier.create({ data: { number: number } });
    console.log("pier created:", result);
  } catch (error) {
    console.error("Error in createPier:", error);
    throw error;
  }

  //TODO: Responsiblity needs to be on page or component level
  revalidatePath("/piers");
  redirect("/piers");
}

export async function listPiers(query?: string, page?: number) {
  const pageSize = 10;
  const skip = page ? (page - 1) * pageSize : 0;

  return prisma.pier.findMany({ where: { number: { contains: query } } });
}

export async function getPier(id: number) {
  return prisma.pier.findUnique({ where: { id: id } });
}

export async function deletePier(id: number) {
  return prisma.pier.delete({ where: { id: id } });
}

export async  function listAllPiers() {
  return prisma.pier.findMany();
}

export async function updatePier(id: number, formData: FormData) {
  try {
    const { number } = UpdatePier.parse({
      number: formData.get("number"),
    });
    const result = prisma.pier.update({
      where: { id: id },
      data: { number: number },
    });
    console.log("pier updated:", result);
  } catch (error) {
    console.error("Error in updatePier:", error);
    throw error;
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
