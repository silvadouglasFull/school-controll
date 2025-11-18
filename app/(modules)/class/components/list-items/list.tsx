import { CardItem } from '@/app/(modules)/class/components/card/card-item';
import { UseItems } from '@/app/(modules)/class/components/hooks/use-items';
import type { Item as Props } from '@/app/(modules)/class/components/types/item';
import { MoreActions } from '@/components/more-actions/more-actions';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export const Item: React.FC<{
    items?: Props[]
}> = ({ items }) => {
    const [showActionsheet, setShowActionsheet] = useState(false);
    const { deleteItem, handleEdit } = UseItems()
    const onLongPress = () => {
        setShowActionsheet(true)
    }
    return (
        <>
            {items?.map(item => (
                <TouchableOpacity
                    delayLongPress={1000}
                    onLongPress={onLongPress}
                    key={item.id}>
                    <CardItem {...item} />
                </TouchableOpacity>
            ))}
            <MoreActions
                deleteItem={deleteItem}
                handleEdit={handleEdit}
                setShowActionsheet={setShowActionsheet}
                showActionsheet={showActionsheet}
                actionsheetItemText='Class'
            />
        </>
    );
}
