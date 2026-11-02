"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const checkState = () => {
      if (typeof window !== "undefined") {
        const savedCart = localStorage.getItem("shopify_cart");
        const cached = savedCart ? JSON.parse(savedCart) : ((window as any).__shopify_cart_state || []);
        
        (window as any).__shopify_cart_state = cached;
        
        setTimeout(() => {
          setCart(cached);
        }, 0);
      }
    };

    const handleUpdate = (e: Event) => {
      const freshCart = (e as CustomEvent).detail || [];
      if (typeof window !== "undefined") {
        localStorage.setItem("shopify_cart", JSON.stringify(freshCart));
        (window as any).__shopify_cart_state = freshCart;
      }
      
      setTimeout(() => {
        setCart(freshCart);
      }, 0);
    };

    checkState();
    window.addEventListener("CART_STATE_UPDATE", handleUpdate);
    return () => window.removeEventListener("CART_STATE_UPDATE", handleUpdate);
  }, []);

  const removeItem = (id: any) => {
    // 1. Array filter lagayein jo perfectly item ko drop karta hai (Logs match checked!)
    const nextCart = cart.filter((item) => String(item.id) !== String(id));
    
    if (typeof window !== "undefined") {
      localStorage.setItem("shopify_cart", JSON.stringify(nextCart));
      (window as any).__shopify_cart_state = nextCart;
    }
    
    // 2. Local State ko safe delay ke sath update karein
    setTimeout(() => {
      setCart(nextCart);
    }, 0);

    // 3. Navbar badge ko batane ke liye update event bhejein
    window.dispatchEvent(new CustomEvent("CART_STATE_UPDATE", { detail: nextCart }));
    
    // ⚠️ FIXED: Maine background clean event 'SYNC_CART_REMOVE' yahan se hata diya hai
    // taaki koi external code cart page ko dubara blank na kar sake!
  };

  const totalPayout = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-200 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link href="/products" className="text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-purple-400">
            ← Return to Hardware Catalog
          </Link>
        </div>

        <h1 className="text-3xl font-black text-white mb-8">Acquisition Storage Vault</h1>

        {cart.length === 0 ? (
          <div className="bg-neutral-900/30 border border-neutral-800/80 rounded-3xl p-12 text-center backdrop-blur-sm">
            <span className="text-4xl block mb-4">🛒</span>
            <h3 className="text-lg font-bold text-neutral-300 mb-2">Vault is Currently Empty</h3>
            <p className="text-sm text-neutral-500 max-w-sm mx-auto mb-6">No products available in this active session memory layout.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="p-5 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl flex items-center justify-between gap-4 shadow-xl backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-neutral-950/80 border border-neutral-800/60 rounded-xl p-2 flex items-center justify-center overflow-hidden">
                      <img src={item.image} alt={item.title} className="max-h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-100">{item.title}</h4>
                      <p className="text-xs text-neutral-500 mt-1">${item.price.toFixed(2)} <span className="text-purple-400 font-semibold">x {item.quantity}</span></p>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-xs font-bold text-neutral-500 hover:text-red-400 bg-neutral-950 border border-neutral-800 px-3 py-2 rounded-xl transition-all">
                    Remove Unit
                  </button>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 bg-neutral-900/30 border border-neutral-800/80 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="font-bold text-sm uppercase tracking-wider text-neutral-400 mb-4">Manifest Invoice</h3>
              <div className="pt-4 flex justify-between mb-6 border-t border-neutral-800">
                <span className="text-sm font-bold text-white">Total Value</span>
                <span className="text-2xl font-black text-purple-400">${totalPayout.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
