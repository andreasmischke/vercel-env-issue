/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    storybookUrl: process.env.STORYBOOK_URL ?? '<fallback value in next.config.js>',
    nextAuthUrl: process.env.NEXTAUTH_URL ?? '<fallback value in next.config.js>',
  }
}

module.exports = nextConfig
