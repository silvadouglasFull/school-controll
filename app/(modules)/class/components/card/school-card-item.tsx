import { Box, Card, Heading, Text, VStack } from '@gluestack-ui/themed'; // Adjust import based on your setup
import React from 'react';
import { LazyLoadImage } from 'react-native-lazy-load-image';
import { SchoolItem } from '../types/school-item';
export const SchoolCardItem: React.FC<SchoolItem> = (
    item: SchoolItem) => {
    return (
        <Card key={item.id} size="md" variant="elevated" className="m-3">
            <Box>
                <LazyLoadImage
                    source={{ uri: item.image }}
                    style={{ width: '100%', height: 200 }}
                    alt={`Image of ${item.name} class`}
                    resizeMode="cover"
                />
                <Box position="absolute" bottom="$2" left="$2">
                    <Text color="$white" size="sm">
                        {item.schoolYear}
                    </Text>
                </Box>
            </Box>
            <VStack p="$4" space="sm">
                <Heading size="md">
                    {item.name}
                </Heading>
                <Text size="sm">
                    {item.shift}
                </Text>
            </VStack>
        </Card>
    );
}