import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from '@/config/upload-files';
import { z } from 'zod';

export const schema = z.object({
    name: z.string({ error: 'The name is required.' }).min(5, {
        message: 'The name must be at least 5 characters long.',
    }),
    shift: z.string({ error: 'The shift is required.' }).min(5, {
        message: 'The shift must be at least 5 characters long.',
    }),
    schoolYear: z.coerce
        .number({ error: 'The schoolYear of classes must be a schoolYear.' })
        .min(1, { message: 'The schoolYear of classes must be at least 1.' }),
    image: z.instanceof(File).refine((file) => file.size <= MAX_FILE_SIZE)
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type)).optional()
});

export type FormData = z.infer<typeof schema>;