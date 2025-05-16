"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[83vh] bg-gray-50 text-black">
        <main className="flex-grow py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg mb-8">
              Have questions, feedback, or want to reach out? We're here to
              help. Contact us using the form below or reach us via email or
              phone.
            </p>

            <div className="text-left mb-8">
              <p>
                <strong>Email:</strong> fishstore@example.com
              </p>
              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p>
                <strong>Location:</strong> Karwar, Karnataka, India
              </p>
            </div>

            <form className="bg-white p-6 rounded-lg shadow-md text-left space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  rows={4}
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
