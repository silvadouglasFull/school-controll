import type { InputFileImage as Props } from '@/components/input-file-image/types/input-file-image';
import {
    Button,
    Icon,
    Text
} from '@gluestack-ui/themed';
import { PlusIcon } from 'lucide-react-native';
import React from 'react';
import { Image } from 'react-native';
export const InputFileImage: React.FC<Props> = ({
    handleImage,
    image
}) => {
    return image ? (
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