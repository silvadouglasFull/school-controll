import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';
import React from 'react';

export const SkeletonLoading: React.FC = () => {
    return (
        <Box className="w-[300px] gap-4 p-3 rounded-md bg-background-100">
            <Skeleton variant="sharp" className="h-[100px]" />
            <SkeletonText _lines={3} className="h-2" />
            <HStack className="gap-1 align-middle">
                <SkeletonText _lines={2} gap={1} className="h-2 w-2/5" />
            </HStack>
        </Box>
    );
}
