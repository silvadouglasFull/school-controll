import { SchoolForm } from '@/app/(modules)/class/components/form/form';
import { FormData } from '@/app/(modules)/class/components/form/schemas/schema';
import { useContext } from '@/app/(modules)/class/context/hooks/use-school-context';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';
import { useState } from 'react';



export default function NewSchoolScreen() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { state: {
        id, shift, name, schoolYear
    } } = useContext();
    const handleFormSubmit = async (data: FormData) => {
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