// app/store/useSessionStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface SessionState {
    email: string | null;
    isAuthenticated: boolean;
    login: (email: string) => void;
    logout: () => void;
}

export const useSessionStore = create<SessionState>()(
    persist(
        (set) => ({
            email: null,
            isAuthenticated: false,
            login: (email) =>
                set({ email, isAuthenticated: true }),
            logout: () => set({ email: null, isAuthenticated: false }),
        }),
        {
            name: "session-storage", // key in localStorage
            storage: createJSONStorage(() => localStorage),
        }
    )
);
