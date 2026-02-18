import ServiceDetailsClient from '@/components/dynamic-routes/ServiceDetailsClient';

// Required for static export with dynamic routes
export async function generateStaticParams() {
  // Return a placeholder to satisfy static export requirement
  // Actual routing will be handled client-side
  return [{ slug: 'placeholder' }];
}

export const dynamicParams = true;

export default async function ServiceDetailsPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  return <ServiceDetailsClient slug={slug} />;
}
