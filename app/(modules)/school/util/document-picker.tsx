import * as DocumentPicker from 'expo-document-picker';

export const pickDocument = async (): Promise<string | undefined> => {
    try {
        const result = await DocumentPicker.getDocumentAsync({
            type: 'image/*',
            copyToCacheDirectory: true,
        });
        return (!result.canceled && result.assets[0].uri) ? result.assets[0].uri : ''
    } catch (err) {
        console.error('Error picking document:', err);
    }
};