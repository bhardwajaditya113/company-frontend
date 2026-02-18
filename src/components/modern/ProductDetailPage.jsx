"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowRight,
  CheckCircle,
  ArrowLeft,
  Briefcase,
  DollarSign,
  Users,
  TrendingUp,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

export default function ProductDetailPage({ product }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm mb-4">
                {product.category}
              </span>
              
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
                {product.name}
              </h1>
              
              <p className="text-2xl text-purple-100 mb-6">
                {product.tagline}
              </p>
              
              <p className="text-lg leading-8 text-purple-50 mb-8">
                {product.description}
              </p>
              
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                  View Pricing
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 shadow-2xl">
                <div className="h-full w-full rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <Briefcase className="h-24 w-24 text-white/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-purple-600">Key Features</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
              Everything You Need to Succeed
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-purple-300"
              >
                <Zap className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-purple-600">Professional Services</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
              Expert Services to Maximize Value
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our team of experts ensures successful implementation and ongoing optimization
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {product.services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm transition-all hover:shadow-lg"
              >
                <h3 className="font-bold text-gray-900 text-xl mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm font-medium text-gray-500">Pricing</span>
                  <span className="font-semibold text-purple-600">{service.pricing}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-purple-600">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
              Plans That Scale With Your Business
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {product.pricing.license.map((tier, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-8 shadow-sm transition-all hover:shadow-lg ${
                  index === 1
                    ? "border-purple-500 bg-gradient-to-br from-purple-50 to-white scale-105 relative"
                    : "border-gray-200 bg-white"
                }`}
              >
                {index === 1 && (
                  <div className="absolute top-0 right-6 -translate-y-1/2">
                    <span className="inline-flex items-center rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.tier}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-gray-500 ml-2">/month</span>}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={`w-full ${
                    index === 1
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                >
                  {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            ))}
          </div>

          {product.pricing.addons && (
            <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Add-ons & Extensions</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.pricing.addons.map((addon, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{addon}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Target Segments */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-purple-600">Who It's For</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
              Ideal Customer Segments
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {product.segments.map((segment, index) => (
              <div
                key={index}
                className="rounded-full border border-gray-200 bg-white px-6 py-3 shadow-sm transition-all hover:shadow-md hover:border-purple-300"
              >
                <span className="font-medium text-gray-900">{segment}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-purple-600">Market Position</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
              Competing With The Best
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8">
            <h3 className="font-bold text-gray-900 text-lg mb-4">Key Competitors</h3>
            <div className="flex flex-wrap gap-3">
              {product.competitors.map((competitor, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {competitor}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-purple-100">
            Join hundreds of successful businesses using {product.name}
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button size="xl" className="bg-white text-purple-600 hover:bg-purple-50">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="xl" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
