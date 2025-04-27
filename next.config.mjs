/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.pexels.com"],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
        ],
     // Allow Pexels images
      },
};

export default nextConfig;
