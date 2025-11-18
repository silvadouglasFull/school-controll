import { Item } from "@/app/(modules)/class/components/types/item"

export type SchoolContext = {
    state: Item
    setState: React.Dispatch<React.SetStateAction<Item>>
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    showModal: boolean
}