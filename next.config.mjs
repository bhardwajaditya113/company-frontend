/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Static export for Azure Static Web Apps
    images: {
        domains: [
            '127.0.0.1',
            'localhost',
            'infinityloop.online',
            'admin.infinityloop.online',
            'company-website-backend.azurewebsites.net'
        ],
        unoptimized: true // Required for static export
    },
    env: {
        // Base URL for the Laravel API (v2 prefix included)
        NEXT_PUBLIC_API_URL:
            process.env.NEXT_PUBLIC_API_URL ||
            'https://admin.infinityloop.online/api/v2',
        NEXT_PUBLIC_IMAGE_BASE_URL:
            process.env.NEXT_PUBLIC_IMAGE_BASE_URL ||
            'https://admin.infinityloop.online',
    },
    // Enable compression
    compress: true,
    // Production optimizations
    poweredByHeader: false,
    reactStrictMode: true,
    trailingSlash: true, // Better for static hosting
    // Skip dynamic routes during static export - they'll be handled client-side
    generateBuildId: async () => {
        return 'build-' + Date.now()
    },
};

export default nextConfig;
