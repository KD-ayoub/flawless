/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            new URL("https://res.cloudinary.com"),
            new URL("https://pbs.twimg.com/media/Gc2GKajXoAA2pc8?format=jpg&name=4096x4096") // Add this line
        ]
    }
};

export default nextConfig;
