import type { SchoolItem as Props } from '@/app/(modules)/class/components/types/school-item';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { SchoolCardItem } from '../card/school-card-item';
import { UseItems } from '../hooks/use-items';
import { MoreActions } from './school-more-actions';

export const SchoolItem: React.FC<{
    items?: Props[]
}> = ({ items }) => {
    const [showActionsheet, setShowActionsheet] = useState(false);
    const { handleDelete, handleEdit } = UseItems()
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
                    <SchoolCardItem {...item} />
                </TouchableOpacity>
            ))}
            <MoreActions
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                setShowActionsheet={setShowActionsheet}
                showActionsheet={showActionsheet}
            />
        </>
    );
}
