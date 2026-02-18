import ProductDetailClient from '@/components/dynamic-routes/ProductDetailClient';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://admin.infinityloop.online/api/v2';

// Generate static params for all products
export async function generateStaticParams() {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      console.error('Failed to fetch products for static generation');
      return [];
    }
    
    const products = await response.json();
    
    // Return array of slugs for static generation
    return products.map((product) => ({
      slug: product.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for products:', error);
    return [];
  }
}

export const dynamicParams = true;

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  return <ProductDetailClient slug={slug} />;
}
