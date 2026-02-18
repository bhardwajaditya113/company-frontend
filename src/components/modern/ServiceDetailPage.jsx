"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  CheckCircle,
  ArrowLeft,
  Sparkles,
  TrendingUp,
  Users,
  Award,
  Code,
  Cloud,
  Brain,
  Shield,
  Building,
  Factory,
  Heart,
} from "lucide-react";

const iconMap = {
  lightbulb: Sparkles,
  cloud: Cloud,
  code: Code,
  building: Building,
  brain: Brain,
  shield: Shield,
  users: Users,
  cpu: Factory,
  settings: Code,
  layers: Building,
  leaf: Heart,
};

export default function ServiceDetailPage({ service }) {
  const Icon = iconMap[service.icon] || Code;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Icon className="h-10 w-10" />
              </div>
              <div>
                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                  Professional Services
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
              {service.name}
            </h1>
            
            <p className="text-2xl text-blue-100 mb-8">
              {service.tagline}
            </p>
            
            <p className="text-lg leading-8 text-blue-50 max-w-3xl">
              {service.description}
            </p>
            
            <div className="mt-10 flex items-center gap-6">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">What We Deliver</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
              Our Service Offerings
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.offerings.map((offering, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-300"
              >
                <CheckCircle className="h-6 w-6 text-green-500 mb-3" />
                <h3 className="font-semibold text-gray-900 text-lg">{offering}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-base font-semibold leading-7 text-blue-600">Business Value</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
                Measurable Business Outcomes
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our solutions are designed to deliver tangible results that impact your bottom line.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm"
                >
                  <TrendingUp className="h-6 w-6 text-blue-600 mb-3" />
                  <p className="font-medium text-gray-900">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Flexible Engagement</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
              Choose How We Work Together
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                title: "Fixed Price",
                description: "Well-defined scope with predictable costs and timelines",
                features: ["Clear deliverables", "Fixed timeline", "Budget certainty", "Risk mitigation"],
              },
              {
                title: "Time & Materials",
                description: "Flexible engagement for evolving requirements",
                features: ["Agile sprints", "Scalable team", "Flexible scope", "Transparent billing"],
              },
              {
                title: "Managed Services",
                description: "Ongoing support and operations with SLA guarantees",
                features: ["24/7 support", "SLA-driven", "Proactive monitoring", "Dedicated team"],
              },
            ].map((model, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-blue-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{model.title}</h3>
                <p className="text-gray-600 mb-6">{model.description}</p>
                <ul className="space-y-3">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-blue-600">FAQ</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
              Frequently Asked Questions
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is the typical engagement timeline?</AccordionTrigger>
              <AccordionContent>
                Engagement timelines vary based on scope and complexity. Small projects typically take 2-3 months, 
                while enterprise transformations can span 12-18 months. We provide detailed timelines during the discovery phase.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you provide post-implementation support?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer comprehensive support packages including warranty periods, managed services, 
                and ongoing enhancements. Our SLA-driven support ensures your systems remain optimized and available.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can you integrate with our existing systems?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We specialize in integrating with legacy systems, enterprise platforms, and third-party 
                applications. Our approach ensures minimal disruption while maximizing interoperability.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What industries do you serve?</AccordionTrigger>
              <AccordionContent>
                We serve clients across all major industries including BFSI, Healthcare, Retail, Manufacturing, 
                Energy, Telecommunications, and Public Sector. Our teams include industry-specific experts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How do you ensure data security and compliance?</AccordionTrigger>
              <AccordionContent>
                Security is embedded in our delivery methodology. We follow industry standards (ISO 27001, SOC 2), 
                implement defense-in-depth strategies, and ensure compliance with regulations like GDPR, HIPAA, and PCI-DSS.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-blue-100">
            Let's discuss how {service.name} can transform your business.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button size="xl" className="bg-white text-blue-600 hover:bg-blue-50">
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="xl" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
