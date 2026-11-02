export const instant = false;

import React from "react";
import Link from "next/link";

interface ServiceItem {
  title: string;
  description: string;
  badge: string;
  icon: string;
}

export default function ServicesPage() {
  const corporateServices: ServiceItem[] = [
    {
      title: "Express Hardware Delivery",
      description: "Get elite consumer hardware dispatched with instant priority queues. Insured air freight channels keep devices secure across international border check-points.",
      badge: "LOGISTICS",
      icon: "📦",
    },
    {
      title: "Extended System Warranties",
      description: "Secure your asset lifecycle values with comprehensive coverage extensions. Complete protection layers cover full technical configurations and accidental damages.",
      badge: "PROTECTION",
      icon: "🛡️",
    },
    {
      title: "Bespoke Enterprise Logistics",
      description: "Custom bulk procurement operations optimized for modern tech ecosystems, developer sandboxes, and corporate infrastructure scaling priorities.",
      badge: "ENTERPRISE",
      icon: "🏢",
    },
    {
      title: "Real-time Verification Matrix",
      description: "Verify physical component authenticity seamlessly using unalterable digital serial signatures directly mapped against global hardware registries.",
      badge: "ANTI-COUNTERFEIT",
      icon: "🔍",
    },
    {
      title: "B2B Hardware Trade-Ins",
      description: "Maximize operational overhead capabilities by liquidating legacy equipment configurations directly into liquid capital credits for next-generation arrays.",
      badge: "LIFECYCLE",
      icon: "🔄",
    },
    {
      title: "Hardware API Integrations",
      description: "Direct web-hooks into manufacturer supply matrices, inventory updates, and live stock tracking channels engineered for enterprise nodes.",
      badge: "DEVELOPERS",
      icon: "⚡",
    },
  ];

  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-200 selection:bg-purple-500 selection:text-white">
      
      {/* Header Area with Subtle Radial Vibe Glow */}
      <section className="relative overflow-hidden bg-neutral-900/60 border-b border-neutral-800 py-24 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.06)_0,transparent_100%)] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/40 border border-purple-800/30 px-3 py-1 rounded-full">
            Platform Capabilities
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-4 mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent tracking-tight">
            Our Premium Services
          </h1>
          <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Engineered utility packages and elite operational support designed to complement your high-end consumer hardware acquisitions.
          </p>
        </div>
      </section>

      {/* Services Operational Display Matrix Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corporateServices.map((service, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-purple-500/40 shadow-2xl backdrop-blur-sm transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(147,51,234,0.12)] flex flex-col justify-between"
            >
              <div>
                {/* Meta Header block */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="text-3xl bg-neutral-950/80 w-14 h-14 border border-neutral-800/80 flex items-center justify-center rounded-xl group-hover:border-purple-500/30 transition-colors duration-200">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-neutral-500 group-hover:text-purple-400 border border-neutral-800/60 group-hover:border-purple-800/40 px-2 py-0.5 rounded transition-colors duration-200 uppercase bg-neutral-950/30">
                    {service.badge}
                  </span>
                </div>

                {/* Service Meta content */}
                <h3 className="text-lg font-bold text-neutral-100 group-hover:text-white transition-colors duration-200 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              {/* Action Indicator link */}
              <div className="pt-6 mt-6 border-t border-neutral-800/40 text-xs font-bold text-neutral-500 group-hover:text-neutral-300 transition-colors duration-200 flex items-center gap-1">
                Initialize Protocols <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Operational Alignment Footer Section Block */}
      <section className="max-w-5xl mx-auto py-12 px-6 text-center">
        <div className="relative overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-10 md:p-16 shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4 relative z-10">
            Require specialized corporate support configurations?
          </h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto relative z-10 text-sm">
            Connect directly with our infrastructure scaling desk to craft custom procurement frameworks and multi-node service arrangements.
          </p>
          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-block bg-white text-neutral-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-neutral-200 active:scale-[0.98] transition-all duration-200 text-sm tracking-wide"
            >
              Contact Operations Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
