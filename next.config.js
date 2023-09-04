/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    sw: "service-worker.js",
})
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains:[
            'm.media-amazon.com',
        ]
    }
}

module.exports = withPWA(nextConfig)