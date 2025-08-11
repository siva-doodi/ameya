/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // optional basePath if you deploy to github pages under a subpath
  // basePath: '/ameya',
  // assetPrefix: '/ameya/',
}

module.exports = nextConfig
