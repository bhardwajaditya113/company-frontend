import BlogDetailClient from '@/components/dynamic-routes/BlogDetailClient';

// Required for static export with dynamic routes
export async function generateStaticParams() {
  // Return a placeholder to satisfy static export requirement
  // Actual routing will be handled client-side
  return [{ slug: 'placeholder' }];
}

export const dynamicParams = true;

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  return <BlogDetailClient slug={slug} />;
}
