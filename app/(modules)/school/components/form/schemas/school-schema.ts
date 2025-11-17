import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from '@/config/upload-files';
import { z } from 'zod';

export const schoolSchema = z.object({
    name: z.string({ error: 'The name is required.' }).min(5, {
        message: 'The name must be at least 5 characters long.',
    }),
    address: z.string({ error: 'The address is required.' }).min(5, {
        message: 'The address must be at least 5 characters long.',
    }),
    numberOfClasses: z.coerce
        .number({ error: 'The number of classes must be a number.' })
        .min(1, { message: 'The number of classes must be at least 1.' }),
    image: z.instanceof(File).refine((file) => file.size <= MAX_FILE_SIZE)
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type))
});

export type SchoolFormData = z.infer<typeof schoolSchema>;