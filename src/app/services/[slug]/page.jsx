import ServiceDetailClient from '@/components/dynamic-routes/ServiceDetailClient';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://admin.infinityloop.online/api/v2';

// Generate static params for all services
export async function generateStaticParams() {
  try {
    const response = await fetch(`${API_BASE_URL}/services`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      console.error('Failed to fetch services for static generation');
      return [];
    }
    
    const services = await response.json();
    
    // Return array of slugs for static generation
    return services.map((service) => ({
      slug: service.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for services:', error);
    return [];
  }
}

export const dynamicParams = true;

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  return <ServiceDetailClient slug={slug} />;
}
