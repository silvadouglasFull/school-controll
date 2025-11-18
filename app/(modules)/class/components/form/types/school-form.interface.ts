import { SchoolFormData } from '@/app/(modules)/class/components/form/schemas/school-schema';

export interface SchoolFormProps {
    onSubmit: (data: SchoolFormData) => void;
    defaultValues?: SchoolFormData;
    isLoading?: boolean;
}
