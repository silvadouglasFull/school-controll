import { useSchoolContext } from '@/app/(modules)/class/context/hooks/use-school-context';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { CloseIcon, Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import {
    Modal,
    ModalBackdrop,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from '@gluestack-ui/themed';
import React from 'react';

export const SchoolModalDelete: React.FC = () => {
    const {
        state: {
            shift,
            name
        },
        setShowModal,
        showModal
    } = useSchoolContext()
    return (
        <Modal
            isOpen={showModal}
            onClose={() => {
                setShowModal(false);
            }}
            size='lg'
        >
            <ModalBackdrop />
            <ModalContent>
                <ModalHeader>
                    <Heading size="lg">
                        Delete School {name}
                    </Heading>
                    <ModalCloseButton>
                        <Icon as={CloseIcon} />
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                    <Text>
                        Do you want to delete School {name} located at the shift {shift}?
                    </Text>
                </ModalBody>
                <ModalFooter>
                    <Button
                        variant="outline"
                        action="secondary"
                        className="mr-3"
                        onPress={() => {
                            setShowModal(false);
                        }}
                    >
                        <ButtonText>Cancel</ButtonText>
                    </Button>
                    <Button
                        variant='solid'
                        action='primary'
                        onPress={() => {
                            setShowModal(false);
                        }}
                    >
                        <ButtonText>Yes</ButtonText>
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
