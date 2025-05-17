'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Cart() {
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
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md w-full max-w-md text-center">
            <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
            <p className="text-gray-600 mb-6">Your cart is currently empty.</p>
            <Link href="/product">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Go to Products
              </button>
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
