const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://admin.infinityloop.online/api/v2';

export async function fetchServices() {
  try {
    const response = await fetch(`${API_BASE_URL}/services`, { 
      next: { revalidate: 3600 } // Revalidate every hour
    });
    if (!response.ok) throw new Error('Failed to fetch services');
    return await response.json();
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function fetchServiceBySlug(slug) {
  try {
    const response = await fetch(`${API_BASE_URL}/services/${slug}`, {
      next: { revalidate: 3600 }
    });
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

export async function fetchProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      next: { revalidate: 3600 }
    });
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function fetchProductBySlug(slug) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${slug}`, {
      next: { revalidate: 3600 }
    });
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function fetchIndustries() {
  try {
    const response = await fetch(`${API_BASE_URL}/industries`, {
      next: { revalidate: 3600 }
    });
    if (!response.ok) throw new Error('Failed to fetch industries');
    return await response.json();
  } catch (error) {
    console.error('Error fetching industries:', error);
    return [];
  }
}

export async function fetchIndustryBySlug(slug) {
  try {
    const response = await fetch(`${API_BASE_URL}/industries/${slug}`, {
      next: { revalidate: 3600 }
    });
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Error fetching industry:', error);
    return null;
  }
}

export async function fetchCaseStudies() {
  try {
    const response = await fetch(`${API_BASE_URL}/case-studies`, {
      next: { revalidate: 3600 }
    });
    if (!response.ok) throw new Error('Failed to fetch case studies');
    return await response.json();
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
}

export async function fetchFeaturedCaseStudies() {
  try {
    const response = await fetch(`${API_BASE_URL}/case-studies/featured`, {
      next: { revalidate: 3600 }
    });
    if (!response.ok) throw new Error('Failed to fetch featured case studies');
    return await response.json();
  } catch (error) {
    console.error('Error fetching featured case studies:', error);
    return [];
  }
}

export async function fetchHomePageData() {
  try {
    const response = await fetch(`${API_BASE_URL}/home`, {
      next: { revalidate: 3600 }
    });
    if (!response.ok) throw new Error('Failed to fetch home page data');
    return await response.json();
  } catch (error) {
    console.error('Error fetching home page data:', error);
    return null;
  }
}

// Export convenient API object
export const api = {
  getAllServices: fetchServices,
  getServiceBySlug: fetchServiceBySlug,
  getAllProducts: fetchProducts,
  getProductBySlug: fetchProductBySlug,
  getAllIndustries: fetchIndustries,
  getIndustryBySlug: fetchIndustryBySlug,
  getAllCaseStudies: fetchCaseStudies,
  getFeaturedCaseStudies: fetchFeaturedCaseStudies,
  getHomePageData: fetchHomePageData,
};
