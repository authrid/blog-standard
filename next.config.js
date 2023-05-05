/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  env: {
    OPENAI_API_KEY: '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',
  }
}

module.exports = nextConfig
