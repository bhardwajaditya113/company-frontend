import IndustryDetailClient from '@/components/dynamic-routes/IndustryDetailClient';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://admin.infinityloop.online/api/v2';

// Generate static params for all industries
export async function generateStaticParams() {
  try {
    const response = await fetch(`${API_BASE_URL}/industries`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      console.error('Failed to fetch industries for static generation');
      return [];
    }
    
    const industries = await response.json();
    
    // Return array of slugs for static generation
    return industries.map((industry) => ({
      slug: industry.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for industries:', error);
    return [];
  }
}

export const dynamicParams = true;

export default async function IndustryDetailPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  return <IndustryDetailClient slug={slug} />;
}
