import React from "react";
import Link from "next/link";

export default function AboutPage() {
  const coreValues = [
    {
      title: "Premium Quality",
      description: "We source only authentic, top-tier tech products and accessories straight from verified manufacturer pipelines.",
      icon: "💎",
    },
    {
      title: "Global Shipping",
      description: "Fast, reliable, and fully insured global shipping ensures your luxury gadgets arrive safely at your doorstep.",
      icon: "🌐",
    },
    {
      title: "24/7 Premium Support",
      description: "Our world-class customer service division handles your queries instantly, any hour of any day.",
      icon: "⚡",
    },
  ];

  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-200 selection:bg-purple-500 selection:text-white">
      {/* Dynamic Styled Hero Section with Radial Glow */}
      <section className="relative overflow-hidden bg-neutral-900 border-b border-neutral-800 py-24 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.08)_0,transparent_100%)]" />
        <div className="relative max-w-4xl mx-auto z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/50 border border-purple-800/40 px-3 py-1 rounded-full">
            Our Identity
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-4 mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            About Shopify Clone
          </h1>
          <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Redefining the digital shopping experience by bringing the finest premium consumer hardware directly to global collectors.
          </p>
        </div>
      </section>

      {/* Corporate Narrative & Dynamic Metric Grid */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Our Journey & Vision
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            Founded with a commitment to bridge engineering brilliance and absolute luxury, our ecommerce marketplace serves as the ultimate destination for Apple ecosystems, high-fidelity wireless audiophile hardware, and elite charging components.
          </p>
          <p className="text-neutral-400 leading-relaxed">
            We dont just list products; we evaluate craftsmanship. Every single SKU—from pristine silver over-ear arrays to bespoke silicone shields—undergoes rigorous technical validation to earn a permanent spot on our storefront.
          </p>
        </div>

        {/* Dynamic Theme Metric Blocks */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { metric: "99.8%", label: "Satisfaction" },
            { metric: "24 Hour", label: "Dispatch Guarantee" },
            { metric: "15K+", label: "Active Shipments" },
            { metric: "Zero", label: "Hidden Brokerage" },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/60 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30 group"
            >
              <p className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-1 group-hover:scale-105 transition-transform duration-200">
                {item.metric}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Feature Grid */}
      <section className="bg-neutral-900/30 py-20 border-t border-b border-neutral-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-16 text-white">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800/80 hover:border-neutral-700/60 transition-all duration-200 shadow-xl"
              >
                <div className="text-3xl mb-4 bg-neutral-800 w-12 h-12 flex items-center justify-center rounded-xl border border-neutral-700/40">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-100 mb-2">{value.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Call To Action with Next.js Link Navigation */}
      <section className="max-w-5xl mx-auto py-20 px-6 text-center">
        <div className="relative overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-10 md:p-16 shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 relative z-10">
            Ready to elevate your everyday carry?
          </h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto relative z-10 text-sm md:text-base">
            Browse through our freshly stocked seasonal tech catalog and unlock up to 40% off instant checkout values.
          </p>
          <div className="relative z-10">
            <Link 
              href="/products" 
              className="inline-block bg-white text-neutral-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-neutral-200 active:scale-[0.98] transition-all duration-200 text-sm tracking-wide"
            >
              Explore Active Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
