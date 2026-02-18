"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Building,
} from "lucide-react";

export default function IndustryDetailPage({ industry, relatedProducts = [], relatedServices = [] }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-700 to-cyan-800 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-indigo-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Building className="h-10 w-10" />
              </div>
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                Industry Solutions
              </span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
              {industry.name}
            </h1>
            
            <p className="text-2xl text-indigo-100 mb-8">
              {industry.tagline}
            </p>
            
            <p className="text-lg leading-8 text-indigo-50 max-w-3xl">
              {industry.description}
            </p>
            
            <div className="mt-10 flex items-center gap-6">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Tabs defaultValue="challenges" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="challenges">Industry Challenges</TabsTrigger>
              <TabsTrigger value="solutions">Our Solutions</TabsTrigger>
            </TabsList>

            <TabsContent value="challenges">
              <div className="mx-auto max-w-2xl text-center mb-12">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
                  Challenges We Address
                </h2>
                <p className="text-lg text-gray-600">
                  Understanding the unique pain points in {industry.name.toLowerCase()}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {industry.challenges?.map((challenge, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-red-200 bg-white p-6 shadow-sm"
                  >
                    <AlertCircle className="h-6 w-6 text-red-500 mb-3" />
                    <h3 className="font-semibold text-gray-900 text-lg">{challenge}</h3>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="solutions">
              <div className="mx-auto max-w-2xl text-center mb-12">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
                  How We Help
                </h2>
                <p className="text-lg text-gray-600">
                  Proven solutions tailored for {industry.name.toLowerCase()}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {industry.solutions?.map((solution, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-green-200 bg-white p-6 shadow-sm"
                  >
                    <Lightbulb className="h-6 w-6 text-green-500 mb-3" />
                    <h3 className="font-semibold text-gray-900 text-lg">{solution}</h3>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Relevant Products</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
                Products For This Industry
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-indigo-300"
                >
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.tagline}</p>
                  <div className="flex items-center text-indigo-600 font-medium">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services Section */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Relevant Services</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
                Services For This Industry
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-blue-300"
                >
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{service.tagline}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-blue-700 to-cyan-800 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Ready to Transform Your {industry.name}?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-indigo-100">
            Let's discuss how our industry-specific solutions can help you achieve your goals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button size="xl" className="bg-white text-indigo-600 hover:bg-indigo-50">
              Contact Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="xl" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
              Download Industry Brief
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
