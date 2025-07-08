"use client";
import { useState } from "react";
import Logo from "./Logo";
export default function SignInModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        if (rememberMe) localStorage.setItem("userLoggedIn", "true");
        alert("Login successful!");
        onClose();
      } else {
        alert(data.error || "Login failed.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong!");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex justify-center items-center p-4 overflow-y-auto">
      <div className="bg-white p-10 rounded-xl w-full max-w-lg min-h-[550px] relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl text-gray-500"
        >
          &times;
        </button>
        <div className="flex justify-center mb-6">
          <img
            src="/images/kompass-form-logo.jpg"
            alt="Company Logo"
            className="w-72 h-28 sm:w-80 sm:h-32 object-contain"
          />
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block font-semibold mb-2 text-gray-400">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Email"
              required
              className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none text-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <label className="block font-semibold mb-2 text-gray-400">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full border border-gray-300 rounded-md p-2 
             text-gray-700 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-2 right-2 text-xs text-blue-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400  text-base">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
            <a href="#" className="text-red-500 hover:underline text-base">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
}
