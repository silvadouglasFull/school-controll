import { SchoolFormData, schoolSchema } from '@/app/(modules)/class/components/form/schemas/school-schema';
import { SchoolFormProps } from '@/app/(modules)/class/components/form/types/school-form.interface';
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
        setValue
    } = useForm<SchoolFormData>({
        resolver: zodResolver(schoolSchema),
        defaultValues: defaultValues || {
            name: '',
            schoolYear: 0,
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
                        {image ? (
                            <Image source={{ uri: image }}
                                style={{ width: '100%', height: 200 }}
                            />
                        ) :
                            (<Button onPress={handleImage} mt="$4">
                                <Icon as={PlusIcon} />
                                <Text>
                                    Add Photo of Class
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