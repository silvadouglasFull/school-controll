import { Form } from '@/app/(modules)/class/components/form/form';
import { FormData } from '@/app/(modules)/class/components/form/schemas/schema';
import { service } from '@/app/(modules)/class/services/class';
import { AxiosError } from 'axios';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function NewSchoolScreen() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleFormSubmit = async (data: FormData) => {
        setIsLoading(true);
        try {
            const { schoolYear, ...rest } = data
            const response = await service.create({
                ...rest,
                schoolYear: +schoolYear
            });
            response.id && router.back();
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error.response?.data)
            }
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <>
            <Form onSubmit={handleFormSubmit} isLoading={isLoading} />
        </>
    );
}