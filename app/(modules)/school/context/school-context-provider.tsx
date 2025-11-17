import { SchoolItem } from "@/app/(modules)/school/components/types/school-item";
import { SchoolContext } from "@/app/(modules)/school/context/school-context";
import type { SchoolContextProvider as SchoolContextProviderType } from "@/app/(modules)/school/context/types/school-context-provider";
import React, { useState } from "react";

export const ShcoolContextProvider: React.FC<SchoolContextProviderType> = ({ children }: SchoolContextProviderType) => {
    const [state, setState] = useState<SchoolItem>({
        address: '',
        id: '',
        name: '',
        numberOfClasses: 0
    })
    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <SchoolContext.Provider value={{
            state,
            setState,
            setShowModal,
            showModal
        }}>
            {children}
        </SchoolContext.Provider>
    )
}