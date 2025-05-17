"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Profile() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-[83vh] bg-gray-100 py-10">
        <h1 className="text-3xl font-bold text-center">Profile</h1>
        <div className="flex justify-center items-center mt-10">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">User Information</h2>
            {user ? (
              <>
                <p className="mb-2">
                  <strong>Name:</strong> {user.name || "Not provided"}
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> {user.email}
                </p>
              </>
            ) : (
              <p className="text-gray-500">No user information found. Please log in.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
