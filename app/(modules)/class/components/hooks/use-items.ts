import { useContext } from "@/app/(modules)/class/context/hooks/use-context";
import { UseItems as UseItemsType } from "@/app/types/use-items";
import { useRouter } from "expo-router";
export const UseItems = (): UseItemsType => {
    const router = useRouter();
    const {
        state,
        setState,
        setShowModal
    } = useContext()
    const handleEdit = (): void => {
        const { schoolYear, ...rest } = state
        router.push({
            pathname: `/class/edit/[id]`,
            params: { ...rest, schoolYear: schoolYear.toString() }
        });
    };
    const deleteItem = (): void => {
        setState({ ...state })
        setShowModal(true)
    }
    return {
        handleEdit,
        deleteItem
    }
}