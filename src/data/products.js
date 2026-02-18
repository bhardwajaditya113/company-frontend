export const productVentures = [
  {
    id: "directory-listing",
    slug: "directory-listing",
    name: "Directory Listing Platform",
    tagline: "Connect businesses with customers through powerful local search",
    description: "A comprehensive directory listing solution that helps businesses get discovered, manage their online presence, and engage with customers.",
    category: "B2B/B2C Marketplace",
    icon: "map-pin",
    heroImage: "/products/directory.jpg",
    features: [
      {
        name: "Smart Listings",
        description: "Multi-tier verification, rich profiles, booking & appointments, real-time analytics"
      },
      {
        name: "Review Management",
        description: "Collect, moderate, and respond to reviews with AI-powered sentiment analysis"
      },
      {
        name: "Advertising Platform",
        description: "CPC/placement ads, sponsored listings, banner ads with comprehensive analytics"
      },
      {
        name: "Mobile Apps",
        description: "iOS & Android apps for business owners and consumers"
      },
      {
        name: "Multi-Location Support",
        description: "Manage multiple locations from a single dashboard"
      },
      {
        name: "API & Integrations",
        description: "RESTful API, webhooks, and integrations with major platforms"
      }
    ],
    services: [
      {
        name: "Setup & Implementation",
        description: "Complete platform setup, data migration, verification workflows, and go-live support",
        pricing: "Fixed scope packages from $15K"
      },
      {
        name: "Listing Operations",
        description: "Verification, content moderation, SEO optimization, and listing hygiene",
        pricing: "Starting at $5K/month"
      },
      {
        name: "Growth Services",
        description: "Ad operations, marketing automation, A/B testing, and performance analytics",
        pricing: "Custom pricing based on GMV"
      },
      {
        name: "Managed Services",
        description: "24/7 review responses, customer support, and platform operations",
        pricing: "Starting at $8K/month"
      }
    ],
    pricing: {
      license: [
        { tier: "Starter", price: "$499/mo", features: ["Up to 1,000 listings", "Basic verification", "Mobile apps", "Email support"] },
        { tier: "Professional", price: "$1,999/mo", features: ["Up to 10,000 listings", "Advanced verification", "Ad platform", "Priority support", "Custom branding"] },
        { tier: "Enterprise", price: "Custom", features: ["Unlimited listings", "White-label", "API access", "Dedicated success manager", "SLA guarantees"] }
      ],
      addons: [
        "Additional languages: $500/language",
        "Custom integrations: Starting at $5K",
        "Advanced analytics: $299/mo"
      ]
    },
    segments: [
      "City & regional directories",
      "Industry-specific portals",
      "Franchise networks",
      "Business associations",
      "Government directories"
    ],
    competitors: ["Google Business Profile", "Yelp", "Justdial", "Yellow Pages", "Foursquare"],
    caseStudies: []
  },
  {
    id: "job-portal",
    slug: "job-portal",
    name: "Job Portal & Recruitment Platform",
    tagline: "Connect talent with opportunity",
    description: "A complete recruitment ecosystem with job postings, candidate management, assessments, and AI-powered matching.",
    category: "HR & Talent",
    icon: "briefcase",
    heroImage: "/products/jobs.jpg",
    features: [
      {
        name: "Smart Job Matching",
        description: "AI-powered candidate-job matching with skill graphs and compatibility scoring"
      },
      {
        name: "ATS Integration",
        description: "Seamless integration with Workday, SAP SuccessFactors, Greenhouse, and more"
      },
      {
        name: "Assessment Suite",
        description: "Pre-built and custom assessments for technical and behavioral evaluation"
      },
      {
        name: "Employer Branding",
        description: "Customizable career pages, company profiles, and culture showcases"
      },
      {
        name: "Analytics & Insights",
        description: "Hiring metrics, salary benchmarks, talent pool analytics"
      },
      {
        name: "Mobile-First",
        description: "Native mobile apps for job seekers with one-tap apply"
      }
    ],
    services: [
      {
        name: "Platform Setup",
        description: "ATS integration, job taxonomy, employer onboarding, and candidate migration",
        pricing: "Starting at $25K"
      },
      {
        name: "Employer Success",
        description: "Premium job postings, employer branding, sponsored content",
        pricing: "Revenue share or monthly retainer"
      },
      {
        name: "RPO Services",
        description: "Recruitment process outsourcing, candidate sourcing, screening",
        pricing: "Per hire or monthly FTE pricing"
      },
      {
        name: "Talent Analytics",
        description: "Custom dashboards, market intelligence, salary insights",
        pricing: "$2K-10K/month"
      }
    ],
    pricing: {
      license: [
        { tier: "Startup", price: "$999/mo", features: ["Up to 100 job postings", "5,000 candidate profiles", "Basic ATS", "Email support"] },
        { tier: "Growth", price: "$4,999/mo", features: ["Unlimited jobs", "50,000 candidates", "Assessment suite", "API access", "Priority support"] },
        { tier: "Enterprise", price: "Custom", features: ["White-label", "Multi-tenant", "Advanced AI matching", "Dedicated team", "SLA"] }
      ],
      addons: [
        "Video interviewing: $500/mo",
        "Background checks: Per candidate pricing",
        "Premium support: $2K/mo"
      ]
    },
    segments: [
      "Niche job boards",
      "Staffing firms",
      "Enterprise career sites",
      "University placement portals",
      "Government employment exchanges"
    ],
    competitors: ["LinkedIn Jobs", "Indeed", "Glassdoor", "Naukri", "Monster"],
    caseStudies: []
  },
  {
    id: "lms-marketplace",
    slug: "lms-marketplace",
    name: "LMS & Learning Marketplace",
    tagline: "Empower learning and skill development",
    description: "A comprehensive learning management system with marketplace capabilities for corporate training, education, and professional development.",
    category: "Education & Training",
    icon: "graduation-cap",
    heroImage: "/products/lms.jpg",
    features: [
      {
        name: "Multi-Tenant LMS",
        description: "White-label academies for enterprises, universities, and content creators"
      },
      {
        name: "Content Marketplace",
        description: "Course marketplace with payments, revenue sharing, and subscription management"
      },
      {
        name: "SCORM & xAPI",
        description: "Full compliance with e-learning standards and tracking"
      },
      {
        name: "Skills Management",
        description: "Skills taxonomy, gap analysis, learning paths, and certifications"
      },
      {
        name: "Enterprise SSO",
        description: "Integration with SAML, OAuth, LDAP, and major identity providers"
      },
      {
        name: "Advanced Analytics",
        description: "Learning analytics, engagement metrics, ROI tracking"
      }
    ],
    services: [
      {
        name: "Platform Setup",
        description: "LMS configuration, SSO integration, content migration, branding",
        pricing: "$20K-50K fixed scope"
      },
      {
        name: "Content Factory",
        description: "Course creation, localization, accessibility compliance, video production",
        pricing: "Per course or monthly retainer"
      },
      {
        name: "Managed Academy",
        description: "Full platform operations, learner support, instructor management",
        pricing: "$5K-20K/month"
      },
      {
        name: "Learning Consulting",
        description: "Learning strategy, curriculum design, skills framework",
        pricing: "Project-based or retainer"
      }
    ],
    pricing: {
      license: [
        { tier: "Basic", price: "$299/mo", features: ["Up to 100 learners", "Unlimited courses", "Basic analytics", "Email support"] },
        { tier: "Professional", price: "$1,499/mo", features: ["Up to 1,000 learners", "Marketplace", "SSO", "Advanced analytics", "Priority support"] },
        { tier: "Enterprise", price: "Custom", features: ["Unlimited learners", "Multi-tenant", "API access", "White-label", "SLA"] }
      ],
      addons: [
        "Mobile apps: $5K setup + $500/mo",
        "AI tutoring: $1K/mo",
        "Advanced reporting: $499/mo"
      ]
    },
    segments: [
      "Corporate academies",
      "Professional certification bodies",
      "Educational institutions",
      "Content marketplaces",
      "Training companies"
    ],
    competitors: ["Udemy", "Coursera", "Moodle", "Canvas", "Thinkific"],
    caseStudies: []
  },
  {
    id: "digital-marketplace",
    slug: "digital-marketplace",
    name: "Multi-Vendor Digital Marketplace",
    tagline: "Build and scale your marketplace business",
    description: "A complete marketplace platform for B2C and B2B digital commerce with seller management, payments, and logistics.",
    category: "E-Commerce",
    icon: "shopping-cart",
    heroImage: "/products/marketplace.jpg",
    features: [
      {
        name: "Seller Management",
        description: "Onboarding, KYC, catalog management, seller analytics, and support"
      },
      {
        name: "Multi-Payment",
        description: "Split payments, escrow, seller payouts, multi-currency, and fraud detection"
      },
      {
        name: "Logistics Hub",
        description: "Carrier integrations, shipping rules, real-time tracking, returns management"
      },
      {
        name: "Marketing Suite",
        description: "Promotions, coupons, loyalty programs, email/SMS campaigns"
      },
      {
        name: "Review & Ratings",
        description: "Verified reviews, seller ratings, dispute resolution"
      },
      {
        name: "Analytics & BI",
        description: "GMV tracking, seller performance, customer insights, cohort analysis"
      }
    ],
    services: [
      {
        name: "Marketplace Launch",
        description: "Platform setup, seller onboarding, payment integration, go-to-market",
        pricing: "$30K-75K"
      },
      {
        name: "Seller Operations",
        description: "Seller recruitment, catalog enrichment, quality assurance, support",
        pricing: "GMV-based or monthly retainer"
      },
      {
        name: "Growth Services",
        description: "Marketing automation, merchandising, personalization, A/B testing",
        pricing: "Starting at $10K/month"
      },
      {
        name: "Managed Operations",
        description: "Full marketplace operations, customer service, fraud monitoring",
        pricing: "GMV-based pricing"
      }
    ],
    pricing: {
      license: [
        { tier: "Launch", price: "$1,999/mo", features: ["Up to 100 sellers", "10K products", "Payment gateway", "Basic analytics"] },
        { tier: "Scale", price: "$5,999/mo", features: ["Unlimited sellers", "100K products", "Advanced features", "API access", "Priority support"] },
        { tier: "Enterprise", price: "Custom", features: ["White-label", "Custom workflows", "Multi-region", "Dedicated team", "SLA"] }
      ],
      transactionFee: "2-5% of GMV (tiered based on volume)",
      addons: [
        "Subscription module: $999/mo",
        "B2B features: $2K/mo",
        "Advanced fraud: $1K/mo"
      ]
    },
    segments: [
      "Vertical marketplaces",
      "Brand aggregators",
      "B2B procurement",
      "Rental marketplaces",
      "Service marketplaces"
    ],
    competitors: ["Shopify Multi-Vendor", "Magento", "WooCommerce", "Mirakl", "CS-Cart"],
    caseStudies: []
  },
  {
    id: "food-marketplace",
    slug: "food-marketplace",
    name: "Food Delivery & Quick Commerce",
    tagline: "On-demand food delivery at scale",
    description: "Complete food delivery and quick commerce platform with restaurant management, dispatch optimization, and customer apps.",
    category: "Food & Grocery",
    icon: "utensils",
    heroImage: "/products/food.jpg",
    features: [
      {
        name: "Merchant Portal",
        description: "Menu management, order processing, prep time optimization, promotions"
      },
      {
        name: "Smart Dispatch",
        description: "AI-powered routing, rider assignment, multi-order batching, ETA prediction"
      },
      {
        name: "Customer Apps",
        description: "iOS & Android apps with live tracking, favorites, reordering"
      },
      {
        name: "Corporate Accounts",
        description: "Meal benefits, expense management, budget controls, bulk ordering"
      },
      {
        name: "Cloud Kitchen Support",
        description: "Virtual brands, shared kitchens, inventory management"
      },
      {
        name: "Real-Time Analytics",
        description: "Order metrics, delivery performance, merchant insights, customer behavior"
      }
    ],
    services: [
      {
        name: "Platform Launch",
        description: "Setup, merchant onboarding, rider app deployment, payment integration",
        pricing: "$40K-100K"
      },
      {
        name: "Merchant Services",
        description: "Menu digitization, photography, pricing optimization, marketing",
        pricing: "Per merchant or revenue share"
      },
      {
        name: "Delivery Operations",
        description: "Fleet management, dispatch optimization, SLA monitoring",
        pricing: "Per order or monthly fee"
      },
      {
        name: "Customer Support",
        description: "24/7 support center, refund management, complaint resolution",
        pricing: "$5K-15K/month"
      }
    ],
    pricing: {
      license: [
        { tier: "City", price: "$2,999/mo", features: ["Up to 100 merchants", "2 rider apps", "Customer app", "Basic dispatch"] },
        { tier: "Regional", price: "$9,999/mo", features: ["Unlimited merchants", "Advanced dispatch", "Corporate accounts", "API access"] },
        { tier: "Enterprise", price: "Custom", features: ["Multi-city", "White-label", "Cloud kitchen mgmt", "Dedicated team", "SLA"] }
      ],
      commissionModel: "15-30% of order value",
      addons: [
        "Loyalty program: $1K/mo",
        "Subscription plans: $500/mo",
        "Rider app customization: $10K"
      ]
    },
    segments: [
      "City delivery platforms",
      "QSR chains",
      "Cloud kitchen operators",
      "Grocery delivery",
      "Quick commerce"
    ],
    competitors: ["Uber Eats", "DoorDash", "Swiggy", "Zomato", "Deliveroo"],
    caseStudies: []
  },
  {
    id: "news-portal",
    slug: "news-portal",
    name: "News & Media Platform",
    tagline: "Publish, monetize, and engage your audience",
    description: "Modern news and media platform with headless CMS, subscriptions, advertising, and community features.",
    category: "Media & Publishing",
    icon: "newspaper",
    heroImage: "/products/news.jpg",
    features: [
      {
        name: "Headless CMS",
        description: "Multi-channel publishing, workflow management, editorial tools"
      },
      {
        name: "Subscription Engine",
        description: "Paywalls, metered access, membership tiers, gift subscriptions"
      },
      {
        name: "Ad Management",
        description: "Direct ads, programmatic, native content, ad server integration"
      },
      {
        name: "Personalization",
        description: "Content recommendations, user preferences, push notifications"
      },
      {
        name: "Community Features",
        description: "Comments, forums, user-generated content, moderation tools"
      },
      {
        name: "Analytics Suite",
        description: "Engagement metrics, subscriber analytics, revenue tracking, A/B testing"
      }
    ],
    services: [
      {
        name: "Platform Migration",
        description: "CMS migration, content import, SEO preservation, redirect management",
        pricing: "$25K-60K"
      },
      {
        name: "Monetization Setup",
        description: "Paywall configuration, ad network integration, subscription flows",
        pricing: "$15K-30K"
      },
      {
        name: "Growth Services",
        description: "SEO, social media optimization, newsletter automation, retention campaigns",
        pricing: "$5K-15K/month"
      },
      {
        name: "Moderation BPO",
        description: "Content moderation, comment management, trust & safety",
        pricing: "$3K-10K/month"
      }
    ],
    pricing: {
      license: [
        { tier: "Publisher", price: "$999/mo", features: ["Up to 100K pageviews", "Basic CMS", "Ad support", "Email support"] },
        { tier: "Professional", price: "$3,999/mo", features: ["Up to 1M pageviews", "Subscriptions", "Advanced analytics", "Priority support"] },
        { tier: "Enterprise", price: "Custom", features: ["Unlimited pageviews", "Multi-site", "White-label", "API access", "SLA"] }
      ],
      revenueShare: "Optional 10-15% of subscription revenue",
      addons: [
        "Mobile apps: $15K + $500/mo",
        "Video platform: $2K/mo",
        "Advanced SEO: $1K/mo"
      ]
    },
    segments: [
      "Digital publishers",
      "Broadcast media",
      "Niche communities",
      "Corporate newsrooms",
      "Trade publications"
    ],
    competitors: ["WordPress VIP", "Ghost", "Medium", "Substack", "Piano"],
    caseStudies: []
  },
  {
    id: "hotel-booking",
    slug: "hotel-booking",
    name: "Hotel Booking & Property Management",
    tagline: "Direct bookings, channel management, and guest experiences",
    description: "Comprehensive hotel booking platform with PMS integration, channel management, and revenue optimization.",
    category: "Travel & Hospitality",
    icon: "hotel",
    heroImage: "/products/hotel.jpg",
    features: [
      {
        name: "Booking Engine",
        description: "Multi-property, real-time availability, dynamic pricing, group bookings"
      },
      {
        name: "Channel Manager",
        description: "Integration with OTAs (Booking.com, Expedia), rate parity, inventory sync"
      },
      {
        name: "PMS Integration",
        description: "Two-way sync with major PMS systems (Opera, Cloudbeds, etc.)"
      },
      {
        name: "Revenue Management",
        description: "Dynamic pricing, demand forecasting, competitor analysis"
      },
      {
        name: "Guest Portal",
        description: "Mobile check-in, room preferences, concierge services, loyalty"
      },
      {
        name: "Analytics & Reporting",
        description: "RevPAR, ADR, occupancy tracking, market insights"
      }
    ],
    services: [
      {
        name: "Implementation",
        description: "PMS integration, channel manager setup, property onboarding, training",
        pricing: "$15K-40K per property"
      },
      {
        name: "Revenue Management",
        description: "Pricing strategy, yield optimization, forecasting, consulting",
        pricing: "5-10% of revenue lift or monthly retainer"
      },
      {
        name: "Guest Services",
        description: "24/7 guest support, booking management, review response",
        pricing: "$2K-8K/month per property"
      },
      {
        name: "Marketing Services",
        description: "SEO, paid search, metasearch optimization, content marketing",
        pricing: "$3K-12K/month"
      }
    ],
    pricing: {
      license: [
        { tier: "Single Property", price: "$299/mo", features: ["1 property", "Booking engine", "Basic channel mgr", "Email support"] },
        { tier: "Multi-Property", price: "$999/mo", features: ["Up to 10 properties", "Full channel mgr", "PMS integration", "Priority support"] },
        { tier: "Enterprise", price: "Custom", features: ["Unlimited properties", "Revenue mgmt", "API access", "White-label", "SLA"] }
      ],
      commissionModel: "Optional 3-8% of booking value",
      addons: [
        "Mobile apps: $10K + $300/mo",
        "Payment processing: Transaction fees apply",
        "Advanced analytics: $500/mo"
      ]
    },
    segments: [
      "Boutique hotels",
      "Hotel chains",
      "Vacation rentals",
      "Homestays",
      "Destination OTAs"
    ],
    competitors: ["Booking.com", "Airbnb", "MakeMyTrip", "Cloudbeds", "Guesty"],
    caseStudies: []
  },
  {
    id: "pos-system",
    slug: "pos-system",
    name: "Point of Sale System",
    tagline: "Modern POS for retail, restaurants, and services",
    description: "Cloud-based POS system with inventory management, payments, loyalty, and multi-location support.",
    category: "Retail & F&B",
    icon: "credit-card",
    heroImage: "/products/pos.jpg",
    features: [
      {
        name: "Unified POS",
        description: "Touch-optimized interface, offline mode, quick checkout, split bills"
      },
      {
        name: "Inventory Management",
        description: "Real-time tracking, low-stock alerts, purchase orders, transfers"
      },
      {
        name: "Payment Integration",
        description: "Card, UPI, wallets, BNPL, EMI, contactless payments"
      },
      {
        name: "Employee Management",
        description: "Time tracking, shift scheduling, commission tracking, permissions"
      },
      {
        name: "Loyalty & Gift Cards",
        description: "Points programs, digital gift cards, referral rewards"
      },
      {
        name: "Business Intelligence",
        description: "Sales analytics, inventory insights, customer analytics, forecasting"
      }
    ],
    services: [
      {
        name: "Deployment",
        description: "Hardware setup, software installation, payment onboarding, training",
        pricing: "$5K-15K per location"
      },
      {
        name: "Payment Processing",
        description: "Merchant account setup, gateway integration, chargeback management",
        pricing: "1.5-2.5% + per transaction fees"
      },
      {
        name: "Integration Services",
        description: "Accounting (QuickBooks, Xero), ecommerce, delivery apps, ERP",
        pricing: "$2K-10K per integration"
      },
      {
        name: "Managed Support",
        description: "24/7 support, device management, software updates, warranty",
        pricing: "$200-500/month per location"
      }
    ],
    pricing: {
      license: [
        { tier: "Basic", price: "$79/mo", features: ["1 terminal", "Basic inventory", "Email support", "Standard reports"] },
        { tier: "Professional", price: "$199/mo", features: ["3 terminals", "Advanced inventory", "Loyalty", "Priority support", "API access"] },
        { tier: "Enterprise", price: "Custom", features: ["Unlimited terminals", "Multi-location", "Custom integrations", "Dedicated support", "SLA"] }
      ],
      hardware: "Terminals from $299, tablets from $399, printers from $199",
      addons: [
        "E-commerce integration: $99/mo",
        "Advanced analytics: $49/mo",
        "Kitchen display: $29/mo per screen"
      ]
    },
    segments: [
      "Quick-service restaurants",
      "Retail stores",
      "Cafes & bakeries",
      "Salons & spas",
      "Convenience stores"
    ],
    competitors: ["Square", "Toast", "Clover", "Lightspeed", "Shopify POS"],
    caseStudies: []
  },
  {
    id: "nonprofit-charity",
    slug: "nonprofit-charity",
    name: "Non-Profit & Fundraising Platform",
    tagline: "Empower your mission with digital fundraising",
    description: "Complete fundraising and donor management platform for non-profits, charities, and foundations.",
    category: "Non-Profit",
    icon: "heart",
    heroImage: "/products/nonprofit.jpg",
    features: [
      {
        name: "Donor CRM",
        description: "Donor profiles, giving history, engagement tracking, segmentation"
      },
      {
        name: "Fundraising Tools",
        description: "Donation pages, recurring giving, peer-to-peer, events, crowdfunding"
      },
      {
        name: "Grant Management",
        description: "Application tracking, compliance, reporting, milestones"
      },
      {
        name: "Marketing Automation",
        description: "Email campaigns, donor journeys, thank-you automation, stewardship"
      },
      {
        name: "Impact Tracking",
        description: "Program tracking, outcome measurement, impact dashboards"
      },
      {
        name: "Compliance & Reporting",
        description: "Tax receipts, FCRA compliance, audit trails, financial reporting"
      }
    ],
    services: [
      {
        name: "Platform Setup",
        description: "CRM migration, campaign setup, payment gateway, training",
        pricing: "$10K-25K (discounted for non-profits)"
      },
      {
        name: "Fundraising Strategy",
        description: "Campaign planning, donor segmentation, storytelling, acquisition",
        pricing: "Project-based or monthly retainer"
      },
      {
        name: "Marketing Services",
        description: "Email marketing, social media, content creation, SEO",
        pricing: "$2K-8K/month"
      },
      {
        name: "Compliance Support",
        description: "Tax receipt generation, regulatory compliance, audit support",
        pricing: "$1K-3K/month"
      }
    ],
    pricing: {
      license: [
        { tier: "Starter", price: "$99/mo", features: ["Up to 1,000 donors", "Donation pages", "Basic CRM", "Email support"] },
        { tier: "Growth", price: "$399/mo", features: ["Up to 10,000 donors", "Recurring giving", "Events", "Automation", "Priority support"] },
        { tier: "Enterprise", price: "$999/mo", features: ["Unlimited donors", "Grant mgmt", "Custom workflows", "API access", "SLA"] }
      ],
      transactionFee: "1.5-3% of donations (lower than commercial rates)",
      addons: [
        "Mobile app: $5K + $200/mo",
        "Volunteer management: $99/mo",
        "Advanced reporting: $149/mo"
      ]
    },
    segments: [
      "Charities & NGOs",
      "Foundations",
      "Religious organizations",
      "Educational institutions",
      "Healthcare non-profits"
    ],
    competitors: ["Salesforce Non-Profit", "Blackbaud", "DonorPerfect", "Givebutter", "Classy"],
    caseStudies: []
  }
];

export const getProductBySlug = (slug) => {
  return productVentures.find(product => product.slug === slug);
};

export const getAllProductSlugs = () => {
  return productVentures.map(product => product.slug);
};

export const getProductsByCategory = (category) => {
  return productVentures.filter(product => product.category === category);
};
