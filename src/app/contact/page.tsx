"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast, ToastContainer } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        setErrors({ form: result.error || "Failed to send message" });
        toast.error(result.error || "Failed to send message. Please try again.")
      } else {
        setSubmitted(true);
        setErrors({});
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      setErrors({ form: "Network error. Please try again later." });
      toast.error("Network error. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[87vh] bg-gray-50 text-black">
        <main className="flex-grow py-12 px-4">
          <div className="max-w-3xl mx-auto text-center animate-fadeIn">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg mb-8">
              Have questions, feedback, or want to reach out? We&apos;re here to
              help. Contact us using the form below or reach us via email or
              phone.
            </p>

            <div className="text-left mb-8 space-y-1">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:fishstore@example.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  fishstore@example.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+911234567890"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  +91 123-456-7890
                </a>
              </p>
              <p>
                <strong>Location:</strong> Karwar, Karnataka, India
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
                Thank you for contacting us! We&apos;ll get back to you soon.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md text-left space-y-6"
              noValidate
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>

            <p className="mt-6 text-sm text-gray-600 italic">
              We typically respond within 1-2 business days.
            </p>
          </div>
        </main>
        <ToastContainer />
      </div>
      <Footer />

      {/* Simple fade-in animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
