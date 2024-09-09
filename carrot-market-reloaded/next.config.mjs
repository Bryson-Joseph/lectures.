import { hostname } from 'os'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'upload.wikimedia.org' },
      {
        hostname: 'imagedelivery.net',
      },
      {
        hostname: 'www.spectator.co.uk',
      },
      {
        hostname: 'img1.wsimg.com',
      },
    ],
  },
}

export default nextConfig
