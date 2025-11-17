import { SchoolFormData } from '@/app/(modules)/school/components/form/schemas/school-schema';
import { SchoolForm } from '@/app/(modules)/school/components/form/school-form';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function NewSchoolScreen() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleFormSubmit = async (data: SchoolFormData) => {
        setIsLoading(true);
        console.log('Simulando chamada de API para salvar escola...');
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Escola salva com sucesso (simulado)!');
        const schoolDataWithId = { ...data, id: uuidv4() };
        console.log('Nova escola para salvar:', schoolDataWithId);
        setIsLoading(false);
        router.back();
    };
    return (
        <>
            <SchoolForm onSubmit={handleFormSubmit} isLoading={isLoading} />
        </>
    );
}