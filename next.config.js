/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Uncomment and update when deploying to GitHub Pages with repository name
  // basePath: '/repository-name',
  // assetPrefix: '/repository-name',
}

module.exports = nextConfig
