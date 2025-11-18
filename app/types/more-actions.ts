import { UseItems } from "@/app/(modules)/class/components/hooks/types/use-items";

export type MoreActions = {
    showActionsheet: boolean
    setShowActionsheet: React.Dispatch<React.SetStateAction<boolean>>
} & UseItems