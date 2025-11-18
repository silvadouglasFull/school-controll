import { UseItems as UseItemsType } from "@/app/(modules)/class/components/hooks/types/use-items";
import { useContext } from "@/app/(modules)/class/context/hooks/use-school-context";
import { useRouter } from "expo-router";
export const UseItems = (): UseItemsType => {
    const router = useRouter();
    const {
        state: {
            shift,
            id,
            name,
            schoolYear
        }
    } = useContext()
    const { setState, setShowModal } = useContext()
    const handleEdit = (): void => {
        router.push({
            pathname: `/class/edit/[id]`,
            params: { id, shift, name, schoolYear: schoolYear.toString() }
        });
    };
    const deleteItem = (): void => {
        setState({
            shift,
            id,
            name,
            schoolYear
        })
        setShowModal(true)
    }
    return {
        handleEdit,
        deleteItem
    }
}