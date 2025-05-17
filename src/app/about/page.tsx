"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[83vh]">
        <main className="flex-grow py-12 px-4 text-black bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Our Project</h1>
            <p className="text-lg mb-8">
              This website is a fish sale platform designed to provide fresh,
              high-quality seafood to customers quickly and conveniently. Our
              goal is to help local fisheries grow and make it easy for people
              to order seafood directly from trusted sources.
            </p>

            <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* Team Member 1 */}

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
                <Image
                  src="/images/products/bangdo.jpeg"
                  alt="Teammate"
                  width={128}
                  height={128}
                  className="rounded-full mx-auto mb-4"
                />

                <h3 className="text-xl font-bold text-center">
                  [Teammate Name]
                </h3>
                <p className="mt-2 text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit ex odit dolores?
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
                <Image
                  src="/images/products/bangdo.jpeg"
                  alt="Teammate"
                  width={128}
                  height={128}
                  className="rounded-full mx-auto mb-4"
                />

                <h3 className="text-xl font-bold text-center">
                  [Teammate Name]
                </h3>
                <p className="mt-2 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore nobis cupiditate tempore.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
