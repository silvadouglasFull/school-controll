import { SchoolFormData } from '@/app/(modules)/school/components/form/schemas/school-schema';

export interface SchoolFormProps {
    onSubmit: (data: SchoolFormData) => void;
    defaultValues?: SchoolFormData;
    isLoading?: boolean;
}
