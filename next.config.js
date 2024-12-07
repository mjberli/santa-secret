/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['localhost', 'vercel.app'],
    },
    async rewrites() {
      return [
        {
          source: '/api/chat',
          destination: 'https://api.openai.com/v1/chat/completions',
        },
      ];
    },
    env: {
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      ASSISTANT_ID: process.env.ASSISTANT_ID,
    },
  };
  
  module.exports = nextConfig;
  
  