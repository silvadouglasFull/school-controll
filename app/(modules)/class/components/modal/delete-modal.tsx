import { useContext } from '@/app/(modules)/class/context/hooks/use-context';
import { ModalDeleteContent } from '@/components/modal/modal-delete-content';
import {
    Modal,
    ModalBackdrop,
    ModalContent
} from '@gluestack-ui/themed';
import React from 'react';
export const ModalDelete: React.FC = () => {
    const {
        state: {
            shift,
            name
        },
        setShowModal,
        showModal
    } = useContext()
    const cancelAction = () => {
        setShowModal(false)
    }
    const confirmedAction = () => {
        setShowModal(false)
    }
    const onClose = () => setShowModal(false)
    return (
        <Modal
            isOpen={showModal}
            onClose={onClose}
            size='lg'
        >
            <ModalBackdrop />
            <ModalContent>
                <ModalDeleteContent
                    cancelAction={cancelAction}
                    confirmedAction={confirmedAction}
                    messageConfirmedDelete={`Do you want to delete School ${name} located at the shift ${shift}?`}
                    title={`Delete School ${name}`}
                />
            </ModalContent>
        </Modal>
    );
}
