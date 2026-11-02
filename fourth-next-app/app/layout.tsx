"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Listen to direct addition triggers coming from anywhere on client windows
    const handleItemSync = (e: Event) => {
      const product = (e as CustomEvent).detail;
      setCartItems((prev) => {
        const itemMatch = prev.find((item) => item.id === product.id);
        const nextCart = itemMatch
          ? prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
          : [...prev, { id: product.id, title: product.title, price: product.price, image: product.images?.[0] || "", quantity: 1 }];
        
        // Share live snapshot with the system
        window.dispatchEvent(new CustomEvent("CART_STATE_UPDATE", { detail: nextCart }));
        return nextCart;
      });
    };

    const handleRemovalSync = (e: Event) => {
      const id = (e as CustomEvent).detail;
      setCartItems((prev) => {
        const nextCart = prev.filter((item) => item.id !== id);
        window.dispatchEvent(new CustomEvent("CART_STATE_UPDATE", { detail: nextCart }));
        return nextCart;
      });
    };

    window.addEventListener("SYNC_CART_ADD", handleItemSync);
    window.addEventListener("SYNC_CART_REMOVE", handleRemovalSync);
    return () => {
      window.removeEventListener("SYNC_CART_ADD", handleItemSync);
      window.removeEventListener("SYNC_CART_REMOVE", handleRemovalSync);
    };
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-neutral-950 text-neutral-200">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
