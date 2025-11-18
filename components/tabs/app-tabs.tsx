import type { AppTabs as Props } from '@/components/tabs/types/app-tabs';
import { Box, Button, ButtonIcon, HStack } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';
import { Home, Plus, SlidersHorizontal } from 'lucide-react-native';
import React from 'react';

export const AppTabs: React.FC<Props> = ({ handleFilter, handleNew }: Props) => {
    const router = useRouter();

    const handleHome = () => {
        router.push('/');
    };
    return (
        <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            bg="$backgroundLight0"
            borderTopWidth="$1"
            borderColor="$borderLight200"
            py="$2"
            px="$4"
        >
            <HStack justifyContent="space-between" alignItems="center">
                <Button variant="link" onPress={handleHome}>
                    <ButtonIcon as={Home} size="xl" />
                </Button>
                <Box position="absolute" left="50%" top="50%" transform="translate(-50%, -75%)">
                    <Button
                        size="lg"
                        borderRadius="$full"
                        w="$16"
                        h="$16"
                        onPress={handleNew}
                        elevation="$2"
                    >
                        <ButtonIcon as={Plus} size="xl" />
                    </Button>
                </Box>
                <Button variant="link" onPress={handleFilter}>
                    <ButtonIcon as={SlidersHorizontal} size="xl" />
                </Button>
            </HStack>
        </Box>
    );
};