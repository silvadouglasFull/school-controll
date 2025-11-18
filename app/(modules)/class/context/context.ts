import type { ClassContext as ContextType } from "@/app/(modules)/class/context/types/context";
import { createContext } from "react";

export const ClassContext = createContext<ContextType | undefined>(undefined);