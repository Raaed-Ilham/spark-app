"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import AuthForm from "./AuthForm";
import TestimonialCard from "./TestimonialCard";

const LoginPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <main className="flex w-screen h-screen">
            <div className="flex w-full max-md:flex-col">
                {/* Left section with form */}
                <section className="flex flex-col p-20 w-1/2 max-md:p-6 max-md:w-full">
                    <Logo />

                    <div className="flex flex-col gap-4 mt-20">
                        <h1 className="text-4xl font-medium">
                            {isLogin ? (
                                <span>Welcome back to Room.me!</span>
                            ) : (
                                <span>Create your Room.me account</span>
                            )}
                        </h1>
                        <p className="text-xl text-white">
                            Room.me is an innovative video conference product that
                            revolutionizes virtual meetings.
                        </p>
                    </div>

                    <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />
                </section>

                {/* Right section with image and testimonial */}
                <section className="relative w-1/2 max-md:hidden">
                    <img
                        src="Login Stock Img"
                        alt="Login banner"
                        className="object-cover rounded-3xl size-full"
                    />
                    <TestimonialCard />
                </section>
            </div>
        </main>
    );
};

export default LoginPage;
