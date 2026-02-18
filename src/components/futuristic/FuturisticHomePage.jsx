'use client';

import { useEffect, useState } from 'react';
import FuturisticNavbar from '@/components/futuristic/FuturisticNavbar';
import FuturisticHero from '@/components/futuristic/FuturisticHero';
import ServicesCarousel from '@/components/futuristic/ServicesCarousel';
import ProductsShowcase from '@/components/futuristic/ProductsShowcase';
import IndustriesSection from '@/components/futuristic/IndustriesSection';
import FuturisticFooter from '@/components/futuristic/FuturisticFooter';
import { api } from '@/lib/api';

export default function FuturisticHomePage() {
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [servicesData, productsData, industriesData] = await Promise.all([
          api.getAllServices(),
          api.getAllProducts(),
          api.getAllIndustries(),
        ]);

        setServices(servicesData || []);
        setProducts(productsData || []);
        setIndustries(industriesData || []);
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white text-lg">Loading amazing content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <FuturisticNavbar />
      <FuturisticHero />
      <ServicesCarousel services={services} />
      <ProductsShowcase products={products} />
      <IndustriesSection industries={industries} />
      <FuturisticFooter />
    </div>
  );
}
