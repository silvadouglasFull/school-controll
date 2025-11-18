import type { Item } from '@/app/(modules)/class/components/types/item';
import { CardContent } from '@/components/card-content/card-content';
import { Card } from '@gluestack-ui/themed';
import React from 'react';
export const CardItem: React.FC<Item> = (
    item: Item) => {
    return (
        <Card key={item.id} size="md" variant="elevated" className="m-3">
            <CardContent
                descriptionImage={String(item.schoolYear)}
                subTitle={item.shift}
                title={item.name}
                uri={item.image}
            />
        </Card>
    );
}