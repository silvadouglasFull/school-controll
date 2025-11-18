import { ClassContext } from "@/app/(modules)/class/context/context";
import { useContext as useReactContext } from "react";
export const useContext = () => {
    const context = useReactContext(ClassContext);
    if (!context) {
        throw new Error('useContext must be used within a ClassContextProvider');
    }
    return context;
};
