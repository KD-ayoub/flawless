/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dvaeb0mxy/**", // only allow your account's images
      },
    ],
  },
};

export default nextConfig;
