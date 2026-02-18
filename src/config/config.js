const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://admin.infinityloop.online/api/v2';

// Legacy API endpoints (testimonials, sliders, site settings) are at /api/ not /api/v2/
const LEGACY_API_BASE_URL = 
  process.env.NEXT_PUBLIC_LEGACY_API_URL || 
  (process.env.NEXT_PUBLIC_API_URL 
    ? process.env.NEXT_PUBLIC_API_URL.replace('/api/v2', '/api')
    : 'https://admin.infinityloop.online/api');

const IMAGE_BASE_URL =
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL || 'https://admin.infinityloop.online';

export { API_BASE_URL, IMAGE_BASE_URL, LEGACY_API_BASE_URL };