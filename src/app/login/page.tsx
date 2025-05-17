"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      //check if user user and password is correct
      if (!data.user) {
        setError("Invalid email or password");
        toast.error("Invalid email or password");
        return;
      }

      toast.success("Login successful!");
      setTimeout(() => {
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/");
      }, 1000);
    } catch {
      setError("Login failed. Please try again.");
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div
        className="flex flex-col min-h-[83vh] relative"
        style={{
          backgroundImage: "url('/images/products/prawns.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />

        <main className="flex-grow flex items-center justify-center relative z-10 px-4">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md w-full max-w-sm">
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <div className="text-red-500 text-sm mb-4">{error}</div>
              )}

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="enter your email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  required
                  value={password}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="enter your password"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <div className="flex justify-end">
                  <div
                    className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer mt-1"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "Hide" : "Show"} Password
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-blue-600 text-white py-2 rounded transition ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                }`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              <div className="text-sm text-center mt-4 text-blue-600 hover:text-blue-800 cursor-pointer">
                Forgot password?
              </div>
              <div className="text-sm text-center mt-2 text-gray-600">
                Don&apos;t have an account?{" "}
                <a href="/register" className="text-blue-600 hover:text-blue-800">
                  Register
                </a>
              </div>
            </form>
          </div>
        </main>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
}
