export class DocumentPickerException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DocumentPickerException';
    }

}