// app/dashboard/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSessionStore } from "../store/useSessionStore";

export default function DashboardPage() {
    const router = useRouter();
    const { isAuthenticated, logout, email } = useSessionStore();

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace("/"); // Redirect to login
        }
    }, [isAuthenticated, router]);

    const handleLogout = () => {
        logout();
        router.push("/"); // Go back to login after logout
    };

    if (!isAuthenticated) return null; // Prevent flicker

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-zinc-900 text-white">
            <h1 className="text-3xl font-bold mb-4">
                Welcome, you’re logged in{email ? ` as ${email}` : ""}.
            </h1>
            <button
                onClick={handleLogout}
                className="mt-4 px-6 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition"
            >
                Logout
            </button>
        </div>
    );
}
