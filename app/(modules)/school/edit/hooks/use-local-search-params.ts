import { SchoolEditParams } from '@/app/(modules)/school/edit/types/school-edit-params';
import { useLocalSearchParams as useExpoRouterLocalSearchParams } from 'expo-router';

export const useLocalSearchParams = (): SchoolEditParams => {
    const { id, address, name, numberOfClasses } = useExpoRouterLocalSearchParams<SchoolEditParams>();
    return {
        id,
        address,
        name,
        numberOfClasses
    }
}