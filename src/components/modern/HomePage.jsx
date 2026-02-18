"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { api } from "@/lib/api";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Award,
  TrendingUp,
  Sparkles,
  Zap,
  Shield,
  Code,
  Cloud,
  Brain,
  Building,
  Factory,
  Heart,
} from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("services");
  const [scrolled, setScrolled] = useState(false);
  const [serviceLines, setServiceLines] = useState([]);
  const [productVentures, setProductVentures] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesData, productsData, industriesData] = await Promise.all([
          api.getAllServices(),
          api.getAllProducts(),
          api.getAllIndustries()
        ]);
        setServiceLines(servicesData);
        setProductVentures(productsData);
        setIndustries(industriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const stats = [
    { label: "Years of Excellence", value: "15+", icon: Award },
    { label: "Global Clients", value: "500+", icon: Globe },
    { label: "Expert Team", value: "2000+", icon: Users },
    { label: "Success Rate", value: "98%", icon: TrendingUp },
  ];

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm mb-8 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Powering Digital Transformation Since 2010</span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6 animate-fade-in-up">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                World-Class Solutions
              </span>
            </h1>
            
            <p className="mt-6 text-xl leading-8 text-blue-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Enterprise software products and professional services trusted by Fortune 500 companies worldwide. 
              From consulting to implementation, we deliver excellence at scale.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-6 animate-fade-in-up animation-delay-400">
              <Button size="xl" className="bg-white text-blue-600 hover:bg-blue-50">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="xl" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                Contact Sales
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4 animate-fade-in-up animation-delay-600">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold">{stat.value}</div>
                  <div className="mt-1 text-sm text-blue-200">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services & Products Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">What We Offer</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Enterprise Solutions & Services
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive portfolio of products and services designed to accelerate your digital journey
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="services" className="text-base">
                Professional Services
              </TabsTrigger>
              <TabsTrigger value="products" className="text-base">
                Product Ventures
              </TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="mt-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {serviceLines.map((service) => {
                  const Icon = iconMap[service.icon] || Code;
                  return (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-blue-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="rounded-lg bg-blue-50 p-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {service.tagline}
                      </p>
                      
                      <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                      
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Zap className="h-5 w-5 text-yellow-500" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="products" className="mt-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {productVentures.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="group relative rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm transition-all hover:shadow-xl hover:border-purple-300 hover:-translate-y-1"
                  >
                    <div className="mb-4">
                      <span className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.tagline}
                    </p>
                    
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-sm font-medium text-purple-600 group-hover:text-purple-700">
                        Explore Product
                      </span>
                      <ArrowRight className="h-4 w-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Industries We Serve</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Expertise Across Sectors
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Deep domain knowledge and industry-specific solutions for your unique challenges
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                href={`/industries/${industry.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-lg hover:border-blue-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-blue-50 p-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Building className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">
                  {industry.name.split('&')[0].trim()}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {industry.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose Us</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
                Your Trusted Digital Transformation Partner
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We combine deep technical expertise, industry knowledge, and proven methodologies 
                to deliver measurable business outcomes.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  "Global delivery with local expertise",
                  "Certified professionals across all major platforms",
                  "Agile methodologies and DevOps excellence",
                  "24/7 support with SLA-driven performance",
                  "Proven track record with Fortune 500 clients",
                  "Innovation labs for emerging technologies",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg">
                    <Award className="h-8 w-8 mb-3" />
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm text-blue-100">Industry Awards</div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white shadow-lg">
                    <Globe className="h-8 w-8 mb-3" />
                    <div className="text-3xl font-bold">25+</div>
                    <div className="text-sm text-purple-100">Countries</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 p-6 text-white shadow-lg">
                    <TrendingUp className="h-8 w-8 mb-3" />
                    <div className="text-3xl font-bold">$2B+</div>
                    <div className="text-sm text-cyan-100">Projects Delivered</div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 text-white shadow-lg">
                    <Users className="h-8 w-8 mb-3" />
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm text-indigo-100">Client Retention</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-blue-100">
            Let's discuss how our solutions can help you achieve your business goals.
            Get started with a free consultation today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button size="xl" className="bg-white text-blue-600 hover:bg-blue-50">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="xl" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
}
