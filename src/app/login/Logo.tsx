"use client";

import React from "react";

const Logo: React.FC = () => {
    return (
        <div className="flex gap-4 items-center">
            <div className="flex justify-center items-center w-10 h-10 rounded-md bg-[linear-gradient(135deg,#8B80FF_0%,#5C53BC_100%)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M3 21V19H5V3H15V4H19V19H21V21H17V6H15V21H3ZM11 13C11.2833 13 11.521 12.904 11.713 12.712C11.905 12.52 12.0007 12.2827 12 12C12 11.7167 11.904 11.479 11.712 11.287C11.52 11.095 11.2827 10.9993 11 11C10.7167 11 10.479 11.096 10.287 11.288C10.095 11.48 9.99933 11.7173 10 12C10 12.2833 10.096 12.521 10.288 12.713C10.48 12.905 10.7173 13.0007 11 13Z"
                        fill="white"
                    />
                </svg>
            </div>
            <span className="text-lg font-bold">ROOM.ME</span>
        </div>
    );
};

export default Logo;