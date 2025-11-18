import { FormData as ClassFormData } from '@/app/(modules)/class/components/form/schemas/schema';
import { SchoolFormData } from '@/app/(modules)/school/components/form/schemas/school-schema';
export interface FormProps {
    onSubmit: (data: ClassFormData | SchoolFormData) => void;
    defaultValues?: ClassFormData | SchoolFormData;
    isLoading?: boolean;
}
