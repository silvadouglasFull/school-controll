import { Items } from "@/app/(modules)/class/components/list-items/constants/items";
import { Item } from "@/app/(modules)/class/components/list-items/list";
import { ModalDelete } from "@/app/(modules)/class/components/modal/delete-modal";
import type { Item as ItemProps } from '@/app/(modules)/class/components/types/item';
import { service } from "@/app/(modules)/class/services/class";
import { SkeletonLoading } from '@/components/skeleton/preview-loading';
import { AppTabs } from '@/components/tabs/app-tabs';
import { Button, ScrollView, Spinner, Text, View } from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import type React from "react";
import { useState } from "react";

const ClassScreen: React.FC = () => {
    const { navigate } = useRouter()
    const [items, setItems] = useState<ItemProps[]>(Items.slice(0, 5));
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleLoadMore = async () => {
        setIsLoading(true);
        const nextPage = page + 1;
        const newItems = await service.getPaginated(nextPage, 5);
        setItems(prevItems => [...prevItems, ...newItems]);
        setPage(nextPage);
        setIsLoading(false);
    };

    return (
        <View flex={1}>
            <ModalDelete />
            <ScrollView flex={1} mb="$20">
                {!items.length && isLoading && (
                    Array.from({ length: 5 }).map((_, index) => (
                        <SkeletonLoading key={index} />
                    ))
                )}
                <Item items={items} />
                {isLoading ? (
                    <Spinner size="large" my="$4" />
                ) : (
                    items.length < Items.length && (
                        <Button onPress={handleLoadMore} m="$4">
                            <Text>Load More</Text>
                        </Button>
                    )
                )}
            </ScrollView>
            <AppTabs
                handleFilter={() => { }}
                handleNew={() => navigate('/class/new')}
            />
        </View>
    )
}
export default ClassScreen;