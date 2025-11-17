import { SchoolItem } from "@/app/(modules)/school/components/types/table-school";
import { TableData, TableRow } from "@/components/ui/table";
import React from "react";

export const Row: React.FC<SchoolItem> = ({
    address,
    id,
    name,
    numberOfClasses
}) => {
    return (
        <TableRow key={id}>
            <TableData>
                {name}
            </TableData>
            <TableData>
                {address}
            </TableData>
            <TableData>
                {numberOfClasses}
            </TableData>
        </TableRow>
    )
}