import type { SchoolContext as ContextType } from "@/app/(modules)/school/context/types/school-context";
import { createContext } from "react";

export const SchoolContext = createContext<ContextType | undefined>(undefined);