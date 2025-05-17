'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { IoTrashBinOutline } from "react-icons/io5";

export default function Cart() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
    setLoading(false);
  }, []);

  const Checkout = () => {
    toast.success("Proceeding to checkout...");
    setTimeout(() => {
      router.push("/checkout");
    }, 1500);
  };

  const calculateTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const isEmpty = cart.length === 0;

  return (
    <>
      <Navbar />
      <div className="min-h-[87vh] bg-gradient-to-r from-gray-100 to-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          {loading ? (
            <div className="text-gray-700 text-center text-xl">Loading...</div>
          ) : isEmpty ? (
            <div className="bg-white p-10 rounded-xl shadow-md text-center">
              <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
              <p className="text-gray-600 mb-6">
                Looks like you haven&apos;t added anything to your cart yet.
              </p>
              <Link href="/product">
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                  Browse Products
                </button>
              </Link>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
              <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-6">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <div className="flex items-center space-x-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-gray-600 text-sm">
                          ₹{item.price} x {item.quantity || 1}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="font-bold text-gray-800">
                        ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                      </p>
                      <button
                        onClick={() => {
                          const updatedCart = cart.filter((_, i) => i !== index);
                          setCart(updatedCart);
                          localStorage.setItem("cart", JSON.stringify(updatedCart));
                          toast.success("Item removed from cart");
                        }}
                        className="text-red-600 hover:text-red-800 transition"
                      >
                        <IoTrashBinOutline size={24} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-between items-center">
                <p className="text-xl font-semibold text-gray-800">
                  Total: ₹{calculateTotal()}
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={clearCart}
                    className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
                  >
                    Clear Cart
                  </button>
                  <button
                    onClick={Checkout}
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 cursor-pointer transition"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
}
