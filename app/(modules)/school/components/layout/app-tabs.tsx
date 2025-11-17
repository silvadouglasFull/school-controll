import { Box, Button, ButtonIcon, HStack } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';
import { Home, Plus, SlidersHorizontal } from 'lucide-react-native';
import React from 'react';

export const AppTabs = () => {
    const router = useRouter();

    const handleHome = () => {
        // Navega para a tela inicial do app. Ajuste a rota se necessário.
        router.push('/');
    };

    const handleNew = () => {
        router.push('/school/new');
    };

    const handleFilter = () => {
        // Lógica para abrir modal de filtro ou navegar para tela de filtro
        console.log('Botão de filtro pressionado');
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
                {/* Botão Home */}
                <Button variant="link" onPress={handleHome}>
                    <ButtonIcon as={Home} size="xl" />
                </Button>

                {/* Botão Central de Adicionar */}
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

                {/* Botão Filtrar */}
                <Button variant="link" onPress={handleFilter}>
                    <ButtonIcon as={SlidersHorizontal} size="xl" />
                </Button>
            </HStack>
        </Box>
    );
};