'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Login() {
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
        {/* Overlay to darken the image for readability */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        <main className="flex-grow flex items-center justify-center relative z-10 px-4">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md w-full max-w-sm">
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="enter your email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  placeholder="enter your password"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Login
              </button>
              <div className="text-sm text-center mt-4 text-blue-600 hover:underline cursor-pointer">
                Forgot password?
              </div>
              <div className="text-sm text-center mt-2 text-gray-600">
                Don't have an account?{" "}
                <a href="/register" className="text-blue-600 hover:underline">
                  Register
                </a>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
