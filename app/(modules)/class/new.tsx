import { SchoolForm } from '@/app/(modules)/class/components/form/form';
import { FormData } from '@/app/(modules)/class/components/form/schemas/schema';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function NewSchoolScreen() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleFormSubmit = async (data: FormData) => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        const schoolDataWithId = { ...data, id: uuidv4() };
        console.log('Class data with ID:', schoolDataWithId);
        setIsLoading(false);
        router.back();
    };
    return (
        <>
            <SchoolForm onSubmit={handleFormSubmit} isLoading={isLoading} />
        </>
    );
}