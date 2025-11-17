import { SchoolItem } from "@/app/(modules)/school/components/types/table-school";
import { faker } from '@faker-js/faker';

export const schoolItems: SchoolItem[] = Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    name: faker.company.name(),
    address: faker.location.streetAddress(),
    numberOfClasses: faker.number.int({ min: 5, max: 30 }),
}));
