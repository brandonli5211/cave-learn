import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/cave-learn',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
