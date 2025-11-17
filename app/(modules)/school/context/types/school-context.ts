import { SchoolItem } from "@/app/(modules)/school/components/types/school-item"

export type SchoolContext = {
    state: SchoolItem
    setState: React.Dispatch<React.SetStateAction<SchoolItem>>
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    showModal: boolean
}