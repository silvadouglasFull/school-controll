import { z } from 'zod';

export const schoolSchema = z.object({
    name: z.string({ error: 'O nome é obrigatório.' }).min(5, {
        message: 'O nome deve ter no mínimo 5 caracteres.',
    }),
    address: z.string({ error: 'O endereço é obrigatório.' }).min(5, {
        message: 'O endereço deve ter no mínimo 5 caracteres.',
    }),
    numberOfClasses: z.coerce
        .number({ error: 'O número de turmas deve ser um número.' })
        .min(1, { message: 'O número de turmas deve ser no mínimo 1.' }),
});

export type SchoolFormData = z.infer<typeof schoolSchema>;