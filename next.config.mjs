/** @type {import('next').NextConfig} */
const nextConfig = {
 
  trailingSlash: true, // ✅ must be top-level
  images: {
    unoptimized: true, // ✅ stays inside images
  },
};

export default nextConfig;