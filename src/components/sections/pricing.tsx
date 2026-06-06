"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  priceNote?: string;
}

const pricingPackages: PricingPackage[] = [
  {
    name: "Web Builder",
    price: "$15",
    priceNote: "/hour",
    description: "Perfect for simple websites",
    features: [
      "Landing pages",
      "Portfolio websites",
      "Basic e-commerce setup",
      "Plugin integration",
      "Scope-dependent pricing",
      "Responsive design",
      "SEO optimization",
    ],
  },
  {
    name: "WordPress Development",
    price: "$15-20",
    priceNote: "/hour",
    description: "WordPress & WooCommerce solutions",
    features: [
      "ACF (Advanced Custom Fields)",
      "Custom theme development",
      "WooCommerce setup & customization",
      "Plugin development",
      "Performance optimization",
      "Security hardening",
      "Database optimization",
    ],
  },
  {
    name: "Custom Web Development",
    price: "$20",
    priceNote: "/hour",
    description: "Full-featured web solutions",
    features: [
      "Complex web applications",
      "Custom functionality",
      "Database integration",
      "API development",
      "Advanced features",
      "Performance optimization",
      "Security implementation",
      "Ongoing support",
    ],
    popular: true,
  },
  {
    name: "Shopify Development",
    price: "$18-22",
    priceNote: "/hour",
    description: "Shopify store solutions",
    features: [
      "Shopify theme customization",
      "Shopify app development",
      "Liquid template coding",
      "Store optimization",
      "Payment gateway integration",
      "Inventory management",
      "Performance tuning",
    ],
  },
  {
    name: "Figma to WordPress",
    price: "$20",
    priceNote: "/hour",
    description: "Design to development",
    features: [
      "Figma design conversion",
      "Responsive implementation",
      "Custom WordPress theme",
      "ACF integration",
      "Pixel-perfect accuracy",
      "Mobile optimization",
      "Cross-browser testing",
    ],
  },
  {
    name: "Website Package Search",
    price: "Custom",
    priceNote: "Quote",
    description: "Enterprise solutions",
    features: [
      "Full-stack development",
      "Advanced search functionality",
      "Large-scale applications",
      "Custom integrations",
      "Dedicated support",
      "Maintenance & updates",
      "Performance monitoring",
      "Scalability planning",
    ],
  },
];

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="max-w-7xl mx-auto mt-32 md:mt-48 py-24 mb-32 md:mb-48"
    >
      <Link href="#pricing">
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-8"
          )}
        >
          Pricing
        </h2>
      </Link>

      <p className="text-center text-neutral-600 dark:text-neutral-400 text-lg mb-16">
        Choose the perfect pancake package for your collaboration
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPackages.map((pkg, index) => (
          <PricingCard key={index} package={pkg} />
        ))}
      </div>
    </section>
  );
};

const PricingCard = ({ package: pkg }: { package: PricingPackage }) => {
  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg",
        pkg.popular
          ? "md:scale-105 bg-gradient-to-br from-black to-black/80 dark:from-white dark:to-white/80 p-1"
          : "bg-white/70 dark:bg-black/70"
      )}
    >
      <div
        className={cn(
          "rounded-lg p-8 h-full backdrop-blur-sm",
          pkg.popular
            ? "bg-black dark:bg-black"
            : "bg-white/50 dark:bg-black/50"
        )}
      >
        {pkg.popular && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            POPULAR
          </div>
        )}

        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          {pkg.name}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          {pkg.description}
        </p>

        <div className="mb-8">
          <span className="text-5xl font-bold text-neutral-900 dark:text-white">
            {pkg.price}
          </span>
          <span className="text-neutral-600 dark:text-neutral-400 ml-2">
            {pkg.priceNote}
          </span>
        </div>

        <button
          className={cn(
            "w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 mb-8",
            pkg.popular
              ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white hover:opacity-90"
              : "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-300 dark:hover:bg-neutral-700"
          )}
        >
          Get Started
        </button>

        <div className="space-y-4">
          {pkg.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
