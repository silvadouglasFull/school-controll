import { Row } from '@/app/(modules)/school/components/table/row';
import type { SchoolItem as Props } from '@/app/(modules)/school/components/types/table-school';
import {
    Table,
    TableBody,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import React from 'react';

export const SchoolItem: React.FC<{
    items?: Props[]
}> = ({ items }) => {
    return (
        <Table className="w-full">
            <TableHeader>
                <TableRow>
                    <TableHead>name</TableHead>
                    <TableHead>address</TableHead>
                    <TableHead>numberOfClasses</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {items?.map(item => (
                    <Row {...item} key={item.id} />
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableHead>Total</TableHead>
                    <TableHead></TableHead>
                    <TableHead>
                        {items?.length}
                    </TableHead>
                </TableRow>
            </TableFooter>
        </Table>
    );
}
