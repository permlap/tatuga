/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    loader: 'custom',
    path: 'https://example.com/myaccount/',
  },
}