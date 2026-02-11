import { atom } from "jotai";
import { User } from "@/lib/types";

export const userAtom = atom<User | null>(null);
