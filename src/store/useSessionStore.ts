import { create } from "zustand";

interface SessionState {
    isAuthenticated: boolean;
    email: string | null;
    login: (email: string) => void;
    logout: () => void;
}

export const useSessionStore = create<SessionState>((set) => ({
    isAuthenticated: false,
    email: null,
    login: (email: string) => set({ isAuthenticated: true, email }),
    logout: () => set({ isAuthenticated: false, email: null }),
}));
