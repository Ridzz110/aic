// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['example.com', 'images.unsplash.com', 'www.pexels.com'], // Add domains of image sources
      formats: ['image/avif', 'image/webp'], // Optional: Specify supported image formats
    },
  };
  
  export default nextConfig;
  