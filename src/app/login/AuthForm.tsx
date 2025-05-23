"use client";

import React, { useState } from "react";
import PasswordInput from "./PasswordInput";
import LoadingButton from "./LoadingButton";
import GoogleSignInButton from "./GoogleSignInButton";
import { useRouter } from "next/navigation";
import { useSessionStore } from "../store/useSessionStore";

interface AuthFormProps {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const login = useSessionStore((state) => state.login);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    // Basic validation
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    setLoading(true);

    // Simulated login
    setTimeout(() => {
      setLoading(false);

      if (
        email === "test@visionexdigital.com.au" &&
        password === "password123"
      ) {
        login(email); // ✅ Set session using Zustand
        router.push("/dashboard"); // ✅ Navigate to dashboard
      } else {
        setError("Invalid credentials. Please try again.");
      }
    }, 1000);
  };

  return (
    <form
      className="flex flex-col gap-6 mt-8 w-full max-w-[592px]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-4">
        <label htmlFor="email" className="text-2xl font-medium">
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email address"
          className="p-4 text-xl rounded-lg border bg-zinc-900 border-neutral-700"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-4">
        <label htmlFor="password" className="text-2xl font-medium">
          Password
        </label>
        <PasswordInput value={password} onChange={setPassword} />
      </div>

      {error && (
        <p className="text-red-400 font-medium text-sm mt-[-10px]">
          {error}
        </p>
      )}

      <LoadingButton
        loading={loading}
        text={isLogin ? "Sign in" : "Create account"}
        className="bg-[linear-gradient(135deg,#8B80FF_0%,#5C53BC_100%)]"
      />

      <GoogleSignInButton />

      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="w-4 h-4 rounded border bg-zinc-900 border-zinc-500"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          <label htmlFor="remember-me" className="text-sm text-neutral-200">
            Remember for 30 days
          </label>
        </div>
        <button
          type="button"
          className="underline text-sm font-medium text-violet-400"
        >
          Forgot password
        </button>
      </div>

      <div className="text-base text-center">
        <span>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
        </span>
        <button
          type="button"
          className="underline font-semibold"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Sign up" : "Sign in"}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
