"use client";

import React, { useState } from "react";

interface PasswordInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
    value,
    onChange,
    placeholder = "Enter your password"
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            <input
                placeholder={placeholder}
                className="p-4 w-full text-xl rounded-lg border bg-zinc-900 border-neutral-700"
                value={value}
                type={showPassword ? "text" : "password"}
                onChange={(event) => onChange(event.target.value)}
            />
            <button
                type="button"
                className="absolute right-6 top-2/4 -translate-y-2/4"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
            >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path
                        d="M15.0004 3.75C21.7405 3.75 27.348 8.5997 28.5236 15C27.348 21.4002 21.7405 26.25 15.0004 26.25C8.26015 26.25 2.65269 21.4002 1.47705 15C2.65269 8.5997 8.26015 3.75 15.0004 3.75ZM15.0004 23.75C20.2949 23.75 24.8254 20.065 25.9721 15C24.8254 9.93504 20.2949 6.25 15.0004 6.25C9.70575 6.25 5.17528 9.93504 4.02848 15C5.17528 20.065 9.70575 23.75 15.0004 23.75ZM15.0004 20.625C11.8937 20.625 9.37533 18.1066 9.37533 15C9.37533 11.8934 11.8937 9.375 15.0004 9.375C18.1069 9.375 20.6254 11.8934 20.6254 15C20.6254 18.1066 18.1069 20.625 15.0004 20.625ZM15.0004 18.125C16.7263 18.125 18.1254 16.7259 18.1254 15C18.1254 13.2741 16.7263 11.875 15.0004 11.875C13.2745 11.875 11.8753 13.2741 11.8753 15C11.8753 16.7259 13.2745 18.125 15.0004 18.125Z"
                        fill="#878787"
                    />
                </svg>
            </button>
        </div>
    );
};

export default PasswordInput;