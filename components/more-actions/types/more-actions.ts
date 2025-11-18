import { UseItems } from "@/app/types/use-items";

export type MoreActions = {
    showActionsheet: boolean
    setShowActionsheet: React.Dispatch<React.SetStateAction<boolean>>
    actionsheetItemText: string
} & UseItems