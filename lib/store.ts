import { atom } from "jotai";
import { User } from "@/lib/types";

// Auth state atom
export const userAtom = atom<User | null>(null);

// Derived atom to get auth state
export const authStateAtom = atom((get) => ({
  user: get(userAtom),
}));
