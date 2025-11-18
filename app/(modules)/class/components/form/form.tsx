import { FormData, schema } from '@/app/(modules)/class/components/form/schemas/schema';
import type { FormProps } from '@/app/types/form';
import { pickDocument } from '@/app/util/document-picker/document-picker';
import { InputFileImage } from '@/components/input-file-image/input-file-image';
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
    VStack
} from '@gluestack-ui/themed';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { Controller, useForm, type Resolver } from 'react-hook-form';
import { Platform } from 'react-native';
export function Form({
    onSubmit,
    defaultValues,
    isLoading,
}: FormProps<FormData>) {
    const [image, setImage] = useState<string>('')
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<FormData>({
        resolver: zodResolver(schema) as unknown as Resolver<FormData, any, FormData>,
        defaultValues: defaultValues || {
            name: '',
            schoolYear: 1,
            shift: 'After',
        },
    });
    const handleImage = async () => {
        const selectedImage = await pickDocument()
        selectedImage?.uri && setImage(selectedImage.uri)
        selectedImage && setValue('image', selectedImage?.file)
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}>
                <Box p="$4" flex={1} justifyContent="center">
                    <VStack space="xl">
                        <Heading>Register Of Class</Heading>
                        <InputFileImage
                            handleImage={handleImage}
                            image={image}
                        />
                        <Controller
                            control={control}
                            name="name"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormControl isInvalid={!!errors.name} isRequired>
                                    <FormControlLabel>
                                        <FormControlLabelText>Name Class</FormControlLabelText>
                                    </FormControlLabel>
                                    <Input>
                                        <InputField
                                            placeholder="Ex: Class Estadual ABC"
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
                            name="shift"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormControl isInvalid={!!errors.shift} isRequired>
                                    <FormControlLabel>
                                        <FormControlLabelText>Shift</FormControlLabelText>
                                    </FormControlLabel>
                                    <Input>
                                        <InputField
                                            placeholder="Ex: Morning, Afternoon, Evening"
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            returnKeyType="next"
                                        />
                                    </Input>
                                    <FormControlError>
                                        <FormControlErrorIcon as={AlertCircleIcon} />
                                        <FormControlErrorText>
                                            {errors.shift?.message}
                                        </FormControlErrorText>
                                    </FormControlError>
                                </FormControl>
                            )}
                        />
                        <Controller
                            control={control}
                            name="schoolYear"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormControl isInvalid={!!errors.schoolYear} isRequired>
                                    <FormControlLabel>
                                        <FormControlLabelText>
                                            schoolYear
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
                                            {errors.schoolYear?.message}
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
                                {isLoading ? 'Saving...' : 'Save Class'}
                            </ButtonText>
                        </Button>
                    </VStack>
                </Box>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}