import { SchoolContext } from "@/app/(modules)/class/context/school-context";
import { useContext } from "react";
export const useSchoolContext = () => {
    const context = useContext(SchoolContext);
    if (!context) {
        throw new Error('useSchoolContext must be used within a ShcoolContextProvider');
    }
    return context;
};
