/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Optional, but recommended
    images: {
      domains: ['randomuser.me'], // Add 'randomuser.me' to the list of allowed domains
    },
  };
  
  export default nextConfig;
  