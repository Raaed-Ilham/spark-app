"use client";

import React from "react";

interface GoogleSignInButtonProps {
    onClick?: () => void;
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({ onClick }) => {
    return (
        <button
            type="button"
            className="flex gap-4 justify-center items-center p-5 text-lg font-semibold bg-white rounded-lg text-zinc-900"
            onClick={onClick}
        >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                    d="M20.68 11.2295C20.68 10.5145 20.6158 9.82699 20.4967 9.16699H11V13.0674H16.4267C16.1929 14.3278 15.4825 15.3957 14.4146 16.1107V18.6407H17.6733C19.58 16.8853 20.68 14.3003 20.68 11.2295Z"
                    fill="#4285F4"
                />
                <path
                    d="M11.0001 21.0835C13.7226 21.0835 16.0051 20.1806 17.6734 18.6406L14.4147 16.1106C13.5118 16.7156 12.3568 17.0731 11.0001 17.0731C8.37384 17.0731 6.15092 15.2993 5.35801 12.916H1.98926V15.5285C3.64842 18.8239 7.05842 21.0835 11.0001 21.0835Z"
                    fill="#34A853"
                />
                <path
                    d="M5.358 12.9158C5.15633 12.3108 5.04175 11.6646 5.04175 11C5.04175 10.3354 5.15633 9.68918 5.358 9.08418V6.47168H1.98925C1.28341 7.8768 0.916126 9.42757 0.916749 11C0.916749 12.6271 1.30633 14.1671 1.98925 15.5283L5.358 12.9158Z"
                    fill="#FBBC05"
                />
                <path
                    d="M11.0001 4.92741C12.4805 4.92741 13.8097 5.43616 14.8547 6.43533L17.7468 3.54324C16.0005 1.91616 13.718 0.916992 11.0001 0.916992C7.05842 0.916992 3.64842 3.17658 1.98926 6.47199L5.35801 9.08449C6.15092 6.70116 8.37384 4.92741 11.0001 4.92741Z"
                    fill="#EA4335"
                />
            </svg>
            <span>Sign in with Google</span>
        </button>
    );
};

export default GoogleSignInButton;