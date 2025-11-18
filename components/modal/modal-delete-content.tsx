import type { ModalDeleteContent as Props } from "@/components/modal/types/modal-delete-content";
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { CloseIcon, Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import {
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    ModalHeader
} from '@gluestack-ui/themed';
import React from 'react';
export const ModalDeleteContent: React.FC<Props> = ({
    cancelAction,
    confirmedAction,
    messageConfirmedDelete,
    title
}: Props) => {
    return (
        <>
            <ModalHeader>
                <Heading size="lg">
                    {title}
                </Heading>
                <ModalCloseButton>
                    <Icon as={CloseIcon} />
                </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
                <Text>
                    {messageConfirmedDelete}
                </Text>
            </ModalBody>
            <ModalFooter>
                <Button
                    variant="outline"
                    action="secondary"
                    className="mr-3"
                    onPress={cancelAction}
                >
                    <ButtonText>Cancel</ButtonText>
                </Button>
                <Button
                    variant='solid'
                    action='primary'
                    onPress={confirmedAction}
                >
                    <ButtonText>Yes</ButtonText>
                </Button>
            </ModalFooter>
        </>
    )
}