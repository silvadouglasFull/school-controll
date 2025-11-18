import { SchoolItem } from "@/app/(modules)/class/components/types/school-item";

export type SchoolEditParams = Omit<SchoolItem, 'numberOfClasses'> & {
    numberOfClasses: string;
};