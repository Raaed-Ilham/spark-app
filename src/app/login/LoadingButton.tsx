"use client";

import React from "react";

interface LoadingButtonProps {
    loading: boolean;
    text: string;
    loadingText?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
    loading,
    text,
    loadingText,
    type = "submit",
    onClick,
    className = "",
}) => {
    return (
        <button
            type={type}
            className={`flex justify-center items-center gap-2 p-5 text-lg font-semibold rounded-lg ${className}`}
            onClick={onClick}
            style={{
                opacity: loading ? "0.7" : "1",
            }}
            disabled={loading}
        >
            {loading ? (
                <>
                    <svg
                        className="animate-spin w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            className="opacity-25"
                        />
                        <path
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            className="opacity-75"
                        />
                    </svg>
                    {loadingText && <span>{loadingText}</span>}
                </>
            ) : (
                <span>{text}</span>
            )}
        </button>
    );
};

export default LoadingButton;
