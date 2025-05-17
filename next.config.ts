import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ["en", "kn"], // English and Kannada
    defaultLocale: "en",
  },
};

export default nextConfig;
