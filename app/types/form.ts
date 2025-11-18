import { FieldValues } from 'react-hook-form';

export interface FormProps<T extends FieldValues> {
    onSubmit: (data: T) => void;
    defaultValues?: T;
    isLoading?: boolean;
}
