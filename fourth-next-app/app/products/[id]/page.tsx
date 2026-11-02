"use client";

import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: string[];
}

// 1. Asli UI logic ko alag inner component mein shift kiya
function ProductDetailContent() {
  const params = useParams();
  const id = params?.id as string;

  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    async function fetchDetails() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchDetails();
  }, [id]);

  const triggerCartInsertion = () => {
    if (!product) return;

    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("shopify_cart");
      let currentCart = savedCart ? JSON.parse(savedCart) : [];

      const existingItem = currentCart.find((item: any) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        currentCart.push({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.images?.[0] || "",
          quantity: 1
        });
      }

      localStorage.setItem("shopify_cart", JSON.stringify(currentCart));
      (window as any).__shopify_cart_state = currentCart;

      window.dispatchEvent(new CustomEvent("CART_STATE_UPDATE", { detail: currentCart }));
    }
  };

  if (loading) return <div className="bg-neutral-950 min-h-screen text-neutral-400 flex items-center justify-center text-xs uppercase tracking-widest">Loading Specifications...</div>;
  if (!product) return <div className="bg-neutral-950 min-h-screen text-neutral-200 flex items-center justify-center">Product Not Found</div>;

  const primaryImage = product.images?.[0] || "";
  const originalPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);

  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-200 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/products" className="text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-purple-400">
            ← Back To All Hardware
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-neutral-900/30 border border-neutral-800/80 rounded-3xl p-6 md:p-12 shadow-2xl relative">
          <div className="bg-neutral-950/80 border border-neutral-800/60 rounded-2xl p-6 flex items-center justify-center min-h-[300px]">
            <img src={primaryImage} alt={product.title} className="max-h-[380px] object-contain" />
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-black text-white">{product.title}</h1>
            
            <div className="p-4 bg-neutral-950/60 border border-neutral-800/60 rounded-xl flex justify-between items-center">
              <div>
                <span className="text-2xl font-extrabold text-white">${product.price.toFixed(2)}</span>
                <span className="text-sm text-neutral-500 line-through ml-3">${originalPrice}</span>
              </div>
              <span className="text-xs font-black text-white bg-purple-600 px-3 py-1.5 rounded-lg">-{product.discountPercentage.toFixed(0)}% Off</span>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed">{product.description}</p>

            <div className="pt-4 flex gap-4 w-full">
              <button onClick={triggerCartInsertion} className="flex-1 bg-white hover:bg-neutral-200 text-neutral-950 font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-lg active:scale-95">
                Add to Cart 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Main Page wrapper jo dynamic components ko Suspense boundary deta hai (Prerender error fix)
export default function ProductDetailPage() {
  return (
    <Suspense fallback={<div className="bg-neutral-950 min-h-screen text-neutral-400 flex items-center justify-center text-xs uppercase tracking-widest">Loading Route Parameters...</div>}>
      <ProductDetailContent />
    </Suspense>
  );
}
