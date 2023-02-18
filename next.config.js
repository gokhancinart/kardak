/** @type {import('next').NextConfig} */

const nextConfig = {
  // image config url
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig


