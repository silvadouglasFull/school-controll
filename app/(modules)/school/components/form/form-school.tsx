import { SchoolFormData, schoolSchema } from '@/app/(modules)/school/components/form/schemas/school-schema';
import { SchoolFormProps } from '@/app/(modules)/school/components/form/types/school-form.interface';
import {
    AlertCircleIcon,
    Box,
    Button,
    ButtonText,
    FormControl,
    FormControlError,
    FormControlErrorIcon,
    FormControlErrorText,
    FormControlLabel,
    FormControlLabelText,
    Heading,
    Input,
    InputField,
    KeyboardAvoidingView,
    ScrollView,
    VStack,
} from '@gluestack-ui/themed';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Platform } from 'react-native';


export function SchoolForm({
    onSubmit,
    isLoading,
}: SchoolFormProps) {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SchoolFormData>({
        resolver: zodResolver(schoolSchema),
        defaultValues: {
            name: '',
            address: '',
            numberOfClasses: 0
        },
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}>
                <Box p="$4" flex={1} justifyContent="center">
                    <VStack space="xl">
                        <Heading>Cadastro de Escola</Heading>
                        <Controller
                            control={control}
                            name="name"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormControl isInvalid={!!errors.name} isRequired>
                                    <FormControlLabel>
                                        <FormControlLabelText>Nome da Escola</FormControlLabelText>
                                    </FormControlLabel>
                                    <Input>
                                        <InputField
                                            placeholder="Ex: Escola Estadual ABC"
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            returnKeyType="next"
                                        />
                                    </Input>
                                    <FormControlError>
                                        <FormControlErrorIcon as={AlertCircleIcon} />
                                        <FormControlErrorText>
                                            {errors.name?.message}
                                        </FormControlErrorText>
                                    </FormControlError>
                                </FormControl>
                            )}
                        />
                        <Controller
                            control={control}
                            name="address"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormControl isInvalid={!!errors.address} isRequired>
                                    <FormControlLabel>
                                        <FormControlLabelText>Endereço</FormControlLabelText>
                                    </FormControlLabel>
                                    <Input>
                                        <InputField
                                            placeholder="Ex: Rua das Flores, 123"
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            returnKeyType="next"
                                        />
                                    </Input>
                                    <FormControlError>
                                        <FormControlErrorIcon as={AlertCircleIcon} />
                                        <FormControlErrorText>
                                            {errors.address?.message}
                                        </FormControlErrorText>
                                    </FormControlError>
                                </FormControl>
                            )}
                        />
                        <Controller
                            control={control}
                            name="numberOfClasses"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormControl isInvalid={!!errors.numberOfClasses} isRequired>
                                    <FormControlLabel>
                                        <FormControlLabelText>
                                            Número de Turmas
                                        </FormControlLabelText>
                                    </FormControlLabel>
                                    <Input>
                                        <InputField
                                            placeholder="Ex: 10"
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value === undefined ? '' : String(value)}
                                            keyboardType="number-pad"
                                            returnKeyType="done"
                                        />
                                    </Input>
                                    <FormControlError>
                                        <FormControlErrorIcon as={AlertCircleIcon} />
                                        <FormControlErrorText>
                                            {errors.numberOfClasses?.message}
                                        </FormControlErrorText>
                                    </FormControlError>
                                </FormControl>
                            )}
                        />
                        <Button
                            onPress={handleSubmit(onSubmit)}
                            isDisabled={isLoading}
                            mt="$4">
                            <ButtonText>
                                {isLoading ? 'Salvando...' : 'Salvar Escola'}
                            </ButtonText>
                        </Button>
                    </VStack>
                </Box>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}