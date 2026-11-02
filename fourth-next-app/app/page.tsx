import { Suspense } from "react"; 
import Rating from "./components/Rating";
import Section from "./components/Section";
import Products from "./Products"; // Fixed: Pulls from the file right next to it!

const Home = () => {
  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-200 selection:bg-purple-500 selection:text-white w-full">
      
      {/* Premium Hero Section Vibe */}
      <div className="relative overflow-hidden bg-neutral-900/60 border-b border-neutral-900 py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.06)_0,transparent_100%)] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6 z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/40 border border-purple-800/30 px-3 py-1 rounded-full">
            The Future of E-Commerce Hardware
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-4 mb-3 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent tracking-tight">
            Welcome To Shopify
          </h1>
          <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Best Offer: Get Sale Up To 40% Off Instantly
          </p>
        </div>
      </div>

      {/* Main Page Layout Wrapper */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        
        {/* Featured Deals Section Grid */}
        <div className="space-y-6">
          <Suspense fallback={
            <div className="text-center text-sm font-semibold tracking-wider py-12 text-neutral-500 uppercase">
              Extracting Live Deals...
            </div>
          }>
            <Section />
          </Suspense>
        </div>

        {/* Global Catalog Core Grid */}
        <div className="space-y-6">
          <Suspense fallback={
            <div className="text-center text-sm font-semibold tracking-wider py-12 text-neutral-500 uppercase">
              Synchronizing Premium Catalog...
            </div>
          }>
            <Products />
          </Suspense>
        </div>

        {/* Community Ratings & Feedback Framework */}
        <div className="pt-8 border-t border-neutral-900">
          <Rating />
        </div>

      </div>
    </div>
  );
};

export default Home;
