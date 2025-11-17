import { SchoolItem } from "@/app/(modules)/school/components/types/school-item";

export type SchoolEditParams = Omit<SchoolItem, 'numberOfClasses'> & {
    numberOfClasses: string;
};