"use client";

import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Link from "next/link";

export default function Checkout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center py-12 px-4">
      <div className="bg-white max-w-lg w-full p-10 rounded-2xl shadow-2xl text-center">
        <IoCheckmarkCircleOutline size={64} className="text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Order Confirmed!</h2>
        <p className="text-gray-600 text-base mb-6">
          Thank you for your purchase. Your order is being processed and you’ll receive updates soon.
        </p>
        <Link href="/">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-xl transition duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
