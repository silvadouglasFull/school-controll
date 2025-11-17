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
    Icon,
    Input,
    InputField,
    KeyboardAvoidingView,
    ScrollView,
    Text,
    VStack,
} from '@gluestack-ui/themed';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Image, Platform } from 'react-native';
import { pickDocument } from '../../util/document-picker';
export function SchoolForm({
    onSubmit,
    defaultValues,
    isLoading,
}: SchoolFormProps) {
    const [image, setImage] = useState<string>('')
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SchoolFormData>({
        resolver: zodResolver(schoolSchema),
        defaultValues: defaultValues || {
            name: '',
            address: '',
            numberOfClasses: 0
        },
    });
    const handleImage = async () => {
        const selectedImage = await pickDocument()
        setImage(selectedImage ?? '')
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
                        <Heading>Register Of School</Heading>
                        {image ? (
                            <Image source={{ uri: image }}
                                style={{ width: '100%', height: 200 }}
                            />
                        ) :
                            (<Button onPress={handleImage} mt="$4">
                                <Icon as={PlusIcon} />
                                <Text>
                                    Add Photo of School
                                </Text>
                            </Button>
                            )
                        }
                        <Controller
                            control={control}
                            name="name"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormControl isInvalid={!!errors.name} isRequired>
                                    <FormControlLabel>
                                        <FormControlLabelText>Name School</FormControlLabelText>
                                    </FormControlLabel>
                                    <Input>
                                        <InputField
                                            placeholder="Ex: School Estadual ABC"
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
                                        <FormControlLabelText>Address</FormControlLabelText>
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
                                            number Of Classes
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
                                {isLoading ? 'Saving...' : 'Save School'}
                            </ButtonText>
                        </Button>
                    </VStack>
                </Box>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}