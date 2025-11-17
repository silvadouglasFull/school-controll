import { schoolItems } from "@/app/(modules)/school/components/school-list-items/constants/school-items";
import { SchoolItem } from "@/app/(modules)/school/components/school-list-items/school-list";
import { Button, ScrollView, Spinner, Text, View } from "@gluestack-ui/themed";
import type React from "react";
import { useState } from "react";
import { AppTabs } from "./components/layout/app-tabs";
import { SchoolModalDelete } from "./components/modal/school-delete-modal";
import { SchoolSckleton } from "./components/skeleton/school-preview-loading";
import type { SchoolItem as SchoolItemProps } from "./components/types/school-item";

// Simula uma chamada de API para buscar mais itens
const fetchMoreItems = (page: number): Promise<SchoolItemProps[]> => {
    console.log(`Buscando página: ${page}`);
    return new Promise(resolve => {
        setTimeout(() => {
            // Em um app real, você faria uma chamada de API aqui.
            // Estamos apenas pegando mais itens da lista mockada.
            const newItems = schoolItems.slice(page * 5, (page + 1) * 5);
            resolve(newItems);
        }, 1000);
    });
};

const School: React.FC = () => {
    const [items, setItems] = useState<SchoolItemProps[]>(schoolItems.slice(0, 5));
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleLoadMore = async () => {
        setIsLoading(true);
        const nextPage = page + 1;
        const newItems = await fetchMoreItems(nextPage);
        setItems(prevItems => [...prevItems, ...newItems]);
        setPage(nextPage);
        setIsLoading(false);
    };

    return (
        <View flex={1}>
            <SchoolModalDelete />
            <ScrollView flex={1} mb="$20">
                {!items.length && isLoading && (
                    Array.from({ length: 5 }).map((_, index) => (
                        <SchoolSckleton key={index} />
                    ))
                )}
                <SchoolItem items={items} />
                {isLoading ? (
                    <Spinner size="large" my="$4" />
                ) : (
                    items.length < schoolItems.length && (
                        <Button onPress={handleLoadMore} m="$4">
                            <Text>Load More</Text>
                        </Button>
                    )
                )}
            </ScrollView>
            <AppTabs />
        </View>
    )
}
export default School;