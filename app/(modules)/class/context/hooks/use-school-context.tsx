import { SchoolContext } from "@/app/(modules)/class/context/school-context";
import { useContext } from "react";
export const useContext = () => {
    const context = useContext(SchoolContext);
    if (!context) {
        throw new Error('useContext must be used within a ShcoolContextProvider');
    }
    return context;
};
