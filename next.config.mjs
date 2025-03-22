/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co.com"], // Correct domain
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com", // Correct hostname
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
