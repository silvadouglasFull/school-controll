import { Item } from "@/app/(modules)/class/components/types/item";
import { ClassContext } from "@/app/(modules)/class/context/context";
import type { ContextProvider as ContextProviderType } from "@/app/types/context-provider";
import React, { useState } from "react";

export const ContextProvider: React.FC<ContextProviderType> = ({ children }: ContextProviderType) => {
    const [state, setState] = useState<Item>({
        shift: 'Afternoon',
        id: '',
        name: '',
        schoolYear: 0
    })
    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <ClassContext.Provider value={{
            state,
            setState,
            setShowModal,
            showModal
        }}>
            {children}
        </ClassContext.Provider>
    )
}