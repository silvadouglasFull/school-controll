import { SchoolFormData } from '@/app/(modules)/class/components/form/schemas/school-schema';
import { SchoolForm } from '@/app/(modules)/class/components/form/school-form';
import { useSchoolContext } from '@/app/(modules)/class/context/hooks/use-school-context';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';
import { useState } from 'react';



export default function NewSchoolScreen() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { state: {
        id, shift, name, schoolYear
    } } = useSchoolContext();
    const handleFormSubmit = async (data: SchoolFormData) => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        const schoolDataWithId = { ...data, id };
        setIsLoading(false);
        router.back();
    };
    return (
        <GluestackUIProvider config={config}>
            <SchoolForm
                onSubmit={handleFormSubmit}
                isLoading={isLoading}
                defaultValues={{
                    shift,
                    name,
                    schoolYear: schoolYear ? Number(schoolYear) : 0,
                }} />
        </GluestackUIProvider>
    );
}