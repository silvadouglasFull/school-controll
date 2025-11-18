import { useSchoolContext } from "@/app/(modules)/class/context/hooks/use-school-context";
import { useRouter } from "expo-router";

export const UseItems = () => {
    const router = useRouter();
    const {
        state: {
            shift,
            id,
            name,
            schoolYear
        }
    } = useSchoolContext()
    const { setState, setShowModal } = useSchoolContext()
    const handleEdit = (): void => {
        router.push({
            pathname: `/class/edit/[id]`,
            params: { id, shift, name, schoolYear: schoolYear.toString() }
        });
    };
    const handleDelete = (): void => {
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
        handleDelete
    }
}