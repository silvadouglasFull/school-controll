import type { MoreActions as Props } from '@/app/(modules)/class/components/school-list-items/types/more-actions';
import {
    Actionsheet,
    ActionsheetBackdrop,
    ActionsheetContent,
    ActionsheetDragIndicator,
    ActionsheetDragIndicatorWrapper,
    ActionsheetItem,
    ActionsheetItemText,
} from '@gluestack-ui/themed';
import React from 'react';
export const MoreActions: React.FC<Props> = ({
    showActionsheet,
    setShowActionsheet,
    handleDelete,
    handleEdit
}: Props) => {
    const handleClose = () => setShowActionsheet(false);
    return (
        <Actionsheet isOpen={showActionsheet} onClose={handleClose}
            style={{
                height: 300,
            }}
        >
            <ActionsheetBackdrop />
            <ActionsheetContent>
                <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                </ActionsheetDragIndicatorWrapper>
                <ActionsheetItem onPress={() => {
                    handleClose()
                    handleEdit()
                }}>
                    <ActionsheetItemText>Edit School</ActionsheetItemText>
                </ActionsheetItem>
                <ActionsheetItem onPress={() => {
                    handleClose()
                    handleDelete()
                }}>
                    <ActionsheetItemText>Delete School</ActionsheetItemText>
                </ActionsheetItem>
                <ActionsheetItem onPress={() => {
                    handleClose()
                }}>
                    <ActionsheetItemText>Cancel</ActionsheetItemText>
                </ActionsheetItem>
            </ActionsheetContent>
        </Actionsheet>
    );
}
