import type { CardItem as Props } from '@/components/card-content/types/card-content'
import { Box, Heading, Text, VStack } from "@gluestack-ui/themed"
import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
export const CardContent: React.FC<Props> = ({
    descriptionImage,
    subTitle,
    title,
    uri,
}: Props) => {
    return (
        <>
            <Box>
                {uri && (
                    <LazyLoadImage
                        src={uri}
                        style={{ width: '100%', height: 200 }}
                        alt={`Image of ${title}`}
                    />
                )}
                <Box position="absolute" bottom="$2" left="$2">
                    <Text color="$white" size="sm">
                        {descriptionImage}
                    </Text>
                </Box>
            </Box>
            <VStack p="$4" space="sm">
                <Heading size="md">
                    {title}
                </Heading>
                <Text size="sm">
                    {subTitle}
                </Text>
            </VStack>
        </>
    )
}