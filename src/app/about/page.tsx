"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[87vh] bg-gray-50 text-black">
        {/* Banner Image */}
        <div className="relative w-full h-[300px]">
          <Image
            src="/images/fish-banner.jpg"
            alt="Fresh Fish Banner"
            fill
            style={{ objectFit: "cover", opacity: 0.8 }}
            priority
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Fresh Fish Delivered to You
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-grow py-16 px-6">
          <section className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-extrabold mb-6 text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Our Platform
            </motion.h2>

            <motion.p
              className="text-lg mb-6 leading-relaxed text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Our platform connects coastal fisheries with customers across the
              region, delivering the freshest, sustainably sourced seafood to
              your door. We aim to empower local fishermen and promote
              eco-friendly sourcing practices.
            </motion.p>

            <motion.p
              className="text-lg mb-6 leading-relaxed text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              By using technology, we streamline the seafood ordering experience
              — making it fast, transparent, and convenient.
            </motion.p>

            {/* Localization example: English + Kannada */}
            <motion.div
              className="mt-10 text-left text-base text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Localized Information
              </h3>
              <p>
                <strong>English:</strong> We support coastal businesses and
                ensure fresh seafood for everyone.
              </p>
              <p>
                <strong>ಕನ್ನಡ (Kannada):</strong> ನಾವು ಕಡಲ ತೀರದ ವ್ಯಾಪಾರಗಳನ್ನು
                ಬೆಂಬಲಿಸುತ್ತೇವೆ ಮತ್ತು ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ತಾಜಾ ಮೀನು ಒದಗಿಸುತ್ತೇವೆ.
              </p>
            </motion.div>
          </section>

          {/* How It Works */}
          <section className="mt-20 max-w-4xl mx-auto">
            <motion.h3
              className="text-3xl font-bold text-center text-gray-800 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              How It Works
            </motion.h3>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  step: "1. Browse",
                  desc: "Explore our collection of fresh, locally sourced seafood.",
                },
                {
                  step: "2. Order",
                  desc: "Select your favorite fish and place a secure order online.",
                },
                {
                  step: "3. Delivery",
                  desc: "Get it delivered to your doorstep in temperature-controlled packaging.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="bg-white shadow-lg rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  <h4 className="text-xl font-semibold mb-2 text-indigo-600">
                    {item.step}
                  </h4>
                  <p className="text-gray-700">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
