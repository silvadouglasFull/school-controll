import { Item } from "@/app/(modules)/class/components/types/item";

export type Dto = Omit<Item, 'image'> & {
    image?: File
}