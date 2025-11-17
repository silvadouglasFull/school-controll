import { SchoolFormData } from '@/app/(modules)/school/components/form/schemas/school-schema';
import { SchoolForm } from '@/app/(modules)/school/components/form/school-form';
import { useLocalSearchParams } from '@/app/(modules)/school/edit/hooks/use-local-search-params';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';
import { useState } from 'react';



export default function NewSchoolScreen() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { id, address, name, numberOfClasses } = useLocalSearchParams();
    const handleFormSubmit = async (data: SchoolFormData) => {
        setIsLoading(true);
        console.log('Simulando chamada de API para salvar escola...');
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Escola salva com sucesso (simulado)!');
        const schoolDataWithId = { ...data, id };
        console.log('Nova escola para salvar:', schoolDataWithId);
        setIsLoading(false);
        router.back();
    };
    return (
        <GluestackUIProvider config={config}>
            <SchoolForm
                onSubmit={handleFormSubmit}
                isLoading={isLoading}
                defaultValues={{
                    address,
                    name,
                    numberOfClasses: numberOfClasses ? Number(numberOfClasses) : 0,
                }} />
        </GluestackUIProvider>
    );
}