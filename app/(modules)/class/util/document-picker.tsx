import * as DocumentPicker from 'expo-document-picker';
import { DocumentPickerException } from './document-picker-exceptions';

export const pickDocument = async (): Promise<DocumentPicker.DocumentPickerAsset | null> => {
    try {
        const result = await DocumentPicker.getDocumentAsync({
            type: 'image/*',
            copyToCacheDirectory: true,
        });
        return (!result.canceled && result.assets[0].uri) ? result.assets[0] : null
    } catch (err) {
        if (err instanceof Error)
            throw new DocumentPickerException(`Error picking document: ${err.message}`)
        throw new DocumentPickerException('Error picking document')
    }
};