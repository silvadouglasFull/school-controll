export type MoreActions = {
    showActionsheet: boolean
    setShowActionsheet: React.Dispatch<React.SetStateAction<boolean>>
    handleDelete: () => void
    handleEdit: () => void
}