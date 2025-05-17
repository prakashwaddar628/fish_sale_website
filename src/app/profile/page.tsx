/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-comment-textnodes */

"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

export default function Profile() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [cart, setCart] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
    setOrders(JSON.parse(localStorage.getItem("orders") || "[]"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-[87vh] bg-gradient-to-b from-slate-100 to-slate-200 py-12 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">
          {/* Profile Header */}
          <div className="flex items-center justify-between border-b pb-6">
            <div className="flex items-center space-x-4">
              <FaUserCircle className="text-gray-500" size={50} />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Welcome, {user?.name || "Guest"}
                </h2>
                <p className="text-gray-600">{user?.email || "Not logged in"}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Order History */}
            <section className="bg-gray-50 p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Order History</h3>
              {orders.length > 0 ? (
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {orders.map((order, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 bg-white shadow-sm"
                    >
                      <p className="font-medium text-gray-700">Order #{index + 1}</p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc list-inside">
                        {order.items.map((item: any, i: number) => (
                          <li key={i}>
                            {item.name} x {item.quantity} - ₹{item.price}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-2 text-right font-semibold text-green-600">
                        Total: ₹{order.total}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No orders found.</p>
              )}
            </section>

            {/* Cart Summary */}
            <section className="bg-gray-50 p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Cart Summary</h3>
              {cart.length > 0 ? (
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm text-gray-700 border-b pb-2"
                    >
                      <span>
                        {item.name} x {item.quantity || 1}
                      </span>
                      <span>₹{(item.price * (item.quantity || 1)).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="text-right font-bold pt-2">
                    Total: ₹
                    {cart
                      .reduce(
                        (acc, item) => acc + item.price * (item.quantity || 1),
                        0
                      )
                      .toFixed(2)}
                  </div>
                  <div className="text-right mt-3">
                    <Link href="/cart">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                        Go to Cart
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-sm">Your cart is empty.</p>
              )}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
