"use client";

import { useEffect, useState } from "react";

interface Review {
  reviewerName: string;
  rating: number;
  comment: string;
}

interface Product {
  id: number;
  title: string;
  rating: number;
  reviews?: Review[];
}

const Rating = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Original data fetching structure kept completely intact
  const getData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=12&skip=100`);
      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Failed to sync customer reviews:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Custom styled card component following matching guidelines
  const renderProductCard = (product: Product) => {
    const actualReviewerName = product.reviews?.[0]?.reviewerName || "Verified Buyer";
    const customerComment = product.reviews?.[0]?.comment || "Great product, highly recommended!";

    return (
      <div 
        key={product.id} 
        className="bg-neutral-900/40 border border-neutral-800/80 hover:border-purple-500/30 rounded-2xl p-6 shadow-xl backdrop-blur-sm transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
      >
        <div>
          {/* User Info Header Area */}
          <div className="mb-3 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-xs font-bold text-purple-400">
              {actualReviewerName.charAt(0)}
            </div>
            <h4 className="font-semibold text-neutral-200 text-sm tracking-wide">
              {actualReviewerName}
            </h4>
          </div>

          {/* Customer Feedback Body */}
          <p className="text-neutral-400 text-sm italic mb-4 line-clamp-3 leading-relaxed">
            "{customerComment}"
          </p>

          {/* Connected Hardware Identity Title */}
          <h3 className="font-bold text-neutral-300 group-hover:text-purple-400 transition-colors duration-200 text-xs uppercase tracking-wider line-clamp-1 mb-2">
            {product.title}
          </h3>
        </div>

        {/* Rating Star System Display */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-neutral-800/50">
          <div className="flex text-purple-400 text-sm tracking-tight">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>
                {index < Math.round(product.rating) ? "★" : "☆"}
              </span>
            ))}
          </div>
          <span className="text-xs font-black text-neutral-500 bg-neutral-950/60 border border-neutral-800/40 px-2 py-0.5 rounded-md">
            {product.rating.toFixed(1)}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto selection:bg-purple-500 selection:text-white">
      {/* Clean Dynamic Header Layout - Perfectly matches About and Landing styles */}
      <div className="text-center mb-16 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 bg-purple-500/5 blur-[100px] pointer-events-none rounded-full" />
        <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/40 border border-purple-800/30 px-3 py-1 rounded-full">
          Platform Statistics
        </span>
        <h2 className="text-3xl md:text-5xl font-black mt-3 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent tracking-tight">
          Why Choosing Us?
        </h2>
        <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mt-2">
          Verified Global Ratings
        </p>
      </div>

      {/* Grid structure rendering review components */}
      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => renderProductCard(product))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-sm font-medium text-neutral-600 uppercase tracking-widest">
            Synchronizing customer logs...
          </p>
        </div>
      )}
    </div>
  );
};

export default Rating;
