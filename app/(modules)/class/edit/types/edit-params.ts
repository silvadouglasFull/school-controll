import { Item } from "@/app/(modules)/class/components/types/item";

export type SchoolEditParams = Omit<Item, 'numberOfClasses'> & {
    numberOfClasses: string;
};