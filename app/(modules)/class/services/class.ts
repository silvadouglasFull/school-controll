
import { Items } from "@/app/(modules)/class/components/list-items/constants/items";
import type { Item as ItemProps } from '@/app/(modules)/class/components/types/item';
import { Repository } from "./repositories/repository";
export const fetchMoreItems = (page: number): Promise<ItemProps[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            const newItems = Items.slice(page * 5, (page + 1) * 5);
            resolve(newItems);
        }, 1000);
    });
};
export const service = new Repository()
