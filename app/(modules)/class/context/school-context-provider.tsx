import { Item } from "@/app/(modules)/class/components/types/item";
import { SchoolContext } from "@/app/(modules)/class/context/school-context";
import type { SchoolContextProvider as SchoolContextProviderType } from "@/app/(modules)/class/context/types/school-context-provider";
import React, { useState } from "react";

export const ShcoolContextProvider: React.FC<SchoolContextProviderType> = ({ children }: SchoolContextProviderType) => {
    const [state, setState] = useState<Item>({
        shift: 'Afternoon',
        id: '',
        name: '',
        schoolYear: 0
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