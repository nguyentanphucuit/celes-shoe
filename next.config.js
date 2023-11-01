/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.famousfootwear.com.au", "firebasestorage.googleapis.com"],
  },
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "en",
    // localeDetection: false,
  },
};

module.exports = nextConfig;
