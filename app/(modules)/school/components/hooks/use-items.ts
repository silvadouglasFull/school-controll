import { useSchoolContext } from "@/app/(modules)/school/context/hooks/use-school-context";
import { useRouter } from "expo-router";

export const UseItems = () => {
    const router = useRouter();
    const {
        state: {
            address,
            id,
            name,
            numberOfClasses
        }
    } = useSchoolContext()
    const { setState, setShowModal } = useSchoolContext()
    const handleEdit = (): void => {
        router.push({
            pathname: `/school/edit/[id]`,
            params: { id, address, name, numberOfClasses: numberOfClasses.toString() }
        });
    };
    const handleDelete = (): void => {
        setState({
            address,
            id,
            name,
            numberOfClasses
        })
        setShowModal(true)
    }
    return {
        handleEdit,
        handleDelete
    }
}